declare namespace RadJav {
    namespace Net {
        class TcpServer {
            /**
            *
            */
            _engine: any;
            constructor();
            protected _init: any;
            listen(host: any, service: any): any;
            send(msg: any): any;
            onAccept(callback: any): any;
            onReceive(callback: any): any;
            close(): any;
        }
    }
}
