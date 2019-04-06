declare namespace RadJav {
    namespace Crypto {
        class Hash {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            getCapabilities(): any;
            digestSync(data: any): any;
            digest(data: any): any;
        }
    }
}
