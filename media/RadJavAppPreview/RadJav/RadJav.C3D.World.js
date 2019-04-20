var RadJav;
(function (RadJav) {
    var C3D;
    (function (C3D) {
        var World = (function () {
            function World(obj) {
                if (obj == null)
                    obj = {};
                this._name = RadJav.setDefaultValue(obj._name, "defaultWorld");
                this._ambientLightColor = RadJav.setDefaultValue(obj._ambientLightColor, RadJav.Color.White);
                this._sceneManager = RadJav.setDefaultValue(obj._sceneManager, null);
                this._renderWindow = RadJav.setDefaultValue(obj._renderWindow, null);
            }
            World.prototype.setAmbientLightColor = function (color) {
                this._ambientLightColor = color;
            };
            World.prototype.getAmbientLightColor = function () {
                return (this._ambientLightColor);
            };
            return World;
        }());
        C3D.World = World;
    })(C3D = RadJav.C3D || (RadJav.C3D = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.C3D.World.js.map