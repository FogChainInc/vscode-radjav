/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace Net {
        class WebSocketServer {
            listenAddress: string;
            port: number;
            _webSocket: any;
            constructor(listenAddress?: string | number, port?: number);
            send(id: string, msg: string | string[]): void;
            sendToAll(msg: string): void;
            receive(): string;
            listen(port: number): void;
            on(eventName: string, func: Function): any;
            close(): void;
            onAccept(func: ((id: string) => void)): void;
            onReceive(func: ((id: string, msg: string) => void)): void;
        }
    }
}
