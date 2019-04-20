var RadJav;
(function (RadJav) {
    var Net;
    (function (Net) {
        var WebSocketClient = (function () {
            function WebSocketClient(obj) {
                if (obj == null) {
                    obj = {};
                }
                if (typeof obj == "string") {
                    var tempobj = obj;
                    obj = {};
                    obj.url = tempobj;
                }
                this.url = RadJav.setDefaultValue(obj.url, "");
                this._socket = RadJav.setDefaultValue(obj._socket, null);
                this._events = RadJav.setDefaultValue(obj._events, {});
                if (this._init != null)
                    this._init(this.url);
            }
            WebSocketClient.prototype.connect = function () {
                var promise = new Promise(RadJav.keepContext(function (resolve, reject) {
                    if (WebSocket == null) {
                        reject(RadJav._lang.websocketsNotSupported);
                        return;
                    }
                    this._socket = new WebSocket(this.url);
                    this._socket.onopen = RadJav.keepContext(function () {
                        resolve();
                        if (this._events["connected"] != null) {
                            this._events["connected"]();
                        }
                    }, this);
                    this._socket.onerror = RadJav.keepContext(function (error) {
                        reject(error);
                        if (this._events["error"] != null) {
                            this._events["error"](error);
                        }
                    }, this);
                    this._socket.onmessage = RadJav.keepContext(function (message) {
                        if (this._events["receive"] != null) {
                            this._events["receive"](message.data);
                        }
                    }, this);
                    this._socket.onclose = RadJav.keepContext(function (message) {
                        if (this._events["close"] != null) {
                            this._events["close"]();
                        }
                    }, this);
                }, this));
                return promise;
            };
            WebSocketClient.prototype.send = function (message) {
                this._socket.send(message);
            };
            WebSocketClient.prototype.on = function (eventName, func) {
                this._events[eventName] = func;
            };
            return WebSocketClient;
        }());
        Net.WebSocketClient = WebSocketClient;
    })(Net = RadJav.Net || (RadJav.Net = {}));
})(RadJav || (RadJav = {}));
//# sourceMappingURL=RadJav.Net.WebSocketClient.js.map