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
        var HTMLElement = (function (_super) {
            __extends(HTMLElement, _super);
            function HTMLElement(obj, text, parent) {
                var _this = this;
                if (obj == null)
                    obj = {};
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 500;
                    obj.size.y = 350;
                }
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.GUI.HTMLElement";
                if (typeof (_this._text) == "string") {
                    if (_this._text != "") {
                        var parser = new DOMParser();
                        var parsedStr = parser.parseFromString(_this._text, "text/xml");
                        _this._html = parsedStr.firstChild;
                    }
                }
                if (typeof (_this._text) == "object")
                    _this._html = _this._text;
                return _this;
            }
            HTMLElement.xmlTag = { tag: "htmlelement", type: "HTMLElement" };
            return HTMLElement;
        }(RadJav.GUI.GObject));
        GUI.HTMLElement = HTMLElement;
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.GUI.HTMLElement.js.map