/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace Net {
        class WebServer {
            /** @property {Number} [port=80]
            * The port.
            */
            port: Number;
            /** @property {Number} [_serverType=RadJav.Net.WebServerTypes.HTTP]
            * The server type.
            */
            _serverType: RadJav.Net.WebServerTypes;
            /** @property {Mixed} [_webServer=null]
            * The native web server.
            */
            _webServer: any;
            constructor();
        }
        enum WebServerTypes {
            HTTP = 1,
            HTTPS = 2,
        }
    }
}
