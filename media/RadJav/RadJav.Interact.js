var RadJav;
(function (RadJav) {
    var Interact = (function () {
        function Interact() {
        }
        Interact.Apps = {};
        return Interact;
    }());
    RadJav.Interact = Interact;
    (function (Interact) {
        var ParsedExpression = (function () {
            function ParsedExpression(expression, start, end) {
                this.expression = expression;
                this.start = start;
                this.end = end;
                this.length = ((this.end + 2) - this.start);
            }
            return ParsedExpression;
        }());
        Interact.ParsedExpression = ParsedExpression;
        function parseExpressions(expression) {
            var expressions = [];
            var expBegin = expression.indexOf("{{");
            var expEnd = expression.indexOf("}}");
            while (expBegin > -1) {
                if (expEnd < 0)
                    throw new Error("Expression does not end properly!");
                var foundExp = expression.substr(expBegin, ((expEnd + 2) - expBegin));
                expressions.push(new ParsedExpression(foundExp, expBegin, expEnd));
                expBegin = expression.indexOf("{{", expBegin + 2);
                expEnd = expression.indexOf("}}", expEnd + 2);
            }
            return (expressions);
        }
        Interact.parseExpressions = parseExpressions;
        var App = (function () {
            function App(name) {
                this.name = name;
                this._views = {};
                this.html = null;
                this.xrjApp = null;
                this.root = null;
                this.options = { useJQuery: false };
                RadJav.Interact.Apps[name] = this;
            }
            App.prototype.createView = function (name) {
                var view = new RadJav.Interact.View(this, name);
                if (this.options.bootstrap != null) {
                    if (this.options.bootstrap == true)
                        this.options.useJQuery = true;
                }
                return (view);
            };
            App.prototype.addView = function (view) {
                view._app = this;
                this._views[view.name] = view;
            };
            App.prototype.updateView = function () {
                this.currentView.update();
            };
            App.prototype.setView = function (root, view) {
                if (typeof (root) == "object") {
                    if (root.constructor["name"] == "View")
                        view = root;
                }
                this.addView(view);
                this.currentView = view;
                if (root.constructor["name"] == "GObject") {
                    return;
                }
                if (root.constructor["name"] == "Object3D") {
                    return;
                }
                if (root.constructor["name"] != "View")
                    this.root = root;
                if (RadJav.OS.HTML5 != null) {
                    if (typeof (root) == "string")
                        root = document.querySelector(root);
                    if (this.currentView._mainComponent != null) {
                        if (RadJav.OS.HTML5 != null) {
                            var htmlElm = this.currentView._mainComponent.display._html;
                            if (this.options.useJQuery == true)
                                $(root).append(htmlElm);
                            else
                                root.appendChild(htmlElm);
                        }
                    }
                }
                this.updateView();
            };
            App.prototype.setComponentEvent = function (name, eventName, eventFunction) {
                var elm = document.getElementById(name);
                for (var iIdx = 0; iIdx < elm.childNodes.length; iIdx++) {
                    var child = elm.childNodes[iIdx];
                    child.addEventListener(eventName, eventFunction);
                }
            };
            App.prototype.build = function (newApp) {
                if (newApp === void 0) { newApp = null; }
                if (this.currentView == null)
                    throw new Error("A current view has not been set!");
                var app = newApp;
                if (app == null)
                    app = new CompiledApp(this.name);
                app.mainView = this.currentView.name;
                app.compiledStr += "app.options = " + JSON.stringify(this.options) + "\n";
                if (this.root != null)
                    app.root = this.root.toString();
                for (var key in this._views) {
                    var view = this._views[key].build(newApp);
                    app.views.push(view);
                }
                return (app);
            };
            App.loadApp = function (file) {
                if (typeof (file) == "string")
                    RadJav.include(file);
                else
                    file();
            };
            return App;
        }());
        Interact.App = App;
        var View = (function () {
            function View(app, name) {
                if (app == null)
                    throw new Error("View must an app!");
                if (name == null)
                    throw new Error("View must have a name!");
                if (name == "")
                    throw new Error("View must have a name!");
                this.name = name;
                this._components = {};
                this._refCount = 0;
                this._events = {};
                this._mainComponent = null;
                this._app = app;
            }
            View.prototype.createComponent = function (obj) {
                if (obj.name == null)
                    throw new Error("Component must have a name!");
                if (obj.name == "")
                    throw new Error("Component must have a name!");
                if (this._components[obj.name] != null)
                    throw new Error("Component cannot have the same name as an existing component!");
                if (obj["on"] == null)
                    obj = new RadJav.Interact.Component(obj, this);
                this._components[obj.name] = obj;
                return (obj);
            };
            View.prototype.setMainComponent = function (component) {
                if (typeof component == "string") {
                    component = this._components[component];
                    if (component == null)
                        throw new Error("Component could not be found!");
                }
                this._mainComponent = component;
            };
            View.prototype.getMainComponent = function () {
                return (this._mainComponent);
            };
            View.prototype.update = function () {
                for (var compName in this._components)
                    this._components[compName].update();
            };
            View.prototype.on = function (eventName, eventFunction) {
                this._events[eventName] = eventFunction;
                if (RadJav.OS.HTML5 != null) {
                    if (eventName == "load")
                        window.onload = eventFunction;
                    else
                        document.addEventListener(eventName, eventFunction);
                }
                return (null);
            };
            View.prototype.build = function (newApp) {
                var view = new CompiledView(this.name, this._app.root.toString());
                for (var compName in this._components) {
                    var component = this._components[compName];
                    var componentStr = "";
                    var css = "";
                    var display = "";
                    if (typeof (component.display) == "string")
                        display = JSON.stringify(component.display);
                    componentStr += "var " + compName + " = " + view.name + ".createComponent ({\n";
                    componentStr += "\t\tname: \"" + component.name + "\", \n";
                    componentStr += "\t\ttag: \"" + component.tag + "\", \n";
                    componentStr += "\t\tdisplay: " + display + ", \n";
                    for (var key in component) {
                        var skip = false;
                        for (var iIdx = 0; iIdx < Component.ignoreKeyList.length; iIdx++) {
                            if (key == Component.ignoreKeyList[iIdx]) {
                                skip = true;
                                break;
                            }
                        }
                        if (skip == true)
                            continue;
                        var value = null;
                        if (typeof (component[key]) == "function")
                            value = component[key].toString();
                        else
                            value = JSON.stringify(component[key]);
                        componentStr += "\t\t" + key + ": " + value + ", \n";
                    }
                    componentStr = componentStr.substr(0, (componentStr.length - 3));
                    componentStr += "\n\t});\n";
                    for (var eventName in component._events)
                        componentStr += compName + ".on (\"" + eventName + "\", " + component._events[eventName].toString() + ");\n";
                    view.components[compName] = componentStr;
                    if (component.css != null) {
                        for (var iIdx = 0; iIdx < component.css.length; iIdx++) {
                            var compCSS = component.css[iIdx];
                            if (typeof (compCSS) == "string")
                                css += RadJav.IO.TextFile.readFile(compCSS) + "\n";
                            if (typeof (compCSS) == "object")
                                css += compCSS.css + "\n";
                        }
                    }
                    if (css != "") {
                        view.compiledHTMLCSS += "/* --- View " + this.name + ", Component " + compName + " CSS Begin --- */\n";
                        view.compiledHTMLCSS += css;
                        view.compiledHTMLCSS += "/* --- View " + this.name + ", Component " + compName + " CSS End --- */\n";
                    }
                }
                if (this._mainComponent != null)
                    view.mainComponentName = this._mainComponent.name;
                return (view);
            };
            return View;
        }());
        Interact.View = View;
        var Component = (function () {
            function Component(obj, parentView) {
                if (obj.name == null)
                    throw new Error("Component must have a name!");
                if (obj.name == "")
                    throw new Error("Component must have a name!");
                if (parentView == null)
                    throw new Error("Component must have a parent view!");
                this._view = parentView;
                if (obj["display"] != null) {
                    if (typeof obj.display == "string") {
                        if (RadJav.OS.HTML5 != null) {
                            if (parentView._app.options.useJQuery == true)
                                obj.display = $(obj.display);
                            obj.display = new RadJav.GUI.HTMLElement(obj.name, obj.display);
                            var tempElm = null;
                            var display = obj.display;
                            if (parentView._app.options.useJQuery == true)
                                tempElm = display._html[0];
                            else
                                tempElm = display._html;
                            Object.defineProperty(tempElm, "interactComponent", { value: this });
                        }
                        parentView._refCount++;
                    }
                }
                this.name = obj.name;
                this.tag = RadJav.setDefaultValue(obj.tag, "");
                this.display = RadJav.setDefaultValue(obj.display, null);
                this._children = RadJav.setDefaultValue(obj._children, []);
                this._originalDisplay = RadJav.setDefaultValue(obj._originalDisplay, null);
                this.css = RadJav.setDefaultValue(obj.css, []);
                this._data = RadJav.setDefaultValue(obj._data, {});
                this._events = RadJav.setDefaultValue(obj._events, {});
                this._innerHTML = RadJav.setDefaultValue(obj._innerHTML, "");
                for (var key in obj) {
                    var skip = false;
                    for (var iIdx = 0; iIdx < Component.ignoreKeyList.length; iIdx++) {
                        if (key == Component.ignoreKeyList[iIdx]) {
                            skip = true;
                            break;
                        }
                    }
                    if (skip == true)
                        continue;
                    this._data[key] = new ComponentData();
                    this._data[key].name = parentView._app.name + "-" + parentView.name + "-" + key + "-" + parentView._refCount;
                    this._data[key].value = obj[key];
                    this[key] = obj[key];
                    Object.defineProperty(this, key, {
                        get: RadJav.keepContext(function (obj2) {
                            var obj3 = obj2[0];
                            var key2 = obj2[1];
                            return (this._data[key2].value);
                        }, this, [obj, key]),
                        set: RadJav.keepContext(function (value, obj2) {
                            var obj3 = obj2[0];
                            var key2 = obj2[1];
                            var parentView2 = obj2[2];
                            this._data[key2].value = value;
                            this.update();
                        }, this, [obj, key, parentView])
                    });
                }
            }
            Component.prototype.getParentInner = function () {
                var result = null;
                if (RadJav.OS.HTML5 != null) {
                    if (this._innerHTML != "")
                        result = this._innerHTML;
                }
                return (result);
            };
            Component.prototype.update = function () {
                if (RadJav.OS.HTML5 != null) {
                    var tags = document.getElementsByTagName(this.tag);
                    var _loop_1 = function (iIdx) {
                        var elm = tags[iIdx];
                        var parentDOM = elm.parentNode;
                        parentDOM.removeChild(elm);
                        var newElm = null;
                        var newComp = RadJav.cloneObject(this_1);
                        this_1._children.push(newComp);
                        if (this_1._view._app.options.useJQuery == true) {
                            var attrs = $(elm).prop("attributes");
                            newElm = $(newComp.display._html);
                            $.each(attrs, function () {
                                newElm.attr(this.name, this.value);
                            });
                            this_1._innerHTML = elm.innerHTML;
                            $(parentDOM).append(newElm);
                        }
                        else {
                            newElm = this_1.display._html;
                            newElm.attributes = elm.attributes;
                            parentDOM.appendChild(newElm);
                        }
                        for (var key in newComp._events) {
                            var event_1 = newComp._events[key];
                            newComp.on(key, event_1);
                        }
                        iIdx--;
                        out_iIdx_1 = iIdx;
                    };
                    var this_1 = this, out_iIdx_1;
                    for (var iIdx = 0; iIdx < tags.length; iIdx++) {
                        _loop_1(iIdx);
                        iIdx = out_iIdx_1;
                    }
                }
                this.parse();
            };
            Component.prototype.parse = function () {
                if (this.display == null)
                    return;
                var str = "";
                var compName = "";
                if (this._originalDisplay == null) {
                    if (typeof this.display == "string")
                        str = this.display;
                    else {
                        if (this.display.type == "RadJav.GUI.HTMLElement") {
                            if (this._view._app.options.useJQuery == true)
                                str = $(this.display._html)[0].innerHTML;
                            else
                                str = this.display._html.innerHTML;
                        }
                    }
                }
                else
                    str = this._originalDisplay;
                if (str != "") {
                    if (this._originalDisplay == null)
                        this._originalDisplay = str;
                    var expressions = RadJav.Interact.parseExpressions(str);
                    var resultHTML = "";
                    for (var iIdx = 0; iIdx < expressions.length; iIdx++) {
                        var parsedExpression = expressions[iIdx];
                        var fullExpression = parsedExpression.expression;
                        var expression = fullExpression.substr(2, fullExpression.length - 4);
                        var expressionFunc = new Function("var result = " + expression + "; return (result);");
                        var result = expressionFunc.call(this);
                        if (typeof (result) == "function") {
                        }
                        str = str.removeAt(parsedExpression.start, parsedExpression.length);
                        resultHTML = str.insertAt(parsedExpression.start, result.toString());
                    }
                    if (expressions.length > 0) {
                        if (RadJav.OS.HTML5 != null) {
                            if (this._view._app.options.useJQuery == true)
                                $(this.display._html).html(resultHTML);
                            else
                                this.display._html.innerHTML = resultHTML;
                        }
                    }
                }
            };
            Component.prototype.on = function (eventName, eventFunction) {
                this._events[eventName] = eventFunction;
                eventFunction = RadJav.keepContext(eventFunction, this);
                var result = null;
                if (RadJav.OS.HTML5 != null) {
                    var doOn = true;
                    if (this.display.type == "RadJav.GUI.HTMLElement") {
                        if (this._view._app.options.useJQuery == true) {
                            $(this.display._html).on(eventName, eventFunction);
                            doOn = false;
                        }
                    }
                    if (doOn == true)
                        result = this.display.on(eventName, eventFunction);
                }
                return (result);
            };
            Component.ignoreKeyList = [
                "name", "tag", "display", "css", "_data", "_events", "_view",
                "update", "parse", "on", "_originalDisplay", "getParentInner",
                "_innerHTML", "_children"
            ];
            return Component;
        }());
        Interact.Component = Component;
        var ComponentData = (function () {
            function ComponentData() {
                this.name = "";
                this.value = null;
                this.start = -1;
                this.end = -1;
                this.length = -1;
            }
            return ComponentData;
        }());
        Interact.ComponentData = ComponentData;
        var CompiledHTML = (function () {
            function CompiledHTML(name) {
                this.filename = name + ".htm";
                this.title = name;
                this.interactAppPath = "./" + name + ".js";
                this.htmlEvents = [];
                this.cssFiles = [];
                this.jsFiles = ["./" + name + ".xrj"];
                this.body = "";
                this.html = "<!DOCTYPE html>\n";
                this.html += "<html>\n";
                this.html += "<head>\n";
                this.html += "\t<title>{{title}}</title>\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojo/themes/claro/claro.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojox/grid/resources/Grid.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojox/grid/resources/claroGrid.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojox/calendar/themes/claro/Calendar.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojox/calendar/themes/claro/MonthColumnView.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojo/resources/FloatingPane.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "\t<link href = \"./RadJav/themes/default/dojo/resources/ResizeHandle.css\" rel = \"stylesheet\" type = \"text/css\" />\n";
                this.html += "{{cssFiles}}";
                this.html += "\t<script type = \"text/javascript\" src = \"./dependencies/three.js/three.min.js\"></script>\n";
                this.html += "\t<script type = \"text/javascript\" src = \"./dependencies/dojo/dojo/dojo.js\"></script>\n";
                this.html += "\t<script type = \"text/javascript\" src = \"./RadJav/RadJav.js\"></script>\n";
                this.html += "\n";
                this.html += "\t<script type = \"text/javascript\">\n";
                this.html += "\t\tRadJav.baseUrl = \"./RadJav\";\n";
                this.html += "\t\tRadJav.themeUrl = \"./RadJav/themes/default\";\n";
                this.html += "\t\tRadJav.useAjax = true;\n";
                this.html += "\n";
                this.html += "\t\tfunction setup ()\n";
                this.html += "\t\t{\n";
                this.html += "{{htmlEvents}}";
                this.html += "\t\t}\n";
                this.html += "\t</script>\n";
                this.html += "\n";
                this.html += "\t<script type = \"text/javascript\" src = \"./RadJav/RadJav.Interact.js\"></script>\n";
                this.html += "{{jsFiles}}";
                this.html += "</head>\n";
                this.html += "\n";
                this.html += "<body onload = \"setup ();\">\n";
                this.html += "{{body}}\n";
                this.html += "</body>\n";
                this.html += "</html>\n\n";
            }
            CompiledHTML.prototype.build = function () {
                var output = this.html;
                var additions = ["title", "body", "interactAppPath", "htmlEvents", "cssFiles", "jsFiles"];
                for (var iIdx = 0; iIdx < additions.length; iIdx++) {
                    var additionType = additions[iIdx];
                    var additionOutput = "";
                    if (typeof (this[additionType]) != "string") {
                        for (var iJdx = 0; iJdx < this[additionType].length; iJdx++) {
                            if (additionType == "htmlEvents")
                                additionOutput += "\t\t\t" + this.htmlEvents[iJdx] + "\n";
                            if (additionType == "cssFiles")
                                additionOutput += "\t<link href = \"" + this.cssFiles[iJdx] + "\" rel = \"stylesheet\" type = \"text/css\" />\n";
                            if (additionType == "jsFiles")
                                additionOutput += "\t<script type = \"text/javascript\" src = \"" + this.jsFiles[iJdx] + "\"></script>\n";
                        }
                    }
                    else
                        additionOutput = this[additionType];
                    output = output.replaceAll("{{" + additionType + "}}", additionOutput);
                }
                return (output);
            };
            CompiledHTML.prototype.writeToFile = function (path) {
                var output = this.build();
                RadJav.IO.TextFile.writeFile(path, output);
            };
            return CompiledHTML;
        }());
        Interact.CompiledHTML = CompiledHTML;
        var CompiledXRJApp = (function () {
            function CompiledXRJApp(name) {
                this.filename = name + ".xrj";
                this.name = name;
                this.version = "1.0";
                this.interactAppPath = "./" + name + ".js";
                this.guiEvents = [];
                this.generateAsHTML5App = true;
                this.xrjApp = "var appName = \"{{name}}\";\n";
                this.xrjApp += "var version = \"{{version}}\";\n";
                this.xrjApp += "\n";
                this.xrjApp += "function onReady ()\n";
                this.xrjApp += "{\n";
                this.xrjApp += "\tRadJav.initialize (RadJav.getStandardLibrary (), RadJav.getGUILibrary ()).then (function ()\n";
                this.xrjApp += "\t\t{\n";
                this.xrjApp += "\t\t\tRadJav.runApplication (function ()\n";
                this.xrjApp += "\t\t\t\t{\n";
                if (this.generateAsHTML5App == true) {
                }
                this.xrjApp += "\t\t\t\t\tif (typeof (RadJav.OS.HTML5) != \"undefined\")\n";
                this.xrjApp += "\t\t\t\t\t\tRadJav.Interact.App.loadApp (\"{{interactAppPath}}\");\n";
                this.xrjApp += "\t\t\t\t\telse\n";
                this.xrjApp += "\t\t\t\t\t{\n";
                this.xrjApp += "\t\t\t\t\t\tvar win = new RadJav.GUI.Window (\"win\", \"{{name}}\");\n";
                this.xrjApp += "\t\t\t\t\t\twin.create ().then (function (win2)\n";
                this.xrjApp += "\t\t\t\t\t\t\t{\n";
                this.xrjApp += "\t\t\t\t\t\t\t\tRadJav.Interact.App.loadApp (\"{{interactAppPath}}\");\n";
                this.xrjApp += "\t\t\t\t\t\t\t});\n";
                this.xrjApp += "\t\t\t\t\t}\n";
                this.xrjApp += "\t\t\t\t});\n";
                this.xrjApp += "\t\t});\n";
                this.xrjApp += "}\n";
                this.xrjApp += "\n";
                this.xrjApp += "RadJav.OS.onReady (onReady);\n";
                this.xrjApp += "\n\n";
            }
            CompiledXRJApp.prototype.build = function () {
                var output = this.xrjApp;
                var additions = ["name", "version", "interactAppPath", "guiEvents"];
                for (var iIdx = 0; iIdx < additions.length; iIdx++) {
                    var additionType = additions[iIdx];
                    var additionOutput = "";
                    if (typeof (this[additionType]) != "string") {
                        for (var iJdx = 0; iJdx < this[additionType].length; iJdx++) {
                            if (additionType == "guiEvents")
                                additionOutput += "\t\t\t" + this.guiEvents[iJdx] + "\n";
                        }
                    }
                    else
                        additionOutput = this[additionType];
                    output = output.replaceAll("{{" + additionType + "}}", additionOutput);
                }
                return (output);
            };
            CompiledXRJApp.prototype.writeToFile = function (path) {
                var output = this.build();
                RadJav.IO.TextFile.writeFile(path, output);
            };
            return CompiledXRJApp;
        }());
        Interact.CompiledXRJApp = CompiledXRJApp;
        var CompiledApp = (function () {
            function CompiledApp(name) {
                this.name = name;
                this.html = new CompiledHTML(name);
                this.xrjApp = new CompiledXRJApp(name);
                this.views = [];
                this.compiledStr = "var app = new RadJav.Interact.App (\"" + this.name + "\");\n";
                this.mainView = "";
                this.root = "";
                this._assetsPath = "";
                this._fileCopyFunc = null;
            }
            CompiledApp.prototype.assetsDir = function (path, fileCopyFunc) {
                this._assetsPath = path;
                this._fileCopyFunc = fileCopyFunc;
            };
            CompiledApp.prototype.writeFiles = function (path) {
                var assetsPath = RadJav.IO.normalizePath(this._assetsPath);
                var files = RadJav.IO.listFiles(assetsPath);
                for (var iIdx = 0; iIdx < files.length; iIdx++) {
                    var file = files[iIdx];
                    var oldPath = file;
                    var newPath = "";
                    var result = true;
                    file = file.substr(assetsPath.length);
                    newPath = RadJav.IO.normalizePath(path + "/" + file);
                    if (this._fileCopyFunc != null) {
                        result = this._fileCopyFunc(oldPath, newPath);
                        if (result == null)
                            result = true;
                    }
                    if (result == true) {
                        if (RadJav.IO.isDir(oldPath) == true)
                            RadJav.IO.copyDir(oldPath, newPath);
                        else
                            RadJav.IO.copyFile(oldPath, newPath);
                    }
                }
                var output = this.compiledStr + "\n";
                for (var iIdx = 0; iIdx < this.views.length; iIdx++) {
                    var view = this.views[iIdx];
                    view.writeHTMLCSSToFile(path + "/" + view.name + ".css");
                    output += view.build();
                }
                output += "app.setView (\"" + this.root + "\", " + this.mainView + ");\n";
                RadJav.IO.TextFile.writeFile(path + "/" + this.name + ".js", output);
                if (this.html != null)
                    this.html.writeToFile(path + "/" + this.html.filename);
                if (this.xrjApp != null)
                    this.xrjApp.writeToFile(path + "/" + this.xrjApp.filename);
            };
            return CompiledApp;
        }());
        Interact.CompiledApp = CompiledApp;
        var CompiledView = (function () {
            function CompiledView(name, root) {
                this.name = name;
                this.compiledHTMLCSS = "";
                this.components = {};
                this.mainComponentName = "";
                this.compiledStr = "var " + this.name + " = app.createView (\"" + this.name + "\");\n";
                this.root = root;
            }
            CompiledView.prototype.build = function () {
                var output = this.compiledStr + "\n";
                for (var key in this.components) {
                    var comp = this.components[key];
                    output += comp;
                }
                if (this.mainComponentName != "")
                    output += this.name + ".setMainComponent (" + this.mainComponentName + ");\n";
                return (output);
            };
            CompiledView.prototype.writeHTMLCSSToFile = function (path) {
                if (this.compiledHTMLCSS != "")
                    RadJav.IO.TextFile.writeFile(path, this.compiledHTMLCSS);
            };
            CompiledView.prototype.writeToFile = function (path) {
                var output = this.build();
                RadJav.IO.TextFile.writeFile(path, output);
            };
            return CompiledView;
        }());
        Interact.CompiledView = CompiledView;
    })(Interact = RadJav.Interact || (RadJav.Interact = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Interact.js.map