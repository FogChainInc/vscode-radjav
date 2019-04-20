var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var UdpClient = (function () {
            function UdpClient() {
                this._engine = null;
                if (this._init != null)
                    this._init.apply(this, arguments);
            }
            UdpClient.prototype.connect = function (host, service) {
            };
            UdpClient.prototype.send = function (msg, host, service) {
            };
            UdpClient.prototype.receive = function (host, service) {
            };
            UdpClient.prototype.send = function (msg) {
            };
            UdpClient.prototype.receive = function () {
            };
            return UdpClient;
        }());
        Net.UdpClient = UdpClient;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.UdpClient.js.map