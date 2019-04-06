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
    var GUI;
    (function (GUI) {
        var Checkbox = (function (_super) {
            __extends(Checkbox, _super);
            function Checkbox(obj, text, parent) {
                var _this = this;
                if (obj == null)
                    obj = {};
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 80;
                    obj.size.y = 40;
                }
                if (obj.checked != null)
                    obj._checked = obj.checked;
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.GUI.Checkbox";
                _this._checked = RadJav.setDefaultValue(obj._checked, false);
                return _this;
            }
            Checkbox.prototype.setChecked = function (checked) {
                this._checked = checked;
                if (this["_setChecked"] != null) {
                    this["_setChecked"].apply(this, arguments);
                    return;
                }
                RadJav.currentTheme.eventSync(this.type, "setChecked", this, checked);
            };
            Checkbox.prototype.isChecked = function () {
                if (this["_isChecked"] != null) {
                    return this["_isChecked"].apply(this, arguments);
                }
                return RadJav.currentTheme.eventSync(this.type, "isChecked", this);
            };
            Checkbox.xmlTag = { tag: "checkbox", type: "Checkbox" };
            return Checkbox;
        }(RadJav.GUI.GObject));
        GUI.Checkbox = Checkbox;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.GUI.Checkbox.js.map