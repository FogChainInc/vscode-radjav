var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var TcpClient = (function () {
            function TcpClient() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            TcpClient.prototype.send = function (msg) {
            };
            TcpClient.prototype.receive = function () {
            };
            return TcpClient;
        }());
        Net.TcpClient = TcpClient;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.TcpClient.js.map