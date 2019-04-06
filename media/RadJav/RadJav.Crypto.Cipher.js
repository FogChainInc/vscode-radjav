var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var Cipher = (function () {
            function Cipher() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            Cipher.prototype.getCapabilities = function () {
            };
            Cipher.prototype.cipherSync = function (data) {
            };
            Cipher.prototype.cipher = function (data) {
            };
            return Cipher;
        }());
        Crypto.Cipher = Cipher;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.Cipher.js.map