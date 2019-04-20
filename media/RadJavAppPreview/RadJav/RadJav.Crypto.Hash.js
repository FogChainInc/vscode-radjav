var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var Hash = (function () {
            function Hash() {
                this._storage = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            Hash.prototype.getCapabilities = function () {
            };
            Hash.prototype.digestSync = function (data) {
            };
            Hash.prototype.digest = function (data) {
            };
            return Hash;
        }());
        Crypto.Hash = Hash;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.Hash.js.map