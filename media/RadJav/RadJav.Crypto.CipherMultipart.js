var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var CipherMultipart = (function () {
            function CipherMultipart() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            CipherMultipart.prototype.getCapabilities = function () {
            };
            CipherMultipart.prototype.updateSync = function (data, inputEncoding) {
            };
            CipherMultipart.prototype.update = function (data, inputEncoding) {
            };
            CipherMultipart.prototype.finalize = function () {
            };
            CipherMultipart.prototype.reset = function () {
            };
            return CipherMultipart;
        }());
        Crypto.CipherMultipart = CipherMultipart;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.CipherMultipart.js.map