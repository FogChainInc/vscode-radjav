var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var WebSocketServer = (function () {
            function WebSocketServer(listenAddress, port) {
                if (listenAddress === void 0) { listenAddress = "0.0.0.0"; }
                if (port === void 0) { port = 9229; }
                if (typeof (listenAddress) == "number") {
                    this.listenAddress = "0.0.0.0";
                    this.port = listenAddress;
                }
                else {
                    this.listenAddress = listenAddress;
                    this.port = port;
                }
                this._webSocket = null;
                if (typeof this["_init"] == "function")
                    this["_init"](this.listenAddress, this.port);
            }
            WebSocketServer.prototype.send = function (id, msg) {
            };
            WebSocketServer.prototype.sendToAll = function (msg) {
            };
            WebSocketServer.prototype.receive = function () {
                return ("");
            };
            WebSocketServer.prototype.listen = function (port) {
            };
            WebSocketServer.prototype.on = function (eventName, func) {
            };
            WebSocketServer.prototype.close = function () {
            };
            WebSocketServer.prototype.onAccept = function (func) {
            };
            WebSocketServer.prototype.onReceive = function (func) {
            };
            return WebSocketServer;
        }());
        Net.WebSocketServer = WebSocketServer;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.WebSocketServer.js.map