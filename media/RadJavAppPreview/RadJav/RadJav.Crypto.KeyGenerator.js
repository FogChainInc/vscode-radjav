var RadJav;
(function (RadJav) {
    var Crypto;
    (function (Crypto) {
        var KeyGenerator = (function () {
            function KeyGenerator() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            KeyGenerator.prototype.generate = function () {
            };
            return KeyGenerator;
        }());
        Crypto.KeyGenerator = KeyGenerator;
    })(Crypto = RadJav.Crypto || (RadJav.Crypto = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Crypto.KeyGenerator.js.map