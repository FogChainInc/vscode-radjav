var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var Decipher = (function () {
            function Decipher() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            Decipher.prototype.getCapabilities = function () {
            };
            Decipher.prototype.decipherSync = function (data) {
            };
            Decipher.prototype.decipher = function (data) {
            };
            return Decipher;
        }());
        Crypto.Decipher = Decipher;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.Decipher.js.map