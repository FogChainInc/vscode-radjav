var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var HashMultipart = (function () {
            function HashMultipart() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            HashMultipart.prototype.getCapabilities = function () {
            };
            HashMultipart.prototype.updateSync = function (data, inputEncoding) {
            };
            HashMultipart.prototype.update = function (data, inputEncoding) {
            };
            HashMultipart.prototype.finalize = function () {
            };
            HashMultipart.prototype.reset = function () {
            };
            return HashMultipart;
        }());
        Crypto.HashMultipart = HashMultipart;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.HashMultipart.js.map