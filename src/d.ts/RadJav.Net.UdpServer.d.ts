declare namespace RadJav {
    namespace Net {
        class UdpServer {
            /**
            *
            */
            _engine: any;
            constructor();
            protected _init: any;
            connect(host: any, service: any): any;
            send(msg: any, host: any, service: any): any;
            onReceive(callback: any): any;
            close(): any;
        }
    }
}
