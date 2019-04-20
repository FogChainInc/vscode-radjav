var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var TcpServer = (function () {
            function TcpServer() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            TcpServer.prototype.listen = function (host, service) {
            };
            TcpServer.prototype.send = function (msg) {
            };
            TcpServer.prototype.onAccept = function (callback) {
            };
            TcpServer.prototype.onReceive = function (callback) {
            };
            TcpServer.prototype.close = function () {
            };
            return TcpServer;
        }());
        Net.TcpServer = TcpServer;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.TcpServer.js.map