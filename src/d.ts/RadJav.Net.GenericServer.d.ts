/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace Net {
        class GenericServer {
            protected _db: {
                [name: string]: RadJav.DB.KeyValueStorage;
            };
            constructor();
        }
    }
}
