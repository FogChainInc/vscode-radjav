/// <reference path="RadJav.d.ts" />
interface DOMElement extends HTMLElement {
}
declare namespace RadJav {
    /** @class RadJav.IO
    * The IO class.
    * Available on platforms: Windows,Linux,OSX
    */
    class IO {
        /** @method isDir
        * Check to see if a directory exists.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to check.
        * @return {Boolean} Returns true if the directory exists.
        */
        static isDir(path: string): boolean;
        /** @method isFile
        * Check to see if a file exists.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to check.
        * @return {Boolean} Returns true if the file exists.
        */
        static isFile(path: string): boolean;
        /** @method isSymLink
        * Check to see if the file/directory is a symbolic link.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to check.
        * @return {Boolean} Returns true if its a symbolic link.
        */
        static isSymLink(path: string): boolean;
        /** @method currentPath
        * Get the current directory path.
        * Available on platforms: Windows,Linux,OSX
        * @return {string} The current directory path.
        */
        static currentPath(): string;
        /** @method changePath
        * Change the current directory path.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path Change the current directory path.
        */
        static changePath(path: string): void;
        /** @method exists
        * Checks if the file/directory exists.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path Change the current directory path.
        * @return {boolean} Returns true if its the file/directory exists.
        */
        static exists(path: string): boolean;
        /** @method createDir
        * Create a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to the directory to create.
        */
        static createDir(path: string): void;
        /** @method copyDir
        * Copy a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The source directory to copy.
        * @param {string} dest The destination to copy the directory to.
        * @param {boolean} [recursive=true] Recursively copy if set to true.
        */
        static copyDir(src: string, dest: string, recursive?: boolean): void;
        /** @method renameDir
        * Rename a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The directory to rename.
        * @param {string} dest The new name of the directory.
        */
        static renameDir(src: string, dest: string): void;
        /** @method deleteDir
        * Delete a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to the directory to delete.
        */
        static deleteDir(path: string): void;
        /** @method isEmpty
        * Check if a directory is empty.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to the directory to check.
        */
        static isEmpty(path: string): boolean;
        /** @method createSymLink
        * Create a symbolic link.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The path to create a symbolic link to.
        * @param {string} link The path to where the symbolic link can be found.
        */
        static createSymLink(path: string, link: string): void;
        /** @method copySymLink
        * Copy a symbolic link.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The path to copy.
        * @param {string} dest The destination to copy to.
        */
        static copySymLink(src: string, dest: string): void;
        /** @method renameSymLink
        * Rename a symbolic link.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The path to rename.
        * @param {string} dest The new name.
        */
        static renameSymLink(src: string, dest: string): void;
        /** @method deleteSymLink
        * Delete a symbolic link.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to the symbolic link to delete.
        */
        static deleteSymLink(path: string): void;
        /** @method copyFile
        * Copy a file.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The directory to copy.
        * @param {string} dest The destination to copy the directory to.
        */
        static copyFile(src: string, dest: string): void;
        /** @method renameFile
        * Rename a file.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} src The file to rename.
        * @param {string} dest The new name of the file.
        */
        static renameFile(src: string, dest: string): void;
        /** @method deleteFile
        * Delete a file.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to the file to delete.
        */
        static deleteFile(path: string): void;
        /** @method listFiles
        * List files in a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to list files.
        * @return {string[]} The files and directories within that path.
        */
        static listFiles(path: string, recursive?: boolean): string[];
        /** @method listFilesAsync
        * Asynchronously list files in a directory.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to list files.
        * @return {string[]} The files and directories within that path.
        */
        static listFilesAsync(asyncCallback: (newFileOrDir: string) => boolean, path: string, recursive?: boolean): string[];
        /** @method normalizePath
        * Normalize a file/directory path.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to normalize.
        * @param {string} basePath The base path to normalize from.
        * @return {string} The normalized path.
        */
        static normalizePath(path: string, basePath?: string): string;
        /** @method normalizeAndVerifyPath
        * Normalize an verify the file/directory path.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to normalize.
        * @param {string} basePath The base path to normalize from.
        * @return {string} The normalized path.
        */
        static normalizeAndVerifyPath(path: string, basePath?: string): string;
        /** @method normalizeCurrentPath
        * Normalize a file/directory path relative to the current directory path.
        * Available on platforms: Windows,Linux,OSX
        * @param {string} path The path to normalize.
        * @return {string} The normalized path.
        */
        static normalizeCurrentPath(path: string): string;
    }
    namespace IO {
        /** @class RadJav.IO.SerialComm
        * Handles serial communications.
        * Available on platforms: Windows,Linux,OSX
        */
        class SerialComm {
            /** @method getPort
            * Get the serial port.
            * Available on platforms: Windows,Linux,OSX
            * @return {string} The port being used.
            */
            getPort(): string;
            /** @method getBaud
            * Get the baud.
            * Available on platforms: Windows,Linux,OSX
            * @return {string} The baud being used.
            */
            getBaud(): Number;
            /** @method getByteSize
            * Get the byte size being used.
            * Available on platforms: Windows,Linux,OSX
            * @return {string} The byte size being used.
            */
            getByteSize(): Number;
            /** @method getStopBits
            * Get the stop bits being used.
            * Available on platforms: Windows,Linux,OSX
            * @return {string} The stop bits being used.
            */
            getStopBits(): Number;
            /** @method getParity
            * Get the parity being used.
            * Available on platforms: Windows,Linux,OSX
            * @return {string} The parity being used.
            */
            getParity(): Number;
            /** @method open
            * Open the serial communications.
            * Available on platforms: Windows,Linux,OSX
            * @return {Boolean} Whether or not communications were able to be established.
            */
            open(): boolean;
            /** @method isOpen
            * Check if serial communications were opened.
            * Available on platforms: Windows,Linux,OSX
            * @return {Boolean} Whether or not communications were able to be established.
            */
            isOpen(): boolean;
            /** @method read
            * Read from the opened port.
            * Available on platforms: Windows,Linux,OSX
            * @param {Number} bufferSize The size of the buffer to read in bytes.
            * @return {string} The string buffer from the opened port.
            */
            read(bufferSize: Number): string;
            /** @method write
            * Write to the opened port.
            * Available on platforms: Windows,Linux,OSX
            * @param {Number} buffer The string buffer to write.
            * @param {Number} [bufferSize=buffer.length] The number of bytes to write from the buffer.
            * @return {Number} The number of bytes written.
            */
            write(buffer: Number, bufferSize?: Number): Number;
            /** @method close
            * Close the opened port.
            * Available on platforms: Windows,Linux,OSX
            */
            close(): void;
        }
        /** @class RadJav.IO.TextFile
        * Handles text files.
        * Available on platforms: Windows,Linux,OSX
        */
        class TextFile {
            /** @method writeFile
            * Write to a text file.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to write to.
            * @param {string} content The content to write.
            */
            static writeFile(path: string, content: string): void;
            /** @method writeFileAsync
            * Write to a text file asynchronously.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to write to.
            * @param {string} content The content to write.
            */
            static writeFileAsync(path: string, content: string): void;
            /** @method readFile
            * Read from a text file.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to read from.
            * @return {string} The content read from the text file.
            */
            static readFile(path: string): string;
            /** @method readFileAsync
            * Read from a text file asynchronously.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to read from.
            * @return {string} The content read from the text file.
            */
            static readFileAsync(path: string): string;
            /** @property {Number} [read=1]
            * @static
            * Read from a file.
            */
            static read: Number;
            /** @property {Number} [write=2]
            * @static
            * Write to a file.
            */
            static write: Number;
            /** @property {Number} [append=3]
            * @static
            * Append to a file.
            */
            static append: Number;
        }
        /** @class RadJav.IO.TextFile
        * Handles stream files.
        * Available on platforms: Windows,Linux,OSX
        */
        class StreamFile {
            /** @method writeFile
            * Write to a stream file.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to write to.
            * @param {string} content The content to write.
            */
            static writeStream(path: string, content: string): void;
            /** @method writeFileAsync
            * Write to a stream file asynchronously.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to write to.
            * @param {string} content The content to write.
            */
            static writeStreamAsync(path: string, content: string): void;
            /** @method readFile
            * Read from a stream file.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to read from.
            * @return {string} The content read from the text file.
            */
            static readStream(path: string): string;
            /** @method readFileAsync
            * Read from a stream file asynchronously.
            * Available on platforms: Windows,Linux,OSX
            * @param {string} path The path to the file to read from.
            * @return {string} The content read from the text file.
            */
            static readStreamAsync(path: string): string;
            /** @property {Number} [read=1]
            * @static
            * Read from a file.
            */
            static read: Number;
            /** @property {Number} [write=2]
            * @static
            * Write to a file.
            */
            static write: Number;
            /** @property {Number} [append=3]
            * @static
            * Append to a file.
            */
            static append: Number;
        }
    }
    namespace XML {
        /** @class RadJav.IO.XML.XMLFile
        * Opens XML files.
        */
        class XMLFile {
            _parser: DOMParser;
            _root: XMLTag;
            _loadedFile: XMLParser;
            constructor();
            parseXMLFile(filePath: string): Promise<string>;
            parseXML(xmlString: string): void;
            getRoot(): XMLTag;
            static loadFile(filePath: string): Promise<XMLFile>;
            static loadString(xmlString: string): XMLFile;
        }
        class XMLParser {
            xmlFile: any;
            constructor(xmlFile?: any);
        }
        class XMLTag {
            _tag: string;
            _attributes: {
                [name: string]: XMLAttribute;
            };
            _value: string;
            _children: XMLTag[];
            _loadedFile: XMLParser;
            constructor(tag: string | XMLParser);
            getChildren(): XMLTag[];
            getAttributes(): {
                [name: string]: XMLAttribute;
            };
            setTag(name: string): void;
            getTag(): string;
            setValue(value: string): void;
            getValue(): string;
            getTags(tag: string): XMLTag[];
            setAttribute(attribute: string, value: string): void;
            hasAttribute(attribute: string): boolean;
            getAttribute(attribute: string): XMLAttribute;
            getAttributeString(attribute: string, defaultValue?: string): string;
            getAttributeInt(attribute: string, defaultValue?: number): number;
            getAttributeFloat(attribute: string, defaultValue?: number): number;
            getAttributeBoolean(attribute: string, defaultValue?: boolean): boolean;
            toString(): string;
        }
        class XMLAttribute {
            _name: string;
            _value: string;
            constructor(name: string, value: string);
            setValue(value: string): void;
            getValue(): string;
            toInt(): number;
            toFloat(): number;
            toBoolean(): boolean;
            toString(): string;
        }
    }
}
