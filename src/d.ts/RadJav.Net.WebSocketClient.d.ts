/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace Net {
        /**
         * A web socket client.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class WebSocketClient {
            constructor(obj: any);
            /**
             * The URL to open.
             */
            url: string;
            /**
             * The web socket that will be used for the connection.
             */
            _socket: any;
            /**
             * The events to execute when triggered.
             * Possible events:
             * * connected
             * * error
             * * receive
             * * close
             */
            _events: Object;
            /**
             * Connect to the URL.
             * @return {Promise} The promise to execute when the connection has completed.
             */
            connect(): Promise<any>;
            /**
             * Send a message to the server.
             * @param {String/Object} message The message to send.
             */
            send(message: string | object): void;
            /**
             * Call a function when an event is executed.
             * @param {String} eventName The name of the event.
             * @param {Function} func The function to execute when the event has been executed.
             */
            on(eventName: string, func: Function): void;
        }
    }
}
