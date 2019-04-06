declare namespace RadJav {
    namespace Crypto {
        class PrivateKey {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _engine: any;
            constructor();
            protected _init: any;
            signSync(data: any): any;
            sign(data: any): any;
            encryptSync(data: any): any;
            encrypt(data: any): any;
        }
    }
}
