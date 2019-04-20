var RadJav;
(function (RadJav) {
    var MUI;
    (function (MUI) {
        var BottomNavigator = (function () {
            function BottomNavigator(view) {
                this.type = "RadJav.MUI.BottomNavigator";
                this.rootWin = view;
                if (this._init != null) {
                    this._init.apply(this, arguments);
                }
            }
            BottomNavigator.prototype.addTab = function (view, replace) {
                if (this._addTab != null) {
                    this._addTab.apply(this, arguments);
                }
            };
            BottomNavigator.xmlTag = { tag: "BottomNavigator", type: "BottomNavigator" };
            return BottomNavigator;
        }());
        MUI.BottomNavigator = BottomNavigator;
    })(MUI = RadJav.MUI || (RadJav.MUI = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.MUI.BottomNavigator.js.map