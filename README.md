# VSCode RadJav Extension
See a general overview of debugging in VS Code [here](https://code.visualstudio.com/docs/editor/debugging).

## Getting started

* Download the extension from VSCode extensions.
* Open an XRJ file in VSCode.
* Add a new RadJav launch configuration.
* Debug it!

## Create a new project
Create a new RadJav project open Visual Studio Code, then open a new terminal.

Navigate to the directory where you wish to save the new project and enter:

    npm install -g radjav-tools
    radjav-tools --createProject

A new RadJav Hello World app will be created in the directory you've selected.

In Visual Studio Code, click File then open folder and select the folder containing the project you just created.

## Build iOS app
Once you've created your RadJav app, you can build an IPA that can be installed to an iOS device.

To build the IPA, press Ctrl-Shift-P and type:

    Package entire workspace as an iOS IPA

The IPA generated will be a debug IPA meant for testing use only. It will not be able to be uploaded to the app store.

## Build and install iOS app
Once you've created your RadJav app, you can build an IPA then install it to an iOS device.

To build and install the IPA, press Ctrl-Shift-P and type:

    Deploy entire workspace to iOS

NOTE: imobiledevice must be installed in order to install an IPA on either Windows, Mac, or Linux.

### Installing imobiledevice on Windows
http://docs.quamotion.mobi/imobiledevice/download/

### Installing imobiledevice on Ubuntu
    sudo apt-get install libimobiledevice
    sudo apt-get install ideviceinstaller

### Installing imobiledevice on Mac
    brew install libimobiledevice
    brew install ideviceinstaller

If imobiledevice isn't in your PATH environment variable, you can specify the path in your VSCode settings at radjav.imobiledevice

## Build Android app
Once you've created your RadJav app, you can build an APK that can be installed to an Android device.

To build the APK, press Ctrl-Shift-P and type:

    Package entire workspace as an Android APK

The APK generated will be a debug APK meant for testing use only. It will not be able to be uploaded to the app store.

### Build and install Android app
Create your RadJav app, then build an APK to install to an Android device.

Press Ctrl-Shift-P, type:

    Deploy entire workspace to Android

If the Android SDK isn't in its usual location, you must specify the location to it in your VSCode settings at radjav.androidsdk

## Convert a C# or VB.Net app to RadJav
Open your C# or VB.Net project's Form.Designer.cs or Form.Designer.vb file in Visual Studio Code.

Press Ctrl-Shift-P, type:

    Convert to GUI JSON.

A new tab will open with the JSON to be used in RadJav.

## Preview RadJav App
Preview the app you're developing as you code it. You can click the RadJav Preview App button in the upper right of any file that has a .xrj file extension.

Alternatively, you can press Ctrl-Shift-P and type:

    RadJav: RadJav App Preview

## License

Forked from [vscode-node-debug2](https://github.com/Microsoft/vscode-node-debug2). Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE.txt) License.
