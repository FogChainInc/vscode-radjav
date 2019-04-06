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
        var Image = (function (_super) {
            __extends(Image, _super);
            function Image(obj, text, parent) {
                var _this = this;
                if (obj == null) {
                    obj = {};
                }
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 100;
                    obj.size.y = 100;
                }
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.GUI.Image";
                if (obj.image != null) {
                    obj._image = obj.image;
                }
                _this._image = RadJav.setDefaultValue(obj._image, null);
                return _this;
            }
            Image.prototype.onCreated = function () {
                if (this._image != null) {
                    this.setImage(this._image);
                }
            };
            Image.prototype.setImage = function (image) {
                this._image = image;
                if (this["_setImage"] != null) {
                    this["_setImage"].apply(this, arguments);
                    return;
                }
                RadJav.currentTheme.event(this.type, "setImage", this, image);
            };
            Image.prototype.setScaleMode = function (mode) {
                if (this["_setScaleMode"] != null) {
                    this["_setScaleMode"].apply(this, arguments);
                }
            };
            Image.prototype.getScaleMode = function () {
                if (this["_getScaleMode"] != null) {
                    return this["_getScaleMode"].apply(this, arguments);
                }
                return Image.ScaleModeAspectFit;
            };
            Image.xmlTag = { tag: "image", type: "Image" };
            Image.ScaleModeAspectFit = 1;
            Image.ScaleModeAspectFill = 2;
            return Image;
        }(RadJav.GUI.GObject));
        GUI.Image = Image;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.GUI.Image.js.map