/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import * as Core from 'vscode-chrome-debug-core';
import { RadJavTools } from "radjav-tools-lib";
import { PreviewManager } from "./PreviewManager";
import * as path from "path";

export function activate(context: vscode.ExtensionContext)
{
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.preview.start",
        function ()
        {
            if (vscode.window.registerWebviewPanelSerializer != null)
                context.subscriptions.push (PreviewManager.create (false, context.extensionPath));
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.preview.doRefactor",
        function ()
        {
            PreviewManager.updateAll ();
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.showPreview",
        function ()
        {
            if (vscode.window.registerWebviewPanelSerializer != null)
                context.subscriptions.push (PreviewManager.create (false, context.extensionPath));
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.showPreviewToSide",
        function ()
        {
            if (vscode.window.registerWebviewPanelSerializer != null)
                context.subscriptions.push (PreviewManager.create (true, context.extensionPath));
        }));

    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.buildIOS",
        function ()
        {
            let root: vscode.WorkspaceFolder = vscode.workspace.workspaceFolders[0];
            let folderPath: string = root.uri.fsPath;
            let binPath: string = path.join (context.extensionPath, "media", "prebuilt", "ios");

            RadJavTools.buildIPA (binPath, folderPath);
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.deployToIOS",
        function ()
        {
            let root: vscode.WorkspaceFolder = vscode.workspace.workspaceFolders[0];
            let folderPath: string = root.uri.fsPath;
            let binPath: string = path.join (context.extensionPath, "media", "prebuilt", "ios");
            let imobiledevice: string = vscode.workspace.getConfiguration ("radjav").get<string> ("imobiledevice");

            RadJavTools.buildIPA (binPath, folderPath);
            RadJavTools.installIPA (`${folderPath}/app.ipa`, imobiledevice);
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.buildAndroid",
        function ()
        {
            let root: vscode.WorkspaceFolder = vscode.workspace.workspaceFolders[0];
            let folderPath: string = root.uri.fsPath;
            let binPath: string = path.join (context.extensionPath, "media", "prebuilt", "android");
            let androidsdk: string = vscode.workspace.getConfiguration ("radjav").get<string> ("androidsdk");

            RadJavTools.buildAPK (binPath, folderPath, "app.xrj", androidsdk);
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.deployToAndroid",
        function ()
        {
            let root: vscode.WorkspaceFolder = vscode.workspace.workspaceFolders[0];
            let folderPath: string = root.uri.fsPath;
            let binPath: string = path.join (context.extensionPath, "media", "prebuilt", "android");
            let androidsdk: string = vscode.workspace.getConfiguration ("radjav").get<string> ("androidsdk");

            RadJavTools.buildAPK (binPath, folderPath, "app.xrj", androidsdk);
            RadJavTools.installAPK (`${folderPath}/app.apk`, androidsdk);
        }));
    context.subscriptions.push (vscode.commands.registerCommand ("extension.radjav-debug2.convertToGUIJSON",
        function ()
        {
            let editor = vscode.window.activeTextEditor;

            if (editor != null)
            {
                let text: string = editor.document.getText ();
                let result: string = RadJavTools.convertToGUIJSON (text, editor.document.uri.path);

                vscode.workspace.openTextDocument (
                        {
                            language: "json",
                            content: result
                        }
                    ).then (function (doc: vscode.TextDocument)
                        {
                            vscode.window.showTextDocument (doc);
                        });
            }
        }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.radjav-debug2.toggleSkippingFile', toggleSkippingFile));

    const provider = new RadJavConfigurationProvider ();
    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('radjav', provider));
    context.subscriptions.push(provider);
}

export function deactivate() {
}

function toggleSkippingFile(path: string|number): void {
    if (!path) {
        const activeEditor = vscode.window.activeTextEditor;
        path = activeEditor && activeEditor.document.fileName;
    }

    if (path && vscode.debug.activeDebugSession) {
        const args: Core.IToggleSkipFileStatusArgs = typeof path === 'string' ? { path } : { sourceReference: path };
        vscode.debug.activeDebugSession.customRequest('toggleSkipFileStatus', args);
    }
}

class RadJavConfigurationProvider implements vscode.DebugConfigurationProvider
{
    public adapter = null;

	/**
	 * Massage a debug configuration just before a debug session is being launched,
	 * e.g. add all missing attributes to the debug configuration.
	 */
	resolveDebugConfiguration(folder: vscode.WorkspaceFolder | undefined, config: vscode.DebugConfiguration, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration> {

		// if launch.json is missing or empty
		if (!config.type && !config.request && !config.name) {
			const editor = vscode.window.activeTextEditor;
            if (editor)// && editor.document.languageId === 'markdown' )
            {
				config.type = 'radjav';
				config.name = 'Launch';
				config.request = 'launch';
				config.program = '${file}';
				config.stopOnEntry = true;
			}
		}

		if (!config.program) {
			return vscode.window.showInformationMessage("Cannot find a program to debug").then(_ => {
				return undefined;	// abort launch
			});
        }

        /*ChromeDebugSession.run(ChromeDebugSession.getSession(
            {
                logFilePath: path.join(os.tmpdir(), 'vscode-radjav-debug2.txt'), // non-.txt file types can't be uploaded to github
                adapter: NodeDebugAdapter,
                extensionName: 'radjav-debug2'
            }));*/

		return config;
    }

    dispose ()
    {

    }
}
