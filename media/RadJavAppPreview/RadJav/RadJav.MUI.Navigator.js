var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RadJav;
(function (RadJav) {
    var MUI;
    (function (MUI) {
        var Navigator = (function (_super) {
            __extends(Navigator, _super);
            function Navigator(rootView, obj, text, parent) {
                var _this = this;
                if (obj == null)
                    obj = {};
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 300;
                    obj.size.y = 300;
                }
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.MUI.Navigator";
                _this.rootWin = rootView;
                _this.views = RadJav.setDefaultValue(obj.views, []);
                _this.animation = RadJav.setDefaultValue(obj.animation, new RadJav.Animation());
                _this.pushView = RadJav.setDefaultValue(obj.pushView, "");
                return _this;
            }
            Navigator.prototype.setAnimation = function (animation) {
                this.animation = animation;
            };
            Navigator.prototype.getAnimation = function () {
                return (this.animation);
            };
            Navigator.prototype.push = function (view, replace) {
                if (view.type != "RadJav.MUI.View")
                    throw new Error("View must be of type RadJav.MUI.View!");
                if ((RadJav.OS.type == "windows") ||
                    (RadJav.OS.type == "linux") ||
                    (RadJav.OS.type == "macosx") ||
                    (RadJav.OS.type == "html5")) {
                    for (var iIdx = 0; iIdx < this.views.length; iIdx++) {
                        var view2 = this.views[iIdx];
                        view2.setVisibility(false);
                    }
                    view.setVisibility(true);
                }
                this.views.push(view);
                if (this["_push"] != null)
                    this["_push"].apply(this, arguments);
            };
            Navigator.prototype.pop = function (view) {
                if (view != null && view.type != "RadJav.MUI.View") {
                    throw new Error("View must be of type RadJav.MUI.View!");
                    return;
                }
                if (this["_pop"] != null) {
                    this["_pop"].apply(this, arguments);
                    return;
                }
                else {
                    RadJav.currentTheme.eventSync(this.type, "pop", this, view);
                    for (var iIdx = 0; iIdx < this.views.length; iIdx++) {
                        if (this.views[iIdx].name == view.name)
                            this.views.splice(iIdx, 1);
                    }
                }
            };
            Navigator.xmlTag = { tag: "navigator", type: "Navigator" };
            return Navigator;
        }(RadJav.GUI.GObject));
        MUI.Navigator = Navigator;
    })(MUI = RadJav.MUI || (RadJav.MUI = {}));
})(RadJav || (RadJav = {}));
if (RadJav.GUI != null)
    RadJav.GUI["Navigator"] = RadJav.MUI.Navigator;
//# sourceMappingURL=RadJav.MUI.Navigator.js.map