var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var PublicKey = (function () {
            function PublicKey() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            PublicKey.prototype.verifySync = function (data, signature) {
            };
            PublicKey.prototype.verify = function (data, signature) {
            };
            PublicKey.prototype.decryptSync = function (data) {
            };
            PublicKey.prototype.decrypt = function (data) {
            };
            return PublicKey;
        }());
        Crypto.PublicKey = PublicKey;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.PublicKey.js.map