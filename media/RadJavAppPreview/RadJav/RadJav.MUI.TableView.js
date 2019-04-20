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
        var TableView = (function (_super) {
            __extends(TableView, _super);
            function TableView(obj, text, parent) {
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
                _this = _super.call(this, obj, text, parent) || this;
                _this.type = "RadJav.MUI.TableView";
                return _this;
            }
            TableView.xmlTag = { tag: "tableview", type: "TableView" };
            TableView.InputModeText = 1;
            TableView.InputModeNumber = 2;
            TableView.InputModeDecimal = 3;
            TableView.InputModePhone = 4;
            TableView.InputModeEmail = 5;
            TableView.InputModePassword = 6;
            return TableView;
        }(RadJav.MUI.View));
        MUI.TableView = TableView;
    })(MUI = RadJav.MUI || (RadJav.MUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.MUI.TableView.js.map