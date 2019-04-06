import * as vscode from 'vscode';
import * as path from "path";
import * as fs from "fs";

export class PreviewManager implements vscode.WebviewPanelSerializer
{
    private panel: vscode.WebviewPanel;
    private readonly _disposables: vscode.Disposable[] = [];
    private extensionPath: string;
    private activeEditor: vscode.TextDocument;
    public static previewManagers: PreviewManager[] = [];

    public constructor(activeEditor: vscode.TextDocument, panel: vscode.WebviewPanel, extensionPath: string)
    {
        if (activeEditor == null)
        {
            this.dispose ();

            return;
        }

        this.activeEditor = activeEditor;
        this.panel = panel;
        this.extensionPath = extensionPath;
        this._disposables.push(vscode.window.registerWebviewPanelSerializer("RadJav.Preview", this));

        this.panel.onDidDispose (() => this.dispose (), null, this._disposables);
        this.panel.onDidChangeViewState (event =>
            {
                if (this.panel.visible == true)
                    this.update ();
            }, null, this._disposables);
        this.panel.webview.onDidReceiveMessage (function (message)
            {
                if (message.alert != null)
                    vscode.window.showInformationMessage (message.alert);

                if (message.ready != null)
                {
                    if (message.ready == true)
                    {
                        let content: string = this.activeEditor.getText ();
                        this.sendContent (content);
                    }
                }
            }, this, this._disposables);

        this.update ();
        this.watchCode ();
    }

    public static create (sideBySide: boolean, extensionPath: string)
    {
        let viewColumn = vscode.window.activeTextEditor.viewColumn;

        if (sideBySide == true)
            viewColumn += 1;

        let panel: vscode.WebviewPanel = vscode.window.createWebviewPanel (
            "RadJav.Preview", "RadJav App Preview",
            viewColumn, {
                enableFindWidget: true,
                enableScripts: true,
                enableCommandUris: true,
                localResourceRoots: [vscode.Uri.file (path.join (extensionPath, "media"))]
            });

        let previewManager: PreviewManager =
            new PreviewManager (vscode.window.activeTextEditor.document, panel, extensionPath);
        PreviewManager.previewManagers.push (previewManager);

        return (previewManager);
    }

    public static updateAll ()
    {
        for (let iIdx = 0; iIdx < PreviewManager.previewManagers.length; iIdx++)
            PreviewManager.previewManagers[iIdx].update ();
    }

    public static revive (panel: vscode.WebviewPanel, extensionPath: string)
    {
        let previewManager: PreviewManager =
            new PreviewManager (vscode.window.activeTextEditor.document, panel, extensionPath);
        PreviewManager.previewManagers.push (previewManager);
    }

    public dispose ()
    {
        this.disposeAll(this._disposables);

        this.panel.dispose ();
    }

    disposeAll(disposables: vscode.Disposable[])
    {
        while (disposables.length)
        {
            const item = disposables.pop();

            if (item)
                item.dispose();
        }
    }

    watchCode ()
    {
        let watcher: vscode.FileSystemWatcher = vscode.workspace.createFileSystemWatcher ("**/*.*");

        watcher.onDidChange (function (event: vscode.Uri)
            {
                this.refreshView ();
            }, this, this._disposables);
        watcher.onDidCreate (function ()
            {
                this.refreshView ();
            }, this, this._disposables);
        watcher.onDidDelete (function ()
            {
                this.refreshView ();
            }, this, this._disposables);
        this._disposables.push (vscode.workspace.onDidChangeTextDocument (function (event: vscode.TextDocumentChangeEvent)
            {
                this.refreshView ();
            }, this, this._disposables));

        this._disposables.push (watcher);
    }

    refreshView ()
    {
        this.panel.webview.html = "";
        this.update ();
    }

    sendContent (content: string)
    {
        this.panel.webview.postMessage ({ content: content });
    }

    update ()
    {
        let content: string = null;
        let extPath: string = path.join (this.extensionPath, "media");

        try
        {
            content = fs.readFileSync (path.join (extPath, "index.htm")).toString ();
        }
        catch (ex)
        {
        }

        if (content != null)
        {
            let uri = vscode.Uri.file (extPath);
            let baseUri = uri.with ({ scheme: "vscode-resource" });
            content = content.replace (/\%baseUrl\%/g, baseUri.toString () + "/");

            this.panel.webview.html = content.toString ();
        }
        else
            this.panel.webview.html = "Unable to load RadJav.";
    }

    public async deserializeWebviewPanel(webview: vscode.WebviewPanel, state: any): Promise<void>
    {

    }
}