var RadJav;
(function (RadJav) {
    var GUI;
    (function (GUI) {
        var GObject = (function () {
            function GObject(obj, text, parent, beforeCreatedChild) {
                if (obj == null)
                    obj = new Object();
                if (typeof (RadJav["XML"]) != "undefined") {
                    if (obj instanceof RadJav["XML"]["XMLTag"])
                        obj = GObject.parseGObjectXML(obj);
                }
                if (typeof obj == "string") {
                    var tempObj = obj;
                    obj = {};
                    obj.name = tempObj;
                }
                if (beforeCreatedChild == undefined)
                    beforeCreatedChild = null;
                if (text != null)
                    obj._text = text;
                if (parent != null)
                    obj._parent = parent;
                if (obj.text != null)
                    obj._text = obj.text;
                if (obj.cursor != null)
                    obj._cursor = obj.cursor;
                if (obj.visible != null)
                    obj._visible = obj.visible;
                if (obj.visibility != null)
                    obj._visible = obj.visibility;
                if (obj.zIndex != null)
                    obj._zIndex = obj.zIndex;
                if (obj.font != null)
                    obj._font = new RadJav.Font(obj.font);
                if (obj.parent != null)
                    obj._parent = obj.parent;
                if (obj._parent != null) {
                    if (obj._parent.type == "RadJav.MUI.Navigator") {
                        if ((RadJav.OS.type == "android") ||
                            (RadJav.OS.type == "ios")) {
                            obj._parent = null;
                        }
                        else {
                            obj._visible = false;
                        }
                    }
                }
                this.name = RadJav.setDefaultValue(obj.name, "");
                this.type = RadJav.setDefaultValue(obj.type, "");
                this._transform = RadJav.setDefaultValue(obj._transform, new RadJav.Rectangle());
                this._visible = RadJav.setDefaultValue(obj._visible, true);
                this._zIndex = RadJav.setDefaultValue(obj._zIndex, 0);
                this._text = RadJav.setDefaultValue(obj._text, "");
                this._font = RadJav.setDefaultValue(obj._font, new RadJav.Font());
                this._cursor = RadJav.setDefaultValue(obj._cursor, "default");
                this._parent = RadJav.setDefaultValue(obj._parent, null);
                this._children = RadJav.setDefaultValue(obj._children, []);
                this._html = RadJav.setDefaultValue(obj._html, null);
                this._appObj = RadJav.setDefaultValue(obj._appObj, null);
                this.createOnPlatforms = RadJav.setDefaultValue(obj.createOnPlatforms, null);
                this.onBeforeChildCreated = RadJav.setDefaultValue(obj.onBeforeChildCreated, null);
                this.onCreated = RadJav.setDefaultValue(obj.onCreated, null);
                this.onChildAdded = RadJav.setDefaultValue(obj.onChildAdded, null);
                this._events = RadJav.setDefaultValue(obj._events, {});
                if (obj.events != null) {
                    this._events = obj.events;
                }
                if (obj.click != null) {
                    this._events.click = obj.click;
                }
                if (obj.children != null) {
                    for (var iIdx = 0; iIdx < obj.children.length; iIdx++) {
                        var obj2 = obj.children[iIdx];
                        var createTheObject = true;
                        var newObj = obj2;
                        if (this.onBeforeChildCreated != null)
                            createTheObject = this.onBeforeChildCreated(obj2, parent);
                        if (createTheObject == true) {
                            newObj["_visible"] = this._visible;
                            this.addChild(newObj);
                        }
                    }
                }
                if (obj.position != null) {
                    var position = new RadJav.Vector2();
                    if (typeof obj.position == "string") {
                        position = RadJav.Vector2.parseVector2(obj.position);
                    }
                    else {
                        position = obj.position;
                    }
                    this._transform.setPosition(position);
                }
                if (obj.size != null) {
                    var size = new RadJav.Vector2();
                    if (typeof obj.size == "string") {
                        size = RadJav.Vector2.parseVector2(obj.size);
                    }
                    else {
                        size = obj.size;
                    }
                    this._transform.setSize(size);
                }
            }
            GObject.prototype.addChild = function (child) {
                if (this.onChildAdded != null) {
                    if (this.onChildAdded(child) === false)
                        return;
                }
                var doParentLOL = true;
                if (this._parent.type == "RadJav.MUI.Navigator") {
                    child._visible = false;
                    if ((RadJav.OS.type == "android") ||
                        (RadJav.OS.type == "ios")) {
                        child._parent = null;
                        doParentLOL = false;
                    }
                }
                if (doParentLOL == true)
                    child._parent = this;
                this._children.push(child);
                if (this["_addChild"] != null)
                    this["_addChild"](child);
            };
            GObject.prototype.findChild = function (name) {
                for (var iIdx = 0; iIdx < this._children.length; iIdx++) {
                    var obj = this._children[iIdx];
                    if (obj.name == name)
                        return (obj);
                }
                return (null);
            };
            GObject.prototype.create = function () {
                var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                    if (this.createOnPlatforms != null) {
                        for (var key in this.createOnPlatforms) {
                            if (key == "HTML5") {
                                if (this.createOnPlatforms[key] == false) {
                                    resolve(this);
                                    return;
                                }
                            }
                        }
                    }
                    var promise2 = RadJav.currentTheme.event(this.type, "create", this);
                    if (promise2 == null)
                        debugger;
                    promise2.then(RadJav.keepContext(function (htmlObj) {
                        this._html = htmlObj;
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
                        return (Promise.all(promises).then(RadJav.keepContext(function () {
                            for (var key in this._events) {
                                if (this._events[key] != null) {
                                    var func = new Function(this._events[key]);
                                    RadJav.currentTheme.event(this.type, "on", this, key, func);
                                }
                            }
                            if (this.onCreated != null)
                                this.onCreated();
                            resolve(this);
                        }, this)));
                    }, this));
                }, this));
                return (promise);
            };
            GObject.parseGObjectXML = function (xmlTag) {
                var obj = new GObject();
                if (xmlTag.hasAttribute("name") == true)
                    obj.name = xmlTag.getAttributeString("name", "");
                var pos = new RadJav.Vector2();
                var size = new RadJav.Vector2();
                if (xmlTag.hasAttribute("x") == true) {
                    pos.x = xmlTag.getAttributeFloat("x", 0);
                    obj._transform.setPosition(pos);
                }
                if (xmlTag.hasAttribute("y") == true) {
                    pos.y = xmlTag.getAttributeFloat("y", 0);
                    obj._transform.setPosition(pos);
                }
                if (xmlTag.hasAttribute("width") == true) {
                    size.x = xmlTag.getAttributeFloat("width", 0);
                    obj._transform.setSize(size);
                }
                if (xmlTag.hasAttribute("height") == true) {
                    size.y = xmlTag.getAttributeFloat("height", 0);
                    obj._transform.setSize(size);
                }
                return (obj);
            };
            GObject.prototype.setFont = function (font) {
                this._font = font;
                RadJav.currentTheme.eventSync(this.type, "setFont", this, font);
            };
            GObject.prototype.getFont = function () {
                return RadJav.currentTheme.eventSync(this.type, "getFont", this);
            };
            GObject.prototype.setPosition = function (x, y) {
                if (y === void 0) { y = 0; }
                var pos = new RadJav.Vector2();
                if (typeof (x) == "object") {
                    pos.x = x.x;
                    pos.y = x.y;
                }
                else {
                    pos.x = x;
                    pos.y = y;
                }
                RadJav.currentTheme.eventSync(this.type, "setPosition", this, pos);
                this._transform.setPosition(pos);
            };
            GObject.prototype.getPosition = function () {
                var pos = this._transform.getPosition();
                if (this._html != null)
                    pos = RadJav.currentTheme.eventSync(this.type, "getPosition", this);
                return pos;
            };
            GObject.prototype.getX = function () {
                var pos = this._transform.x;
                if (this._html != null)
                    pos = RadJav.currentTheme.eventSync(this.type, "getPosition", this).x;
                return pos;
            };
            GObject.prototype.getY = function () {
                var pos = this._transform.y;
                if (this._html != null)
                    pos = RadJav.currentTheme.eventSync(this.type, "getPosition", this).y;
                return pos;
            };
            GObject.prototype.setSize = function (width, height) {
                RadJav.currentTheme.eventSync(this.type, "setSize", this, new RadJav.Vector2(width, height));
                this._transform.setSize(width, height);
            };
            GObject.prototype.getSize = function () {
                var size = this._transform.getSize();
                if (this._html != null)
                    size = RadJav.currentTheme.eventSync(this.type, "getSize", this);
                return size;
            };
            GObject.prototype.getWidth = function () {
                var size = this._transform.width;
                if (this._html != null)
                    size = RadJav.currentTheme.eventSync(this.type, "getSize", this).x;
                return size;
            };
            GObject.prototype.getHeight = function () {
                var size = this._transform.height;
                if (this._html != null)
                    size = RadJav.currentTheme.eventSync(this.type, "getSize", this).y;
                return size;
            };
            GObject.prototype.setText = function (text) {
                this._text = text;
                RadJav.currentTheme.event(this.type, "setText", this, text);
            };
            GObject.prototype.getText = function () {
                return RadJav.currentTheme.eventSync(this.type, "getText", this);
            };
            GObject.prototype.getParent = function () {
                return this._parent;
            };
            GObject.prototype.getHTML = function () {
                return this._html;
            };
            GObject.prototype.setVisibility = function (visible) {
                this._visible = visible;
                RadJav.currentTheme.event(this.type, "setVisibility", this, visible);
                for (var iIdx = 0; iIdx < this._children.length; iIdx++) {
                    var child = this._children[iIdx];
                    child.setVisibility(visible);
                }
            };
            GObject.prototype.getVisibility = function () {
                return RadJav.currentTheme.eventSync(this.type, "getVisibility", this);
            };
            GObject.prototype.show = function () {
                this.setVisibility(true);
            };
            GObject.prototype.hide = function () {
                this.setVisibility(false);
            };
            GObject.prototype.setEnabled = function (enabled) {
                RadJav.currentTheme.event(this.type, "setEnabled", this, enabled);
            };
            GObject.prototype.getEnabled = function () {
                return RadJav.currentTheme.eventSync(this.type, "getEnabled", this);
            };
            GObject.prototype.on = function (eventName, func) {
                return RadJav.currentTheme.event(this.type, "on", this, eventName, func);
            };
            GObject.prototype.getHTMLDOM = function () {
                return RadJav.currentTheme.eventSync(this.type, "getHTMLDOM", this);
            };
            return GObject;
        }());
        GUI.GObject = GObject;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.GUI.GObject.js.map