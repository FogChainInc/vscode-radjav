if (typeof (window) == "undefined") {
}
var RadJav;
(function (RadJav) {
    RadJav.useEval = true;
    RadJav.MIN_VERSION = 0.05;
    RadJav.VERSION = 0.05;
    RadJav.baseUrl = "./RadJav/";
    RadJav.themeUrl = "./RadJav/themes/default";
    RadJav.selectedLanguage = "en_us";
    RadJav.isThemeLoaded = false;
    RadJav.currentTheme = null;
    RadJav._isInitialized = false;
    RadJav._included = [];
    RadJav._lang = {};
    RadJav.themeUtils = {};
    RadJav.useAjax = true;
    RadJav.isMinified = false;
    RadJav._animations = [];
    RadJav.animationFrameRate = 16;
    RadJav.prevTime = (Date.now() / 1000);
    RadJav.screens = [];
    function quit(exitCode) {
        if (exitCode === void 0) { exitCode = 0; }
    }
    RadJav.quit = quit;
    function exit(exitCode) { }
    RadJav.exit = exit;
    function include(path) {
        var promise = null;
        if (RadJav.OS.HTML5 == null)
            return (null);
        if (RadJav.useAjax == true) {
            promise = RadJav._getResponse(path).then(RadJav.keepContext(function (response) {
                if (response != null) {
                    if (response != "")
                        _eval(response);
                }
            }, this));
        }
        else {
            promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = false;
                script.defer = false;
                var str = "";
                if (RadJav._isUsingInternetExplorerTheWorstWebBrowserEver() == true)
                    script.text = str;
                else {
                    var textNode = document.createTextNode(str);
                    script.appendChild(textNode);
                }
                script.onreadystatechange = RadJav.keepContext(function (evt, script2) {
                    var s = script2[0];
                    if (s.readyState == null)
                        s.readyState = "complete";
                    if (s.readyState == "complete")
                        resolve();
                }, this, [script]);
                script.onload = script.onreadystatechange;
                script.onerror = RadJav.keepContext(function (err) {
                    throw RadJav.getLangString("errorWhileIncludingFile", err.message, path);
                }, this);
                script.src = path;
                document.documentElement.insertBefore(script, document.documentElement.firstChild);
            }, this));
        }
        return promise;
    }
    RadJav.include = include;
    function initialize(libraries) {
        if (libraries === void 0) { libraries = null; }
        var promise = new Promise(RadJav.keepContext(function (resolve, reject, args) {
            if (RadJav._isInitialized == true) {
                resolve();
                return;
            }
            var promises = [];
            promises.push(RadJav._loadLanguages());
            if (libraries == null || libraries.length == 0) {
                promises.push(RadJav.includeLibraries(RadJav.getStandardLibrary()));
                promises.push(RadJav.includeLibraries(RadJav.getGUILibrary()));
            }
            if (libraries != null) {
                if (args.length > 1) {
                    for (var iIdx = 1; iIdx < args.length; iIdx++) {
                        var tempArg = args[iIdx];
                        for (var iJdx = 0; iJdx < tempArg.length; iJdx++) {
                            libraries.push(tempArg[iJdx]);
                        }
                    }
                }
                promises.push(RadJav.includeLibraries(libraries));
            }
            promises.push(RadJav._loadTheme(RadJav.themeUrl));
            Promise.all(promises).then(function () {
                RadJav._isInitialized = true;
                if (RadJav.useEval == false) {
                    var evalu = function () {
                        var msg = "RadJav disables eval by default. Set RadJav.useEval = true; to enable it.";
                        alert(msg);
                        throw msg;
                    };
                }
                resolve();
            });
        }, RadJav, arguments));
        return promise;
    }
    RadJav.initialize = initialize;
    function getStandardLibrary() {
        var includes = [
            { file: "RadJav.Circle", themeFile: false },
            { file: "RadJav.Rectangle", themeFile: false },
            { file: "RadJav.Vector2", themeFile: false },
            { file: "RadJav.Vector3", themeFile: false },
            { file: "RadJav.Color", themeFile: false },
            { file: "Math", themeFile: false, loadFirst: true },
            { file: "String", themeFile: false, loadFirst: true }
        ];
        return includes;
    }
    RadJav.getStandardLibrary = getStandardLibrary;
    function getGUILibrary() {
        var includes = [
            { file: "RadJav.GUI.GObject", themeFile: true, loadFirst: true },
            { file: "RadJav.Font", themeFile: false, loadFirst: true },
            { file: "RadJav.Animation", themeFile: false, loadFirst: true },
            { file: "RadJav.GUI.Window", themeFile: true },
            { file: "RadJav.GUI.MenuBar", themeFile: true },
            { file: "RadJav.GUI.MenuItem", themeFile: true },
            { file: "RadJav.GUI.Button", themeFile: true },
            { file: "RadJav.GUI.Textbox", themeFile: true },
            { file: "RadJav.GUI.Checkbox", themeFile: true },
            { file: "RadJav.GUI.Radio", themeFile: true },
            { file: "RadJav.GUI.List", themeFile: true },
            { file: "RadJav.GUI.Image", themeFile: true },
            { file: "RadJav.GUI.Label", themeFile: true },
            { file: "RadJav.GUI.Container", themeFile: true },
            { file: "RadJav.GUI.HTMLElement", themeFile: true },
            { file: "RadJav.GUI.Combobox", themeFile: true },
            { file: "RadJav.GUI.Textarea", themeFile: true },
            { file: "RadJav.MUI.ScrollView", themeFile: true },
            { file: "RadJav.MUI.Navigator", themeFile: true },
            { file: "RadJav.MUI.View", themeFile: true }
        ];
        return includes;
    }
    RadJav.getGUILibrary = getGUILibrary;
    function getMUILibrary() {
        var includes = [
            { file: "RadJav.GUI.GObject", themeFile: true, loadFirst: true },
            { file: "RadJav.Font", themeFile: false, loadFirst: true },
            { file: "RadJav.MUI.View", themeFile: true },
            { file: "RadJav.GUI.Button", themeFile: true }
        ];
        return includes;
    }
    RadJav.getMUILibrary = getMUILibrary;
    function getC3DLibrary() {
        var includes = [
            { file: "RadJav.GUI.Window", themeFile: true },
            { file: "RadJav.GUI.Canvas3D", themeFile: true },
            { file: "RadJav.C3D.Object3D", themeFile: false, loadFirst: true },
            { file: "RadJav.GUI.GObject", themeFile: false, loadFirst: true },
            { file: "RadJav.Font", themeFile: false },
            { file: "RadJav.C3D.Camera", themeFile: false },
            { file: "RadJav.C3D.Entity", themeFile: false },
            { file: "RadJav.C3D.Transform", themeFile: false },
            { file: "RadJav.Vector3", themeFile: false },
            { file: "RadJav.Vector4", themeFile: false },
            { file: "RadJav.Quaternion", themeFile: false },
            { file: "RadJav.C3D.Model", themeFile: false, loadFirst: false },
            { file: "RadJav.C3D.Material", themeFile: false, loadFirst: false }
        ];
        return includes;
    }
    RadJav.getC3DLibrary = getC3DLibrary;
    function getNetLibrary() {
        var includes = [{ file: "RadJav.Net.WebSocketClient", themeFile: false }];
        return includes;
    }
    RadJav.getNetLibrary = getNetLibrary;
    function getPrimaryScreen() {
        return (this.screens[0]);
    }
    RadJav.getPrimaryScreen = getPrimaryScreen;
    function addScreen(screen) {
        this.screens.push(screen);
    }
    RadJav.addScreen = addScreen;
    function setupScreens() {
        if (RadJav.OS.type == "html5")
            RadJav.screens.push(RadJav.OS.ScreenInfo.getScreenInfo(0));
    }
    RadJav.setupScreens = setupScreens;
    function connectDevTools(server, showMessage) {
        if (server === void 0) { server = "ws://127.0.0.1:8585/"; }
        if (showMessage === void 0) { showMessage = true; }
        var displayMessageVis = function (msg, visibility) {
            var visible = "visible";
            if (visibility == false)
                visible = "hidden";
            var dialog = document.getElementById("dialog");
            dialog.style.visibility = visible;
            var message = document.getElementById("message");
            message.innerHTML = msg;
        };
        var displayMessage = function (msg) {
            displayMessageVis(msg, true);
        };
        var html = "<div id = \"dialog\" style = \"position: absolute; background-color: #000000; ";
        html += "color: #FFFFFF; width: 100%; height: 100%; visibility: visible;\">";
        html += "<div id = \"message\">";
        html += "Connecting to server...";
        html += "</div>";
        html += "</div>";
        if (showMessage == true)
            RadJav.OS.HTML5.appendHTML(document.body, html);
        var msg = "Connecting to web socket server at: " + server + "<br />\n";
        displayMessage(msg);
        var webSocket = new WebSocket(server);
        webSocket.onopen = function () {
            displayMessageVis("", false);
        };
        webSocket.onerror = function (error) {
            displayMessage("Unable to connect to web socket server.");
        };
        webSocket.onmessage = function (message) {
            if (message.data == "refresh")
                location.reload();
        };
        webSocket.onclose = function () {
            displayMessage("Disconnected from WebSocket server. Please refresh the page to reconnect.");
        };
    }
    RadJav.connectDevTools = connectDevTools;
    function includeLibraries(libraries) {
        for (var iIdx = 0; iIdx < libraries.length; iIdx++)
            RadJav._included.push(libraries[iIdx]);
        var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
            if (RadJav.OS.HTML5 == null) {
                resolve();
                return;
            }
            var promises = [];
            for (var iIdx = 0; iIdx < RadJav._included.length; iIdx++) {
                var includeObj = RadJav._included[iIdx];
                if (typeof (includeObj) != "string") {
                    if (includeObj.loadFirst == true) {
                        var file = "";
                        var shouldIncludeFile = false;
                        if (typeof (includeObj) != "string") {
                            if (typeof (includeObj.file) == "string")
                                file = includeObj.file;
                        }
                        else
                            file = includeObj;
                        if (_eval("if (" + file + " != null){true;}else{false;}") == false)
                            shouldIncludeFile = true;
                        if (RadJav.isMinified == false) {
                            if ((file == "Math") || (file == "String"))
                                shouldIncludeFile = true;
                        }
                        if (shouldIncludeFile == true) {
                            var includeFile = RadJav.baseUrl + "/" + file + ".js";
                            promises.push(RadJav.include(includeFile));
                        }
                    }
                }
            }
            Promise.all(promises).then(function () {
                var promises2 = [];
                for (var iIdx = 0; iIdx < RadJav._included.length; iIdx++) {
                    var includeObj = RadJav._included[iIdx];
                    var file = "";
                    var shouldIncludeFile = false;
                    if (typeof (includeObj) != "string") {
                        if (typeof (includeObj.file) == "string")
                            file = includeObj.file;
                    }
                    else
                        file = includeObj;
                    if (_eval("if (" + file + " != null){true;}else{false;}") == false)
                        shouldIncludeFile = true;
                    if (RadJav.isMinified == false) {
                        if ((file == "Math") || (file == "String"))
                            shouldIncludeFile = true;
                    }
                    if (shouldIncludeFile == true) {
                        var includeFile = RadJav.baseUrl + "/" + file + ".js";
                        promises2.push(RadJav.include(includeFile));
                    }
                }
                Promise.all(promises2).then(function () {
                    resolve();
                });
            });
        }, RadJav));
        return (promise);
    }
    RadJav.includeLibraries = includeLibraries;
    function _loadLanguages() {
        var promise = new Promise(function (resolve, reject) {
            if ((RadJav.OS.HTML5 != null) && (RadJav._lang == null)) {
                RadJav.include(RadJav.baseUrl + "/languages/" + RadJav.selectedLanguage + ".js").then(function () {
                    resolve();
                });
            }
            else
                resolve();
        });
        return promise;
    }
    RadJav._loadLanguages = _loadLanguages;
    function _loadTheme(themeURL) {
        var url = themeURL;
        if (url[themeURL.length - 1] == "/")
            url = url.substr(0, themeURL.length - 1);
        var promise = new Promise(function (resolve, reject) {
            if (RadJav.OS.HTML5 == null) {
                resolve();
                return;
            }
            if (RadJav.isThemeLoaded == false) {
                RadJav._getResponse(url + "/theme.js").then(function (data) {
                    _eval(data);
                    var theme = RadJav.Theme.loadTheme(url, RadJav.currentTheme);
                    RadJav.currentTheme = theme;
                    var promises2 = [];
                    promises2.push(RadJav.currentTheme.loadInitializationFile());
                    promises2.push(RadJav.currentTheme.loadJavascriptFiles());
                    Promise.all(promises2).then(function () {
                        RadJav.isThemeLoaded = true;
                        resolve();
                    });
                });
            }
            else {
                RadJav.isThemeLoaded = false;
                var theme = RadJav.Theme.loadTheme(url, RadJav.currentTheme);
                RadJav.currentTheme = theme;
                var promises2 = [];
                promises2.push(RadJav.currentTheme.loadInitializationFile());
                promises2.push(RadJav.currentTheme.loadJavascriptFiles());
                Promise.all(promises2).then(function () {
                    RadJav.isThemeLoaded = true;
                    resolve();
                });
            }
        });
        return promise;
    }
    RadJav._loadTheme = _loadTheme;
    function runApplication(file, createRootGObj) {
        if (createRootGObj === void 0) { createRootGObj = false; }
        var promise = RadJav.initialize().then(RadJav.keepContext(function () {
            var promise = null;
            var rootGObj = null;
            if (createRootGObj == true) {
                if (RadJav.isMobile() == true) {
                    rootGObj = new RadJav.MUI["View"]("win", "Navigator example");
                    promise = rootGObj["createMainView"]();
                    if (promise == null) {
                        promise = new Promise(function (resolve, reject) {
                            resolve();
                        });
                    }
                }
                else {
                    rootGObj = new RadJav.GUI.Window("win", "Window Example");
                    promise = rootGObj.create();
                }
            }
            else {
                promise = new Promise(function (resolve, reject) {
                    resolve();
                });
            }
            promise.then(RadJav.keepContext(function (createdGObj) {
                if (typeof file == "string") {
                    promise = RadJav.include(file).then(RadJav.keepContext(function (data) {
                        var func = new _Function(data);
                        func(createdGObj);
                    }, this));
                }
                else {
                    promise = new Promise(RadJav.keepContext(function (resolve, reject, func) {
                        func(createdGObj);
                        resolve();
                    }, this, file));
                }
            }, this));
            return (promise);
        }, this));
        return promise;
    }
    RadJav.runApplication = runApplication;
    function runApp(file, createRootGObj) {
        if (createRootGObj === void 0) { createRootGObj = false; }
        return (RadJav.runApplication(file, createRootGObj));
    }
    RadJav.runApp = runApp;
    function runApplicationFromFile(file) {
        return RadJav.runApplication(file);
    }
    RadJav.runApplicationFromFile = runApplicationFromFile;
    function loadObjects(objs) {
        var promise = new Promise(function (resolve, reject) {
            var promises = [];
            var createdObjs = {};
            if (typeof objs == "string")
                objs = JSON.parse(objs);
            for (var iIdx = 0; iIdx < objs.length; iIdx++) {
                var obj = objs[iIdx];
                var type = obj.type;
                var name_1 = obj.name;
                var createdObj = null;
                var promise2 = null;
                if (type.indexOf(".GUI") > -1) {
                    createdObj = new RadJav.GUI[type](obj);
                    promise2 = createdObj.create();
                }
                if (type.indexOf(".C3D") > -1) {
                    createdObj = new RadJav.C3D[type](obj);
                    promise2 = createdObj.create();
                }
                if (createdObj != null)
                    createdObjs[name_1] = createdObj;
                if (promise2 != null)
                    promises.push(promise2);
            }
            Promise.all(promises).then(function () {
                resolve(createdObjs);
            });
        });
        return promise;
    }
    RadJav.loadObjects = loadObjects;
    function loadXML(xml) {
        var promise = new Promise(function (resolve, reject) {
            var file = RadJav.XML.XMLFile.loadString(xml);
            var tag = file.root.tag.toLowerCase();
            var promises = [];
            if (tag == "radjav") {
                var apps = file.root.getTags("app");
                var _loop_1 = function (iIdx) {
                    var app = apps[iIdx];
                    var name_2 = app.getAttributeString("name", "mainWindow");
                    var platform = app.getAttributeString("platform", "");
                    var html5parent = app.getAttributeString("html5parent", "body");
                    var autoCreateWindow = app.getAttributeBoolean("autoCreateWindow", true);
                    var newWindow = null;
                    var appPromise = null;
                    if (autoCreateWindow == true) {
                        if (typeof (RadJav.OS.HTML5) != "undefined") {
                            var elm = new RadJav.GUI.HTMLElement(name_2, html5parent);
                            appPromise = elm.create().then(function (mainWindow) {
                                return (mainWindow);
                            });
                        }
                        else {
                            var win = new RadJav.GUI.Window(name_2);
                            appPromise = win.create().then(function (mainWindow) {
                                return (mainWindow);
                            });
                        }
                    }
                    if (appPromise != null) {
                        appPromise.then(function (win) {
                            RadJav.loadAppXML(win, app.children);
                        });
                    }
                };
                for (var iIdx = 0; iIdx < apps.length; iIdx++) {
                    _loop_1(iIdx);
                }
                return (Promise.all(promises).then(function () {
                }));
            }
        });
        return promise;
    }
    RadJav.loadXML = loadXML;
    function loadAppXML(parent, objs) {
        var tags = [];
        if (typeof (RadJav.GUI) != "undefined") {
            for (var key in RadJav.GUI) {
                var xmlTag = null;
                if (typeof (RadJav.GUI[key].xmlTag) != "undefined")
                    xmlTag = RadJav.GUI[key].xmlTag;
                tags.push(xmlTag);
            }
        }
        var newObjs = [];
        for (var iIdx = 0; iIdx < tags.length; iIdx++) {
            var xmlTag = tags[iIdx];
            for (var iJdx = 0; iJdx < objs.length; iJdx++) {
                var obj = objs[iJdx];
                var foundTags = obj.getTags(xmlTag.tag);
                for (var iKdx = 0; iKdx < foundTags.length; iKdx++) {
                    var foundTag = foundTags[iKdx];
                    var newObj = new RadJav.GUI[xmlTag.type](foundTag);
                    newObjs.push(newObj);
                }
            }
        }
        return (newObjs);
    }
    RadJav.loadAppXML = loadAppXML;
    function isMobile() {
        if (RadJav.OS.HTML5 != null) {
            var os = RadJav.OS.HTML5.getOS();
            if (os == "android")
                return (true);
            if (os == "iphone")
                return (true);
            if (os == "ipad")
                return (true);
            if (os == "ipod")
                return (true);
        }
        else {
            if (RadJav.OS.type == "android")
                return (true);
            if (RadJav.OS.type == "ios")
                return (true);
        }
        return (false);
    }
    RadJav.isMobile = isMobile;
    function _isUsingInternetExplorerTheWorstWebBrowserEver() {
        if (navigator.appName) {
            if (navigator.appName == "Microsoft Internet Explorer")
                return true;
        }
        return false;
    }
    RadJav._isUsingInternetExplorerTheWorstWebBrowserEver = _isUsingInternetExplorerTheWorstWebBrowserEver;
    function _getSyncResponse(addr) {
        var request = null;
        var response = null;
        if (RadJav.useAjax == false) {
            throw RadJav.getLangString("cannotGetAjaxResponse");
        }
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        request.onreadystatechange = RadJav.keepContext(function (evt, request2) {
            var req = request2[0];
            try {
                if (req.readyState == 4 && req.status == 200) {
                    response = req.responseText;
                }
            }
            catch (ex) { }
        }, this, [request]);
        request.open("GET", addr, false);
        request.send();
        return response;
    }
    RadJav._getSyncResponse = _getSyncResponse;
    function _getResponse(addr) {
        var promise = RadJav.Net.httpRequest(addr);
        return promise;
    }
    RadJav._getResponse = _getResponse;
    function clone() {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i] = arguments[_i];
        }
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        var isPlainObject = function (obj) {
            var proto, Ctor;
            if (!obj || obj.toString() !== "[object Object]") {
                return false;
            }
            proto = Object.getPrototypeOf(obj);
            if (!proto) {
                return true;
            }
            Ctor = proto.hasOwnProperty("constructor") && proto.constructor;
            return (typeof Ctor === "function" &&
                Ctor.toString() === Ctor.toString.call(Object));
        };
        var isFunction = function (obj) {
            return typeof obj === "function";
        };
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep &&
                        copy &&
                        (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        }
                        else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        target[name] = RadJav.clone(deep, clone, copy);
                    }
                    else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }
    RadJav.clone = clone;
    function cloneObject(obj) {
        return RadJav.clone({}, obj);
    }
    RadJav.cloneObject = cloneObject;
    function cloneArray(obj) {
        return RadJav.clone([], obj);
    }
    RadJav.cloneArray = cloneArray;
    function copyProperties(obj1, obj2, overwriteExisting) {
        if (overwriteExisting == null) {
            overwriteExisting = true;
        }
        for (var key in obj2) {
            if (overwriteExisting == false) {
                if (obj1[key] == null) {
                    obj1[key] = obj2[key];
                }
            }
            else {
                obj1[key] = obj2[key];
            }
        }
        return obj1;
    }
    RadJav.copyProperties = copyProperties;
    function setDefaultValue(param, defaultValue, onValue) {
        if (param == undefined)
            return (defaultValue);
        if (onValue != null)
            return (onValue(param));
        return (param);
    }
    RadJav.setDefaultValue = setDefaultValue;
    function loadModule(moduleData) {
        return (_eval("(function (module){ " + moduleData + "; return module; })({});"));
    }
    RadJav.loadModule = loadModule;
    function keepContext(func, context, val) {
        var objReturn = function () {
            var aryArgs = Array.prototype.slice.call(arguments);
            if (val != undefined) {
                aryArgs.push(val);
            }
            if (context == null) {
                return func.apply(this, aryArgs);
            }
            else {
                return func.apply(context, aryArgs);
            }
        };
        return objReturn;
    }
    RadJav.keepContext = keepContext;
    function getLangString(keyword) {
        var other = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            other[_i - 1] = arguments[_i];
        }
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        args.splice(0, 0, RadJav._lang[keyword]);
        return RadJav.combineString.apply(RadJav, args);
    }
    RadJav.getLangString = getLangString;
    function combineString(primaryString) {
        var otherStrings = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherStrings[_i - 1] = arguments[_i];
        }
        var strReturn = "";
        if (primaryString != null)
            strReturn = primaryString;
        for (var iIdx = 1; iIdx < arguments.length; iIdx++)
            strReturn = strReturn.replace("%s", arguments[iIdx]);
        return (strReturn);
    }
    RadJav.combineString = combineString;
    function _resolveThis(resolve, reject) {
        resolve(this);
    }
    RadJav._resolveThis = _resolveThis;
    function _emptyResolve(resolve, reject) {
        return (resolve());
    }
    RadJav._emptyResolve = _emptyResolve;
    function _guiFinishedCreatingGObject(resolve, reject) {
        var promises = [];
        for (var iIdx = 0; iIdx < this._children.length; iIdx++) {
            var justCreateTheObject = true;
            if (this.type == "RadJav.MUI.Navigator") {
                if (this["pushView"] != "") {
                    justCreateTheObject = false;
                    this._children[iIdx] = RadJav.GUI.initObj(this._children[iIdx], "", "", this);
                    promises.push(this._children[iIdx].create().then(RadJav.keepContext(function (result) {
                        this["push"](result);
                        return (result);
                    }, this)));
                }
            }
            if (justCreateTheObject == true) {
                this._children[iIdx] = RadJav.GUI.initObj(this._children[iIdx], "", "", this);
                promises.push(this._children[iIdx].create());
            }
        }
        Promise.all(promises).then(RadJav.keepContext(function () {
            for (var key in this._events) {
                if (this._events[key] != null) {
                    var func = new Function(this._events[key]);
                    if (RadJav["currentTheme"] != null)
                        RadJav.currentTheme.event(this.type, "on", this, key, func);
                }
            }
            if (this.onCreated != null)
                this.onCreated();
            resolve(this);
        }, this));
    }
    RadJav._guiFinishedCreatingGObject = _guiFinishedCreatingGObject;
    function getTime() {
        return (Date.now() / 1000);
    }
    RadJav.getTime = getTime;
    function addAnimation(anim) {
        var startAnimationLoop = false;
        if (RadJav._animations.length < 1)
            startAnimationLoop = true;
        RadJav._animations.push(anim);
        if (startAnimationLoop == true)
            setTimeout(RadJav.animationUpdate, RadJav.animationFrameRate);
    }
    RadJav.addAnimation = addAnimation;
    function animationUpdate() {
        var currentTime = RadJav.getTime();
        var deltaTime = (currentTime - RadJav.prevTime);
        RadJav.prevTime = currentTime;
        for (var iIdx = 0; iIdx < RadJav._animations.length; iIdx++) {
            var anim = RadJav._animations[iIdx];
            anim.update(deltaTime);
        }
        if (RadJav._animations.length > 0)
            setTimeout(RadJav.animationUpdate, RadJav.animationFrameRate);
    }
    RadJav.animationUpdate = animationUpdate;
    var TagType = (function () {
        function TagType() {
            this.tag = "";
            this.type = "";
        }
        return TagType;
    }());
    RadJav.TagType = TagType;
    var Theme = (function () {
        function Theme(obj) {
            if (obj === void 0) { obj = null; }
            this.name = "";
            this.version = "";
            this.author = "";
            this.lastUpdated = null;
            this.description = "";
            this.url = "";
            this.initFile = "";
            this.cssFiles = [];
            this.fonts = [];
            this.name = RadJav.setDefaultValue(obj.name, "");
            this.version = RadJav.setDefaultValue(obj.version, "");
            this.author = RadJav.setDefaultValue(obj.author, "");
            this.lastUpdated = RadJav.setDefaultValue(obj.lastUpdated, null);
            this.description = RadJav.setDefaultValue(obj.description, "");
            this.url = RadJav.setDefaultValue(obj.url, "");
            this.initFile = RadJav.setDefaultValue(obj.initFile, "");
            this.cssFiles = RadJav.setDefaultValue(obj.cssFiles, []);
            this.fonts = RadJav.setDefaultValue(obj.fonts, []);
            this.exports = RadJav.setDefaultValue(obj.exports, null);
            this.themeObjects = RadJav.setDefaultValue(obj.themeObjects, {});
        }
        Theme.prototype.loadInitializationFile = function () {
            var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                var func = RadJav.keepContext(function (data) {
                    try {
                        var promises = [];
                        if (typeof data == "string")
                            RadJav.currentTheme.exports = RadJav.loadModule(data).exports;
                        if (typeof (RadJav.currentTheme.exports.init) != "undefined") {
                            var hasPromise = RadJav.currentTheme.exports.init();
                            if (hasPromise != null)
                                promises.push(hasPromise);
                        }
                        var fontCSS = "";
                        for (var iIdx_1 = 0; iIdx_1 < this.fonts.length; iIdx_1++) {
                            var fontName = this.fonts[iIdx_1].name;
                            var fontUrl = this.url + "/" + this.fonts[iIdx_1].relPath;
                            fontCSS += "@font-face\n";
                            fontCSS += "{\n";
                            fontCSS += '\tfont-family: "' + fontName + '";\n';
                            fontCSS += '\tsrc: url("' + fontUrl + '");\n';
                            fontCSS += "}\n\n";
                        }
                        if (this.fonts.length > 0) {
                            var style = document.createElement("style");
                            style.innerHTML = fontCSS;
                            document.head.appendChild(style);
                        }
                        for (var iIdx = 0; iIdx < this.cssFiles.length; iIdx++) {
                            promises.push(new Promise(RadJav.keepContext(function (resolve, reject, index) {
                                var iIdx2 = index[0];
                                var style = document.createElement("style");
                                style.setAttribute("rel", "stylesheet");
                                style.setAttribute("type", "text/css");
                                style.setAttribute("href", this.url + "/" + this.cssFiles[iIdx2]);
                                style.onload = function () {
                                    resolve();
                                };
                                document.head.appendChild(style);
                            }, this, [iIdx])));
                        }
                        Promise.all(promises).then(function () {
                            resolve();
                        });
                    }
                    catch (ex) {
                        throw RadJav.getLangString("themeThrewErrorInFile", this.name, this.initFile, ex.message);
                    }
                }, this);
                if (RadJav.isThemeLoaded == false)
                    RadJav.include(this.url + "/" + this.initFile).then(func);
                else {
                    func(RadJav.currentTheme.exports);
                    resolve();
                }
            }, this));
            return promise;
        };
        Theme.prototype.loadJavascriptFiles = function () {
            var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                var files = [];
                for (var iIdx = 0; iIdx < RadJav._included.length; iIdx++) {
                    var includeObj = RadJav._included[iIdx];
                    if (typeof includeObj != "string") {
                        if (typeof includeObj.themeFile == "string")
                            files.push(includeObj.themeFile);
                        else {
                            if (includeObj.themeFile == true) {
                                files.push(includeObj.file);
                            }
                            else
                                continue;
                        }
                    }
                }
                for (var iIdx = 0; iIdx < files.length; iIdx++) {
                    var file = files[iIdx];
                    (function (theme, url, tfile, index, numFiles) {
                        try {
                            if (RadJav.currentTheme.themeObjects[tfile] == null)
                                RadJav.currentTheme.themeObjects[tfile] = new Object();
                            if (RadJav.isThemeLoaded == false) {
                                RadJav.include(url + "/" + tfile + ".js").then(function (data) {
                                    if (index >= numFiles - 1) {
                                        resolve();
                                    }
                                });
                            }
                            else {
                                resolve();
                            }
                        }
                        catch (ex) { }
                    })(this, this.url, file, iIdx, files.length);
                }
            }, this));
            return promise;
        };
        Theme.prototype.event = function (file, event) {
            var other = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                other[_i - 2] = arguments[_i];
            }
            var args = new Array();
            for (var iIdx = 2; iIdx < arguments.length; iIdx++)
                args.push(arguments[iIdx]);
            try {
                if (RadJav.currentTheme.themeObjects[file] != null) {
                    if (RadJav.currentTheme.themeObjects[file].exports[event] != null) {
                        return RadJav.currentTheme.themeObjects[file].exports[event].apply(RadJav.currentTheme.themeObjects[file].exports, args);
                    }
                    else {
                        if ((file.indexOf("GUI") > -1) || (file.indexOf("MUI") > -1)) {
                            var tempfile = "RadJav.GUI.GObject";
                            if (RadJav.currentTheme.themeObjects[tempfile].exports[event] != null) {
                                return RadJav.currentTheme.themeObjects[tempfile].exports[event].apply(RadJav.currentTheme.themeObjects[tempfile].exports, args);
                            }
                        }
                    }
                }
            }
            catch (ex) {
                throw "Error in " +
                    file +
                    " message: " +
                    ex.message +
                    "\nStack: " +
                    ex.stack;
            }
            return null;
        };
        Theme.prototype.eventSync = function (file, event) {
            var other = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                other[_i - 2] = arguments[_i];
            }
            var args = new Array();
            var result = null;
            for (var iIdx = 2; iIdx < arguments.length; iIdx++)
                args.push(arguments[iIdx]);
            try {
                if (RadJav.currentTheme.themeObjects[file] != null) {
                    if (RadJav.currentTheme.themeObjects[file].exports[event] != null) {
                        result = RadJav.currentTheme.themeObjects[file].exports[event].apply(RadJav.currentTheme.themeObjects[file].exports, args);
                    }
                    else {
                        if ((file.indexOf("GUI") > -1) || (file.indexOf("MUI") > -1)) {
                            var tempfile = "RadJav.GUI.GObject";
                            if (RadJav.currentTheme.themeObjects[tempfile].exports[event] != null) {
                                result = RadJav.currentTheme.themeObjects[tempfile].exports[event].apply(RadJav.currentTheme.themeObjects[tempfile].exports, args);
                            }
                        }
                    }
                }
            }
            catch (ex) {
                throw "Error in " +
                    file +
                    " message: " +
                    ex.message +
                    "\nStack: " +
                    ex.stack;
            }
            return result;
        };
        Theme.loadTheme = function (url, data) {
            var theme = null;
            try {
                theme = new RadJav.Theme(data);
                theme.url = url;
            }
            catch (ex) {
                console.error(ex.message);
            }
            return theme;
        };
        return Theme;
    }());
    RadJav.Theme = Theme;
    var GUI;
    (function (GUI) {
        function initObj(type, name, text, parent, args) {
            if (args === void 0) { args = []; }
            var tempType = type;
            if (typeof type == "object") {
                tempType = type.type;
                if (type.name != null)
                    name = type.name;
                if (type.text != null)
                    text = type.text;
                if (type._text != null)
                    text = type._text;
            }
            if (tempType.indexOf("RadJav.GUI") > -1)
                tempType = tempType.substr(11);
            if (tempType.indexOf("RadJav.MUI") > -1)
                tempType = tempType.substr(11);
            if (RadJav.GUI[tempType] == null)
                throw RadJav.getLangString("unableToFindClass", tempType);
            var properties = {
                name: name,
                text: text,
                parent: parent
            };
            if (typeof type == "object") {
                RadJav.copyProperties(properties, type, false);
            }
            var obj = null;
            if (tempType == "Navigator") {
                var parentObj = null;
                if (args.length > 0)
                    parentObj = args[0];
                obj = new RadJav.GUI["Navigator"](parentObj, properties);
            }
            else
                obj = new RadJav.GUI[tempType](properties);
            return obj;
        }
        GUI.initObj = initObj;
        function create(type, name, text, parent, args) {
            if (args === void 0) { args = []; }
            var obj = this.initObj(type, name, text, parent, args);
            return obj.create();
        }
        GUI.create = create;
        function createObjects(objects, parent, beforeCreated) {
            if (beforeCreated === void 0) { beforeCreated = null; }
            var promises = [];
            if (beforeCreated == undefined)
                beforeCreated = null;
            for (var iIdx = 0; iIdx < objects.length; iIdx++) {
                var obj = objects[iIdx];
                var createObject = true;
                if (beforeCreated != null) {
                    obj.onBeforeChildCreated = beforeCreated;
                    var result = beforeCreated(obj, parent);
                    if (result != null)
                        createObject = result;
                }
                if (createObject == true) {
                    var justCreateTheObject = true;
                    if (obj.type == "RadJav.MUI.Navigator") {
                        if (obj["useParentForRootView"] != null) {
                            promises.push(this.create(obj, "", "", parent, [parent]));
                            justCreateTheObject = false;
                        }
                    }
                    if (justCreateTheObject == true)
                        promises.push(this.create(obj, "", "", parent));
                }
            }
            return Promise.all(promises);
        }
        GUI.createObjects = createObjects;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
    var MUI;
    (function (MUI) {
        function initObj(type, name, text, parent) {
            var tempType = type;
            if (typeof type == "object") {
                tempType = type.type;
                if (type.name != null) {
                    name = type.name;
                }
                if (type.text != null) {
                    text = type.text;
                }
                if (type._text != null) {
                    text = type._text;
                }
            }
            if (tempType.indexOf("RadJav.MUI") > -1) {
                tempType = tempType.substr(11);
            }
            if (RadJav.MUI[tempType] == null) {
                throw RadJav.getLangString("unableToFindClass", tempType);
            }
            var properties = {
                name: name,
                text: text,
                parent: parent
            };
            if (typeof type == "object") {
                RadJav.copyProperties(properties, type, false);
            }
            var obj = new RadJav.MUI[tempType](properties);
            return obj;
        }
        MUI.initObj = initObj;
        function create(type, name, text, parent) {
            var obj = this.initObj(type, name, text, parent);
            return obj.create();
        }
        MUI.create = create;
        function createObjects(objects, parent, beforeCreated) {
            if (beforeCreated === void 0) { beforeCreated = null; }
            var promises = [];
            if (beforeCreated == undefined) {
                beforeCreated = null;
            }
            for (var iIdx = 0; iIdx < objects.length; iIdx++) {
                var obj = objects[iIdx];
                var createObject = true;
                if (beforeCreated != null) {
                    obj.onBeforeChildCreated = beforeCreated;
                    var result = beforeCreated(obj, parent);
                    if (result != null) {
                        createObject = result;
                    }
                }
                if (createObject == true) {
                    promises.push(this.create(obj, "", "", parent));
                }
            }
            return Promise.all(promises);
        }
        MUI.createObjects = createObjects;
    })(MUI = RadJav.MUI || (RadJav.MUI = {}));
    var C3D;
    (function (C3D) {
        function create(type, name, parent) {
            if (type.indexOf("RadJav.C3D") > -1) {
                type = type.substr(10);
            }
            if (RadJav.C3D[type] == null) {
                throw RadJav.getLangString("unableToFindClass", type);
            }
            var obj = new RadJav.C3D[type](name, parent);
            return obj.create();
        }
    })(C3D = RadJav.C3D || (RadJav.C3D = {}));
    var Net;
    (function (Net) {
        function httpRequest(req) {
            var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                var addr = req;
                var request = null;
                var response = null;
                try {
                    if (XMLHttpRequest != null)
                        request = new XMLHttpRequest();
                    else
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                    request.onreadystatechange = RadJav.keepContext(function (evt, request2) {
                        var req2 = request2[0];
                        try {
                            if (req2.readyState == 4 && req2.status == 200)
                                resolve(req2.responseText);
                        }
                        catch (ex) {
                            reject(ex);
                        }
                    }, this, [request]);
                    request.open("GET", addr);
                    request.send();
                }
                catch (ex) {
                    reject(ex);
                }
            }, this));
            return promise;
        }
        Net.httpRequest = httpRequest;
    })(Net = RadJav.Net || (RadJav.Net = {}));
    var Console = (function () {
        function Console() {
        }
        Console.print = function (message) {
            console.log(message);
        };
        Console.println = function (message) {
            this.print(message + "\n");
        };
        Console.log = function (message) {
            this.print(message + "\n");
        };
        return Console;
    }());
    RadJav.Console = Console;
    var OS;
    (function (OS) {
        OS.type = "html5";
        OS.numBits = 32;
        OS.args = [];
        var ScreenInfo = (function () {
            function ScreenInfo(width, height, scale) {
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                if (scale === void 0) { scale = 1; }
                this.width = width;
                this.height = height;
                this.scale = scale;
            }
            ScreenInfo.prototype.getWidth = function () {
                return (this.width - 16);
            };
            ScreenInfo.prototype.getHeight = function () {
                return (this.height - 38);
            };
            ScreenInfo.prototype.getScale = function () {
                return (this.scale);
            };
            ScreenInfo.getNumberOfScreens = function () {
                return (1);
            };
            ScreenInfo.getScreenInfo = function (screenIndex) {
                return (new ScreenInfo(window.innerWidth, window.innerHeight, 1));
            };
            return ScreenInfo;
        }());
        OS.ScreenInfo = ScreenInfo;
        function onReady(func) {
            return RadJav.OS.HTML5.ready(window).then(func);
        }
        OS.onReady = onReady;
        function openWebBrowserURL(url) {
            window.open(url, "_blank");
        }
        OS.openWebBrowserURL = openWebBrowserURL;
        var HTML5;
        (function (HTML5) {
            HTML5.absolutePositioning = true;
            function showElement(elm, show) {
                if (typeof elm == "string") {
                    elm = RadJav.OS.HTML5.selectDOM(null, elm);
                }
                if (show == true) {
                    elm.style.visibility = "visible";
                }
                else {
                    elm.style.visibility = "hidden";
                }
            }
            HTML5.showElement = showElement;
            function getOS() {
                var userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.indexOf("win32") > -1) {
                    return "windows";
                }
                if (userAgent.indexOf("win64") > -1) {
                    return "windows";
                }
                if (userAgent.indexOf("windows") > -1) {
                    return "windows";
                }
                if (userAgent.indexOf("android") > -1) {
                    return "android";
                }
                if (userAgent.indexOf("iphone") > -1) {
                    return "iphone";
                }
                if (userAgent.indexOf("ipad") > -1) {
                    return "ipad";
                }
                if (userAgent.indexOf("ipod") > -1) {
                    return "ipod";
                }
                if (userAgent.indexOf("mac os x") > -1) {
                    return "macosx";
                }
                if (userAgent.indexOf("linux") > -1) {
                    return "linux";
                }
                return "";
            }
            HTML5.getOS = getOS;
            function getUrlParamObj() {
                var params = window.location.search;
                var paramsObj = {};
                if (params == "") {
                    return paramsObj;
                }
                var nextStart = "?";
                var prevPos = -1;
                var pos = -1;
                while (true) {
                    prevPos = params.indexOf(nextStart, pos);
                    pos = params.indexOf("=", prevPos);
                    if (prevPos > -1 && pos > -1) {
                        nextStart = "&";
                        var key = params.substring(prevPos + 1, pos);
                        prevPos = params.indexOf(nextStart, pos);
                        if (prevPos < 0) {
                            prevPos = undefined;
                        }
                        var value = params.substring(pos + 1, prevPos);
                        if (isNaN(value) == false) {
                            value = parseFloat(value);
                        }
                        paramsObj[key] = value;
                    }
                    else {
                        break;
                    }
                }
                return paramsObj;
            }
            HTML5.getUrlParamObj = getUrlParamObj;
            function getUrlParam(name) {
                var params = RadJav.OS.HTML5.getUrlParamObj();
                return params[name];
            }
            HTML5.getUrlParam = getUrlParam;
            function useAbsolutePositioning(absolutePositioning) {
                RadJav.OS.HTML5.absolutePositioning = absolutePositioning;
            }
            HTML5.useAbsolutePositioning = useAbsolutePositioning;
            function downloadTextAsFile(text, fileName, mimeType) {
                if (mimeType == null) {
                    mimeType = "text/plain";
                }
                var elm = document.createElement("a");
                elm.setAttribute("href", "data:" + mimeType + "," + text);
                elm.setAttribute("download", fileName);
                if (document.createEvent != null) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initEvent("click", true, true);
                    elm.dispatchEvent(evt);
                }
                else {
                    elm.click();
                }
            }
            HTML5.downloadTextAsFile = downloadTextAsFile;
            function reloadPage(forceNewPage) {
                if (forceNewPage == null) {
                    forceNewPage = false;
                }
                location.reload(forceNewPage);
            }
            HTML5.reloadPage = reloadPage;
            function getParentHTML(obj) {
                var parent = obj.getParent();
                var parentHTML = null;
                if (parent == null) {
                    parentHTML = document.body;
                }
                else {
                    if (parent["getHTML"] == null)
                        debugger;
                    parentHTML = parent.getHTML();
                }
                return parentHTML;
            }
            HTML5.getParentHTML = getParentHTML;
            function getHTMLDOM(str) {
                var div = document.createElement("div");
                div.innerHTML = str;
                return div.firstChild;
            }
            HTML5.getHTMLDOM = getHTMLDOM;
            function appendHTML(obj, html) {
                if (typeof obj == "string") {
                    var tempObj = document.querySelector(obj);
                    if (tempObj == null) {
                        throw RadJav.getLangString("unableToFindSelector", obj);
                    }
                }
                if (typeof html == "string") {
                    html = RadJav.OS.HTML5.getHTMLDOM(html);
                }
                return obj.appendChild(html);
            }
            HTML5.appendHTML = appendHTML;
            function selectDOM(obj, selector) {
                if (typeof obj == "string") {
                    selector = obj;
                    obj = null;
                }
                if (obj == null)
                    obj = document.body;
                var dom = obj.querySelector(selector);
                return dom;
            }
            HTML5.selectDOM = selectDOM;
            function ready(obj) {
                var promise = new Promise(function (resolve, reject) {
                    if (obj.readyState != null) {
                        if (obj.readyState == "complete") {
                            resolve();
                            return;
                        }
                    }
                    obj.addEventListener("load", function () {
                        resolve();
                    });
                });
                return promise;
            }
            HTML5.ready = ready;
            function interfaceConnector(connectorName, methodName) {
                var result = null;
                var args = Array.prototype.slice.call(arguments);
                args.splice(0, 2);
                var name = "";
                var webViewType = "";
                if (typeof connectorName == "string") {
                    name = connectorName;
                }
                else {
                    name = connectorName.name;
                    if (connectorName.webViewType != null) {
                        webViewType = connectorName.webViewType;
                    }
                }
                if (name == null || name == "") {
                    throw RadJav.getLangString("connectorNameCannotBeEmptyForInterfaceConnector");
                }
                var found = false;
                if (window[name] != null) {
                    result = window[name][methodName].apply(window, args);
                    found = true;
                }
                if (window.webkit != null) {
                    if (window.webkit.messageHandlers != null) {
                        if (window.webkit.messageHandlers[name] != null) {
                            args = Array.prototype.slice.call(arguments);
                            args.splice(0, 1);
                            window.webkit.messageHandlers[name].postMessage(args);
                            found = true;
                        }
                    }
                }
                if (found == false) {
                    if (webViewType == "iOSWebView") {
                        var userAgent = window.navigator.userAgent.toLowerCase();
                        if (userAgent.match(/iphone/i) ||
                            userAgent.match(/ipad/i) ||
                            userAgent.match(/ipod/i)) {
                            var standalone = window.navigator.standalone;
                            var isSafari = userAgent.match(/safari/i);
                            if (standalone == false && isSafari == null) {
                                document.location.href =
                                    name + "://" + methodName + "/" + JSON.stringify(args);
                            }
                        }
                    }
                }
                return result;
            }
            HTML5.interfaceConnector = interfaceConnector;
        })(HTML5 = OS.HTML5 || (OS.HTML5 = {}));
    })(OS = RadJav.OS || (RadJav.OS = {}));
})(RadJav || (RadJav = {}));
function parseBoolean(str) {
    str = str.toLowerCase();
    if (str == "yes")
        return (true);
    else if (str == "no")
        return (false);
    else if (str == "true")
        return (true);
    else if (str == "false")
        return (false);
    else {
        var iValue = parseInt(str);
        if (iValue != 0)
            return (true);
    }
    return (false);
}
RadJav.GENERATORS_INJECT_RADJAV_OS_CODE_HERE;
if (typeof (console) == "undefined") {
    var console = function () {
    };
    console.log = RadJav.Console.println;
}
RadJav.setupScreens();
var _eval = eval;
var _Function = Function;
RadJav.defaults = RadJav;
//# sourceMappingURL=RadJav.js.map