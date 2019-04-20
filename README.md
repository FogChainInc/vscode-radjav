# VSCode RadJav Extension
See a general overview of debugging in VS Code [here](https://code.visualstudio.com/docs/editor/debugging).

## Getting started

* Download the extension from VSCode extensions.
* Open an XRJ file in VSCode.
* Add a new RadJav launch configuration.
* Debug it!

## Build and install iOS app
Create your RadJav app, then build an IPA to install to an iOS device.

Press Ctrl-Shift-P, type:

    Deploy entire workspace to iOS

imobiledevice must be installed in order to install an IPA on either Windows, Mac, or Linux.

### Installing imobiledevice on Windows
http://docs.quamotion.mobi/imobiledevice/download/

### Installing imobiledevice on Ubuntu
    sudo apt-get install libimobiledevice
    sudo apt-get install ideviceinstaller

### Installing imobiledevice on Mac
    brew install libimobiledevice
    brew install ideviceinstaller

If imobiledevice isn't in your PATH environment variable, you can specify the path in your VSCode settings at radjav.imobiledevice

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
