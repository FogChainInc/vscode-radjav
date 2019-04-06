/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
/// <reference path="RadJav.Rectangle.d.ts" />
/// <reference path="RadJav.Font.d.ts" />
/** The base GUI object.
 * Available on platforms: Windows,Linux,OSX,HTML5
 */
declare namespace RadJav {
    namespace GUI {
        class GObject {
            name: string;
            type: string;
            _transform: Rectangle;
            /**
             * The visibility of the object.
             */
            _visible: boolean;
            /**
             * The initial z-index of this object. The higher the value the more "on top" the
             * object will be compared to other objects.
             */
            _zIndex: number;
            /**
             * The text associated with this object.
             */
            _text: string;
            /**
             * The font associated with this object.
             */
            _font: Font;
            /**
             * The cursor to use.
             */
            _cursor: string;
            /**
             * The parent of this object.
             */
            _parent: GObject;
            /**
             * This object's children.
             */
            _children: GObject[];
            /**
             * The native web object associated with this object.
             */
            _html: any;
            /**
             * The native os gui object associated with this object.
             */
            _appObj: any;
            /**
             * How this object is handled with an account.
             */
            access: Account;
            /**
             * Create this object only on certain platforms. All platforms will be enabled
             * by default, only the ones listed in each key will either be created or
             * denied by their boolean value. Ex: { "WIN32": true, "HTML5": false }.
             * Possible keys are:
             * WIN32
             * WIN64
             * LINUX32
             * LINUX64
             * MACOSX32
             * MACOSX64
             * HTML5
             */
            createOnPlatforms: Object;
            /**
             * The function to execute before a child is created.
             * If this function returns true, it will add the child object to be created.
             */
            onBeforeChildCreated: ((obj: Object, parent?: any) => boolean);
            /**
             * The function to execute once the object has been created.
             */
            onCreated: ((obj: Object) => void);
            onChildAdded: ((obj: GObject) => boolean);
            /**
             * Events to call.
             */
            _events: ((...args: any[]) => any);
            constructor(obj?: any, text?: string, parent?: GObject, beforeCreatedChild?: boolean);
            addChild(child: GObject): void;
            findChild(name: string): GObject;
            /**
             * Using the existing parameters in this object, create it.
             * Theme Event: create
             * Is Theme Event Asynchronous: Yes
             * @return {Promise} The promise to execute when the creation is completed.
             */
            create(): Promise<GObject>;
            static parseGObjectXML(xmlTag: RadJav.XML.XMLTag): GObject;
            /**
            * Set this object's font.
            * Theme Event: setFont
            * Is Theme Event Asynchronous: No
            * @param {RadJav.Font} font The font to set.
            */
            setFont(font: Font): void;
            /**
            * Get this object's font.
            * Theme Event: getFont
            * Is Theme Event Asynchronous: No
            * @return {RadJav.Font} The font.
            */
            getFont(): Font;
            /**
            * Set the position of this object.
            * Theme Event: None
            * Is Theme Event Asynchronous: No
            * @param {Number/RadJav.Vector2} x The new position, or the new x coordinate of the new position.
            * @param {Number} [y=null] The new y coordinate.
            */
            setPosition(x: number | RadJav.Vector2, y?: number): void;
            /**
            * Get the position of this object.
            * Theme Event: None
            * Is Theme Event Asynchronous: No
            * @return {RadJav.Vector2} The position of this object.
            */
            getPosition(): RadJav.Vector2;
            /**
             * Get the X position of this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {RadJav.Vector2} The position of this object.
             */
            getX(): number;
            /**
             * Get the Y position of this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {RadJav.Vector2} The position of this object.
             */
            getY(): number;
            /**
             * Set the size of this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @param {number/RadJav.Vector2} width The object's new size, or new width.
             * @param {number} [height=null] The object's new height.
             */
            setSize(width: number, height: number): void;
            /**
             * Get the size of this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {RadJav.Vector2} The size of this object.
             */
            getSize(): RadJav.Vector2;
            /**
             * Get the width of this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {number} The width of this object.
             */
            getWidth(): number;
            /**
            * Get the height of this object.
            * Theme Event: None
            * Is Theme Event Asynchronous: No
            * @return {number} The height of this object.
            */
            getHeight(): number;
            /**
            * Set the object's text.
            * Theme Event: setText
            * Is Theme Event Asynchronous: Yes
            * @param {string} text The text to set.
            * @return {string} The text associated with this object.
            */
            setText(text: string): void;
            /**
            * Get the object's text.
            * Theme Event: getText
            * Is Theme Event Asynchronous: No
            * @return {string} The text associated with this object.
            */
            getText(): string;
            /**
             * Get the parent.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {RadJav.GUI.GObject} The parent of this object.
             */
            getParent(): GObject;
            /**
             * Get the HTML from this object.
             * Theme Event: None
             * Is Theme Event Asynchronous: No
             * @return {Mixed} The HTML object associated with this object.
             */
            getHTML(): any;
            /**
             * Set the visibility of this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             * @param {Boolean} visible The visibility of the object
             */
            setVisibility(visible: boolean): void;
            /**
             * Get the visibility of this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {Boolean} The visibility of this object
             */
            getVisibility(): boolean;
            /**
             * Show this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             */
            show(): void;
            /**
             * Show this object.
             * Theme Event: setVisibility
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             */
            hide(): void;
            /**
             * Enable or disable this object.
             * Theme Event: setEnabled
             * Is Theme Event Asynchronous: Yes
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, Boolean
             */
            setEnabled(enabled: boolean): void;
            /**
             * Get whether or not this object is enabled.
             * Theme Event: getEnabled
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * @return {Boolean} The enabled status of this object
             */
            getEnabled(): boolean;
            /**
             * Calls a function when an event is triggered.
             * Theme Event: on
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject, string, Function
             * @param {string} eventName The name of the event to trigger.
             * @param {Function} func The function to execute.
             * @return {Mixed} The result.
             */
            on(eventName: string, func: Function): any;
            /**
             * Get the HTML dom object.
             * Theme Event: getHTMLDOM
             * Is Theme Event Asynchronous: No
             * Parameters Passed to Theme Event: RadJav.GUI.GObject
             * Available on platforms: HTML5
             * @return {Mixed} The html dom object.
             */
            getHTMLDOM(): any;
        }
    }
}
