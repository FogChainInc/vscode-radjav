var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var PrivateKey = (function () {
            function PrivateKey() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            PrivateKey.prototype.signSync = function (data) {
            };
            PrivateKey.prototype.sign = function (data) {
            };
            PrivateKey.prototype.encryptSync = function (data) {
            };
            PrivateKey.prototype.encrypt = function (data) {
            };
            return PrivateKey;
        }());
        Crypto.PrivateKey = PrivateKey;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.PrivateKey.js.map