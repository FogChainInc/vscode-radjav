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
        var Combobox = (function (_super) {
            __extends(Combobox, _super);
            function Combobox(obj, text, parent) {
                var _this = this;
                if (obj == null)
                    obj = {};
                if (typeof obj == "string") {
                    var name = obj;
                    obj = { name: name };
                }
                if (obj.items != null)
                    obj._items = obj.items;
                if (obj.size == null) {
                    obj.size = new RadJav.Vector2();
                    obj.size.x = 120;
                    obj.size.y = 40;
                }
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.GUI.Combobox";
                _this._items = RadJav.setDefaultValue(obj._items, []);
                _this.onCreated = function () {
                    for (var iIdx = 0; iIdx < this._items.length; iIdx++) {
                        var item = this._items[iIdx];
                        this.addItem(item);
                    }
                };
                return _this;
            }
            Combobox.prototype.addItem = function (item) {
                if ((typeof (item) == "string") || (typeof (item) == "number"))
                    item = { text: item };
                RadJav.currentTheme.eventSync(this.type, "addItem", this, item);
            };
            Combobox.prototype.setItems = function (items) {
                RadJav.currentTheme.eventSync(this.type, "setItems", this, items);
            };
            Combobox.prototype.deleteItem = function (index) {
                RadJav.currentTheme.eventSync(this.type, "deleteItem", this, index);
            };
            Combobox.prototype.getItem = function (index) {
                return RadJav.currentTheme.eventSync(this.type, "getItem", this, index);
            };
            Combobox.prototype.getItems = function () {
                return RadJav.currentTheme.eventSync(this.type, "getItems", this);
            };
            Combobox.prototype.getNumItems = function () {
                return RadJav.currentTheme.eventSync(this.type, "getNumItems", this);
            };
            Combobox.prototype.clear = function () {
                return RadJav.currentTheme.eventSync(this.type, "clear", this);
            };
            Combobox.prototype.setSelectedItemIndex = function (index) {
                RadJav.currentTheme.eventSync(this.type, "setSelectedItemIndex", this, index);
                var item = this.getItem(index);
                if (item.text != null)
                    this.setText(item.text);
            };
            Combobox.prototype.getSelectedItemIndex = function () {
                return RadJav.currentTheme.eventSync(this.type, "getSelectedItemIndex", this);
            };
            Combobox.xmlTag = { tag: "combobox", type: "Combobox" };
            return Combobox;
        }(RadJav.GUI.GObject));
        GUI.Combobox = Combobox;
        (function (Combobox) {
            var Item = (function () {
                function Item(obj) {
                    if (obj == null)
                        obj = {};
                    this.name = RadJav.setDefaultValue(obj.name, "");
                    this.text = RadJav.setDefaultValue(obj.text, "");
                }
                return Item;
            }());
            Combobox.Item = Item;
        })(Combobox = GUI.Combobox || (GUI.Combobox = {}));
    })(GUI = RadJav.GUI || (RadJav.GUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.GUI.Combobox.js.map