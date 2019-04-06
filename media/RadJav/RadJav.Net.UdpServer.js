var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var UdpServer = (function () {
            function UdpServer() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            UdpServer.prototype.connect = function (host, service) {
            };
            UdpServer.prototype.send = function (msg, host, service) {
            };
            UdpServer.prototype.send = function (msg) {
            };
            UdpServer.prototype.onReceive = function (callback) {
            };
            UdpServer.prototype.close = function () {
            };
            return UdpServer;
        }());
        Net.UdpServer = UdpServer;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.UdpServer.js.map