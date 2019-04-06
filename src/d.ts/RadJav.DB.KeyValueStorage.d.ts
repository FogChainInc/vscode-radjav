declare namespace RadJav {
    namespace DB {
        class KeyValueStorage {
            /** @property {Mixed} [_storage=null]
            * The native database object.
            */
            _storage: any;
            constructor();
            protected _init: any;
            /** The database to open.
            * @return Returns true if the database was able to be opened.
            * Also returns true if the database was newly created.
            */
            open(path: string): boolean;
            write(key: string, value: string): Promise<void>;
            read(key: string): Promise<string>;
            close(): void;
        }
    }
}
