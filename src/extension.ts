/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import * as Core from 'vscode-chrome-debug-core';
import { RadJavTools } from "./RadJavTools";
import { PreviewManager } from "./PreviewManager";

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
			if (editor && editor.document.languageId === 'markdown' ) {
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
