declare namespace RadJav {
    namespace Crypto {
        class CipherMultipart {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            getCapabilities(): any;
            updateSync(data: any, inputEncoding: string): any;
            update(data: any, inputEncoding: string): Promise<any>;
            finalize(): any;
            reset(): any;
        }
    }
}
