declare let define: any;
/** @class RadJav
 * @static
 * The main object that starts RadJav.
 */
declare namespace RadJav {
    let defaults: any;
    let useEval: boolean;
    let MIN_VERSION: number;
    let VERSION: number;
    /** @property {String} [baseUrl="./RadJav"]
    * The url to the directory where RadJav is located.
    */
    let baseUrl: string;
    /** @property {String} [themeUrl="./RadJav/themes/default"]
    * The url to the directory where the theme will be loaded.
    */
    let themeUrl: string;
    /** @property {String} [selectedLanguage="en_us"]
    * The selected language.
    */
    let selectedLanguage: string;
    let isThemeLoaded: boolean;
    /** @property {RadJav.Theme} [currentTheme=null]
    * The current theme that has been loaded.
    */
    let currentTheme: Theme;
    /** @property {Boolean} [_isInitialized=false]
    * If set to true, RadJav has been initialized.
    */
    let _isInitialized: boolean;
    /** @property {String[]} [_included=[]]
    * If set to true, RadJav has been initialized.
    */
    let _included: any[];
    /** @property {String[]} [_lang=[]]
    * If set to true, RadJav has been initialized.
    */
    let _lang: {
        [key: string]: any;
    };
    /** @property {Object} [themeUtils={}]
    * Miscellaneous theme utilities to use.
    */
    let themeUtils: any;
    /** @property {Boolean} [useAjax=true]
    * If set to true, each file loaded by RadJav will use ajax.
    */
    let useAjax: boolean;
    /** @property {Boolean} [isMinified=false]
    * Is set to true if RadJav has been minified.
    */
    let isMinified: boolean;
    /** @property {RadJav.Animation[]} [_animations=[]]
    * Any animations that are playing.
    */
    let _animations: RadJav.Animation[];
    /** @property {number} [animationFrameRate=16]
    * The frame rate for how often the animation update is called.
    */
    let animationFrameRate: number;
    /** @property {number} [prevTime=0]
    * The previous time since last the last update.
    */
    let prevTime: number;
    /** @property {RadJav.OS.ScreenInfo[]} [screens=[]]
    * The screens attached to this device.
    */
    let screens: RadJav.OS.ScreenInfo[];
    /**
    * Exit the application.
    * Available on platforms: Windows,Linux,OSX
    * @param {Number} [exitCode=0] The exit code to end the application with.
    */
    function quit(exitCode?: number): void;
    /**
    * Exit the application.
    * Available on platforms: Windows,Linux,OSX
    * @param {Number} [exitCode=0] The exit code to end the application with.
    */
    function exit(exitCode: number): void;
    /**
    * Load and return a module. If the module has not already been loaded, this will create
    * an asynchronous connection to the server and include whatever javascript files it needs.
    * @param {String} path The path to the module to load.
    * @return {Promise} The promise containing the loaded module.
    */
    function include(path: string): Promise<any>;
    /**
    * Initialize RadJav.
    * @param {Object[]} [libraries=null] The libraries to include.
    * @return {Promise} The promise to execute.
    */
    function initialize(libraries?: {
        [key: string]: any;
    }[]): Promise<void>;
    /**
    * Get the paths to the standard library.
    * @return {Object[]} The standard library.
    */
    function getStandardLibrary(): {
        file: string;
        themeFile: boolean;
        loadFirst?: boolean;
    }[];
    /**
    * Get the paths to the gui library.
    * @return {Object[]} The gui library.
    */
    function getGUILibrary(): {
        file: string;
        themeFile: boolean;
        loadFirst?: boolean;
    }[];
    /**
    * Get the paths to the MUI library.
    * @return {Object[]} The MUI library.
    */
    function getMUILibrary(): {
        file: string;
        themeFile: boolean;
        loadFirst?: boolean;
    }[];
    /**
    * Get the paths to the C3D library.
    * @return {Object[]} The C3D library.
    */
    function getC3DLibrary(): {
        file: string;
        themeFile: boolean;
        loadFirst?: boolean;
    }[];
    /**
    * Get the paths to the Net library.
    * @return {Object[]} The Net library.
    */
    function getNetLibrary(): {
        file: string;
        themeFile: boolean;
    }[];
    /**
    * Get the primary screen being used.
    * @return {RadJav.OS.ScreenInfo} The screen being used.
    */
    function getPrimaryScreen(): RadJav.OS.ScreenInfo;
    /**
    * Add a screen.
    * @param {RadJav.OS.ScreenInfo} The screen to add.
    */
    function addScreen(screen: RadJav.OS.ScreenInfo): void;
    /**
    * Setup the screens used on this device.
    */
    function setupScreens(): void;
    /**
    * Connect to the developer tools to help build/debug RadJav apps.
    * @param {string} [server="ws://127.0.0.1:8585/"] The WebSocket server url to connect to.
    */
    function connectDevTools(server?: string, showMessage?: boolean): void;
    /**
     * Include libraries.
     * @param {Object[]} libraries The libraries to include.
     * @return {Promise} The promise to execute when the including has completed.
     */
    function includeLibraries(libraries: any): Promise<void>;
    /**
     * Load the selected language.
     * @return {Promise} The promise to execute when the language has been loaded.
     */
    function _loadLanguages(): Promise<any>;
    /**
     * Load a theme.
     * @param {String} themeURL The URL to the theme to load.
     */
    function _loadTheme(themeURL: string): Promise<any>;
    /**
    * Run an application from a file or a function.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {String/Function} file The path to the file to execute the javascript. Or a
    * function that will immediately be executed.
    * @return {Promise} The promise that will be executed when this module has completed executing.
    */
    function runApplication(file: string | Function, createRootGObj?: boolean): Promise<any>;
    function runApp(file: string | Function, createRootGObj?: boolean): Promise<any>;
    /**
    * Run an application from a file.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {String} file The path to the file to execute the javascript. Or a
    * function that will immediately be executed.
    * @return {Promise} The promise that will be executed when this module has completed executing.
    */
    function runApplicationFromFile(file: string): Promise<void>;
    /**
    * Load RadJav objects.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {String/RadJav.GUI.GObject[]/RadJav.C3D.Object3D[]} objs The objects to load.
    * @return {Promise} When loading has completed, all loaded objects will be passed into
    * the "then" function as an object with key/value pairs.
    */
    function loadObjects(objs: any[]): Promise<{
        [key: string]: any;
    }>;
    /**
    * Load RadJav objects from XML.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {String} xml The XML to load.
    * @return {Promise} When loading has completed, all loaded objects will be passed into
    * the "then" function as an object with key/value pairs.
    */
    function loadXML(xml: string): Promise<any>;
    function loadAppXML(parent: RadJav.GUI.GObject, objs: RadJav.XML.XMLTag[]): RadJav.GUI.GObject[];
    function isMobile(): boolean;
    /**
    * Checks to see if the current web browser is using Internet Explorer.
    * @return {Boolean} Returns true if the web browser is Internet Explorer.
    */
    function _isUsingInternetExplorerTheWorstWebBrowserEver(): boolean;
    /**
     * Get a synchronous response from HTTP. This will lock whatever thread it is currently on!
     * @param {String} addr The address to connect to.
     * @return {String} The response from the HTTP server.
     */
    function _getSyncResponse(addr: string): string;
    /**
     * Get an asynchronous response from HTTP.
     * @param {String} addr The address to connect to.
     * @return {String} The response from the HTTP server.
     */
    function _getResponse(addr: string): Promise<string>;
    /**
     * Perform a deep copy of an object. This has been copied from jQuery.
     * Thank you jQuery!
     * Available on platforms: Windows,Linux,OSX,HTML5
     * @param {Object} obj The object to clone.
     * @return {Object} The cloned object.
     */
    function clone(...obj: any[]): any[];
    /**
    * Perform a deep copy of an object.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {Object} obj The object to clone.
    * @return {Object} The cloned object.
    */
    function cloneObject(obj: any): any;
    /**
     * Perform a deep copy of an array.
     * Available on platforms: Windows,Linux,OSX,HTML5
     * @param {Array} obj The array to clone.
     * @return {Array} The cloned array.
     */
    function cloneArray(obj: any[]): any[];
    /**
     * Copy the properties of one object to another.
     * Available on platforms: Windows,Linux,OSX,HTML5
     * @param {Object} obj1 The object to receive the properties.
     * @param {Object} obj2 The object to send the properties.
     * @param {Boolean} [overwriteExisting=true] If set to true, this will overwrite any
     * existing keys.
     * @return {Object} The completed object.
     */
    function copyProperties(obj1: object, obj2: object, overwriteExisting: boolean): object;
    /**
    * Set a default value to a parameter should it the parameter be set to
    * undefined.
    * Available on platforms: Windows,Linux,OSX,HTML5
    * @param {Mixed} param The parameter value to check.
    * @param {Mixed} defaultValue The default value to set should param be set to undefined.
    * @param {Function} [onValue=null] This function is called when a value can be retrieved from the
    * param parameter.
    * @return {Mixed} Will return the value of param should it not be set to undefined. If param
    * is set to undefined, defaultValue will be returned instead.
    */
    function setDefaultValue(param: any, defaultValue: any, onValue?: Function): any;
    /**Load a CommonJS module.
     */
    function loadModule(moduleData: string): any;
    /**
     * Keep the context the object is currently in.
     * Available on platforms: Windows,Linux,OSX,HTML5
     * @param {Function} func The document element's id.
     * @param {Object} context The object to remain in context.
     * @param {Mixed} [val=undefined] An additional value to pass to the context.
     * @return {Mixed} The returned result from the function func.
     */
    function keepContext(func: Function, context: object, val?: any): any;
    /**
     * Get a language string from the current lanuage. Additional arguments can be
     * added to this method to combine the strings together using Utils.combineString.
     * @param {String} keyword The keyword to use when getting the language string.
     * @return {String} The string associated with the keyword.
     */
    function getLangString(keyword: any, ...other: any[]): string;
    /**
    * Combine multiple strings together using %s in the first argument.
    *
    *     @example
    *     var firstName = "John";
    *     var lastName = "Doe";
    *     var result = RadJav.combineString ("Hi there %s %s!", firstName, lastname);
    *     // The result will contain:
    *     // Hi there John Doe!
    * @param {String} primaryString The primary string that contains %s. Each %s will be
    * replaced with an argument specified in the order in which each argument is received.
    * @return {String} The result of the string combining.
    */
    function combineString(primaryString: string, ...otherStrings: string[]): string;
    function _resolveThis(resolve: Function, reject: Function): void;
    function _emptyResolve(resolve: Function, reject: Function): any;
    function _guiFinishedCreatingGObject(resolve: any, reject: any): void;
    function getTime(): number;
    function addAnimation(anim: RadJav.Animation): void;
    function animationUpdate(): void;
    class TagType {
        tag: string;
        type: string;
        constructor();
    }
    class Theme {
        /** @property {String} [name=""]
        * The name of the theme.
        */
        name: string;
        /** @property {String} [version=""]
        * The theme's version.
        */
        version: string;
        /** @property {String} [author=""]
        * The theme's author.
        */
        author: string;
        /** @property {Date} [lastUpdated=null]
        * The theme's last update date.
        */
        lastUpdated: Date;
        /** @property {String} [description=""]
        * The theme's description.
        */
        description: string;
        /** @property {String} [url=""]
        * The url to this theme.
        */
        url: string;
        /** @property {String} [initFile=""]
        * The initialization file to start.
        */
        initFile: string;
        /** @property {String[]} [cssFiles=[]]
        * CSS files to load.
        */
        cssFiles: string[];
        /** @property {Object[]}[fonts=[]]
        * Fonts to load.
        */
        fonts: object[];
        /** @property exports
         * @static
         * The functions and properties associated with this theme.
         */
        exports: any;
        /** @property themeObjects
         * @static
         * The theme objects associated with this theme.
         */
        themeObjects: any[];
        constructor(obj?: Theme);
        /**
         * Load the initialization file and execute it.
         * @return {Promise} Executes when the loading has completed.
         */
        loadInitializationFile(): Promise<any>;
        /**
         * Load the javascript files for this theme.
         * @return {Promise} Executes when the loading has completed.
         */
        loadJavascriptFiles(): Promise<any>;
        /**
         * Execute a theme event.
         * @param {String} file The file associated with the event.
         * @param {String} event The name of the event to trigger.
         * @return {Promise} The promise to execute when this event is completed.
         */
        event(file: string, event: string, ...other: any[]): Promise<any>;
        /**
         * Execute a theme event synchronously.
         * @param {String} file The file associated with the event.
         * @param {String} event The name of the event to trigger.
         * @return {Mixed} The data returned from the event.
         */
        eventSync(file: string, event: string, ...other: any[]): any;
        /**
         * Load the theme.
         * @param {String} url The URL to this theme.
         * @param {String} data The JSON to parse and get the data from.
         */
        static loadTheme(url: string, data: any): Theme;
    }
    namespace GUI {
        /**
        * Initialize a GUI object.
        * @param {String} type The object type to create.
        * @param {String/Mixed} name The name of the object.
        * @param {String} text The text associated with the object.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Promise} The promise to execute when this object has finished being created.
        */
        function initObj(type: string | object | any, name: any, text: string, parent: object, args?: any[]): RadJav.GUI.GObject;
        /**
        * Create a GUI object.
        * @param {String} type The object type to create.
        * @param {String/Mixed} name The name of the object.
        * @param {String} text The text associated with the object.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Promise} The promise to execute when this object has finished being created.
        */
        function create(type: string, name: string, text: string, parent: object, args?: any[]): any;
        /**
        * Create GUI objects.
        * @param {String/RadJav.GUI.GObject[]} objects The objects to create.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Function} [beforeCreated=null] The function to execute before the object is created.
        * If this function returns false, the object will not be created.
        * @return {Promise} The promise to execute when the objects have finished being created.
        */
        function createObjects(objects: any, parent: object, beforeCreated?: Function): Promise<any>;
    }
    namespace MUI {
        /**
        * Initialize a MUI object.
        * @param {String} type The object type to create.
        * @param {String/Mixed} name The name of the object.
        * @param {String} text The text associated with the object.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Promise} The promise to execute when this object has finished being created.
        */
        function initObj(type: string | object | any, name: any, text: string, parent: object): object;
        /**
        * Create a MUI object.
        * @param {String} type The object type to create.
        * @param {String/Mixed} name The name of the object.
        * @param {String} text The text associated with the object.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Promise} The promise to execute when this object has finished being created.
        */
        function create(type: string, name: string, text: string, parent: object): any;
        /**
        * Create MUI objects.
        * @param {String/RadJav.GUI.GObject[]} objects The objects to create.
        * @param {RadJav.GUI.GObject} parent The parent of this object.
        * @param {Function} [beforeCreated=null] The function to execute before the object is created.
        * If this function returns false, the object will not be created.
        * @return {Promise} The promise to execute when the objects have finished being created.
        */
        function createObjects(objects: any, parent: object, beforeCreated?: Function): Promise<any>;
    }
    /** @class C3D
    * @static
    * Contains classes for 3d operations in a RadJav.GUI.Canvas3D object.
    */
    namespace C3D {
    }
    /** @class Net
    * @static
    * Contains classes for network operations.
    */
    namespace Net {
        /**
        * Make an ajax request to a HTTP server.
        * Available on platforms: Windows,Linux,OSX,HTML5
        * @param {String/Object} req The URL or request object to send to the server.
        * @return {Promise} The promise to execute when the request has completed.
        */
        function httpRequest(req: string | object): Promise<any>;
    }
    class Console {
        /**
        * Print a message to the console.
        * @param {String} message The message to output.
        */
        static print(message: string): void;
        /**
        * Print a message to the console with a new line at the end.
        * @param {String} message The message to output.
        */
        static println(message: string): void;
        /**
        * Print a message to the console with a new line at the end.
        * @param {String} message The message to output.
        */
        static log(message: string): void;
    }
    namespace OS {
        /** Represents the current type of operating system.
        * Can be:
        * * windows
        * * linux
        * * macosx
        * * android
        * * ios
        * * html5
        */
        let type: string;
        let numBits: number;
        let args: string[];
        /** Describes the screen used by the user.
         * Available on platforms: Windows,Linux,OSX,iOS,Android,HTML5
         */
        class ScreenInfo {
            width: number;
            height: number;
            scale: number;
            constructor(width?: number, height?: number, scale?: number);
            /**
             * Get the width of the current screen.
             * @return {Number} The width of the current screen.
             */
            getWidth(): number;
            /**
             * Get the height of the current screen.
             * @return {Number} The height of the current screen.
             */
            getHeight(): number;
            /**
             * Get the scale of point to pixel.
             * @return {Number} The point to pixel scale.
             */
            getScale(): number;
            /**
             * Get the number of screens on the device.
             * @return {Number} The height of the current screen.
             */
            static getNumberOfScreens(): number;
            /**
             * Get the screen info for the selected screen.
             * @return {Number} The height of the current screen.
             */
            static getScreenInfo(screenIndex: number): ScreenInfo;
        }
        /**
        * Execute code when RadJav has finished loading.
        * Available on platforms: Windows,Linux,OSX,HTML5
        * @param {Function} func The function to execute.
        * @return {Promise} The promise to execute.
        */
        function onReady(func: any): Promise<any>;
        /**
         * Get the path to the user's documents folder.
         * Available on platforms: Windows,Linux,OSX
         * @return {String} The current user's documents folder path.
         */
        /**
         * Get the path to the user's temporary files folder.
         * Available on platforms: Windows,Linux,OSX
         * @return {String} The current user's temporary files path.
         */
        /**
         * Get the path to the user's data files folder.
         * Available on platforms: Windows,Linux,OSX
         * @return {String} The current user's data files path.
         */
        /**
         * Get the path to the application.
         * Available on platforms: Windows,Linux,OSX
         * @return {String} The path to the application.
         */
        /**
         * Get the current working path.
         * Available on platforms: Windows,Linux,OSX
         * @return {String} The current working path.
         */
        /**
         * Open a URL in the default web browser.
         * Available on platforms: Windows,Linux,OSX,HTML5
         * @param {String} url The url to open.
         */
        function openWebBrowserURL(url: string): void;
        /** Contains HTML5 specific functions.
         * Available on platforms: HTML5
         */
        namespace HTML5 {
            /** If set to true, all objects will be positioned using absolute positioning.
             * @default true
             */
            let absolutePositioning: boolean;
            /**
             * Show a HTML element.
             * @param {String/HTMLElement} elm The element to show or hide.
             * @param {Boolean} [show=true] If set to true the element will be shown.
             */
            function showElement(elm: any, show: boolean): void;
            /** @static
             * Get the operating system from the browser's user agent.
             * @return {string} The operating system.
             */
            function getOS(): string;
            /** @static
             * Get the URL parameters as an object.
             * @return {Object} The url parameters.
             */
            function getUrlParamObj(): any;
            /** @static
             * Get a URL parameters value.
             * @param {String} name The url parameters name.
             * @return {Mixed} The url parameters value. Returns undefined if the parameter was
             * not able to be found.
             */
            function getUrlParam(name: string): any;
            /** @static
             * Set whether or not each gui object placed is placed using absolute positioning.
             * @param {Boolean} absolutePositioning If set to true, all objects will be
             * positioned using absolute positioning.
             */
            function useAbsolutePositioning(absolutePositioning: boolean): void;
            /** @static
             * Start downloading a text file.
             * @param {String} text The text to download.
             * @param {String} fileName The filename.
             * @param {String} [mimeType="text/plain"] The mime type.
             */
            function downloadTextAsFile(text: string, fileName: string, mimeType: string): void;
            /** @static
             * Reloads the current page.
             * @param {Boolean} [forceNewPage=false] If set to true, this will force the browser
             * to get a new page from the server.
             */
            function reloadPage(forceNewPage: boolean): void;
            /** Get the parent HTML from an object.
             * @param {RadJav.GUI.GObject} obj The parent object to get the HTML from.
             * @return {Mixed} The parent HTML object.
             */
            function getParentHTML(obj: any): any;
            /** Get the HTML DOM object from some HTML string.
             * @param {String} str The string to convert into an HTML DOM.
             * @return {Mixed} The HTML DOM object.
             */
            function getHTMLDOM(str: string): Object;
            /** Append HTML to an existing HTML DOM object.
             * @param {Mixed} obj The HTML DOM object to append this HTML to.
             * @param {String/Mixed} html The HTML to append.
             */
            function appendHTML(obj: HTMLElement, html: any): any;
            /** Use a selector to get a DOM object.
             * @param {Mixed/String} obj The HTML DOM object to get the selection from. If
             * this is a string, it will be treated as the selector.
             * @param {String} selector The selector to use to get the DOM object.
             * @return {Mixed} The selected DOM object.
             */
            function selectDOM(obj: HTMLElement, selector: any): any;
            /** When a dom object has finished loading, execute a promise.
             * @param {Object} obj The object to check.
             * @return {Promise} The promise to execute.
             */
            function ready(obj: any): Promise<void>;
            /**
             * For use when using a javascript interface to a webview callback. It will attempt
             * to call the native javascript interface using the connectorName.
             * @param {String/Object} connectorName On Android, this would be the name of the
             * Javascript interface that is connected to the webview. On iOS this would be
             * the name of the message handler for WKWebView. If you are using WebView on iOS
             * you must set webViewType to iOSWebView in order to be captured, since a reload on
             * the page is necessary. iOSWebView will not return any result, and when reloading
             * the page, the next url will be in the format:
             * connectorName://methodName/arguments in json string
             *
             * If this is an object, this is the JSON Schema:
             * {
             *	"title": "Interface Connector JSON Schema",
             *	"type": "object",
             *	"properties": {
             *			"name": {
             *					"description": "The name of the javascript interface.",
             *					"type": "string"
             *				},
             *			"webViewType": {
             *					"description": "The type of webview that's being used by the application. This can be: AndroidWebView,iOSWKWebView,iOSWebView",
             *					"type": "string"
             *				}
             *		},
             *	"required": ["name"]
             * }
             * @param {String} methodName The name of the method to call. On iOS, this will be passed
             * as an additional argument.
             * @return {Mixed} The returned result from the interface.
             */
            function interfaceConnector(connectorName: string | object | any, methodName: string): any;
        }
    }
}
declare function parseBoolean(str: string): boolean;
declare var _eval: typeof eval;
declare var _Function: FunctionConstructor;
