declare namespace RadJav {
    namespace Crypto {
        class Decipher {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            getCapabilities(): any;
            decipherSync(data: any): any;
            decipher(data: any): any;
        }
    }
}
