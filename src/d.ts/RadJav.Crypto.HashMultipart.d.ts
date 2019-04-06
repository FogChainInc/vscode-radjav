declare namespace RadJav {
    namespace Crypto {
        class HashMultipart {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            getCapabilities(): any;
            updateSync(data: any, inputEncoding: string): void;
            update(data: any, inputEncoding: string): Promise<void>;
            finalize(): any;
            reset(): any;
        }
    }
}
