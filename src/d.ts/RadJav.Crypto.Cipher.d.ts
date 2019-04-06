declare namespace RadJav {
    namespace Crypto {
        class Cipher {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            getCapabilities(): any;
            cipherSync(data: any): any;
            cipher(data: any): any;
        }
    }
}
