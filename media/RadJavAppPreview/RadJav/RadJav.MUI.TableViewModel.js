var RadJav;
(function (RadJav) {
    var MUI;
    (function (MUI) {
        var TableViewModel = (function () {
            function TableViewModel() {
                this.type = "RadJav.MUI.TableViewModel";
                this.items = [];
                this._appObj = null;
                if (this._init != null) {
                    this._init.apply(this, arguments);
                }
            }
            TableViewModel.prototype.push = function (item) {
                this.items.push(item);
                if (this._itemPushed != null) {
                    this._itemPushed(this.items.length - 1);
                }
            };
            TableViewModel.prototype.remove = function (index) {
                if (index < 0 || index > this.items.length - 1)
                    return;
                this.items.splice(index, 1);
                if (this._itemRemoved != null) {
                    this._itemRemoved(index);
                }
            };
            TableViewModel.prototype.pop = function () {
                this.remove(this.items.length - 1);
            };
            TableViewModel.prototype.clear = function () {
                this.items.splice(0, this.items.length);
                if (this._itemsCleared != null) {
                    this._itemsCleared();
                }
            };
            TableViewModel.prototype.get = function (index) {
                if (index < 0 || index > this.items.length - 1)
                    return null;
                return this.items[index];
            };
            TableViewModel.xmlTag = { tag: "tableviewmodel", type: "TableViewModel" };
            return TableViewModel;
        }());
        MUI.TableViewModel = TableViewModel;
    })(MUI = RadJav.MUI || (RadJav.MUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.MUI.TableViewModel.js.map