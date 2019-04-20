var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var DecipherMultipart = (function () {
            function DecipherMultipart() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            DecipherMultipart.prototype.getCapabilities = function () {
            };
            DecipherMultipart.prototype.updateSync = function (data, inputEncoding) {
            };
            DecipherMultipart.prototype.update = function (data, inputEncoding) {
            };
            DecipherMultipart.prototype.finalize = function () {
            };
            DecipherMultipart.prototype.reset = function () {
            };
            return DecipherMultipart;
        }());
        Crypto.DecipherMultipart = DecipherMultipart;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.DecipherMultipart.js.map