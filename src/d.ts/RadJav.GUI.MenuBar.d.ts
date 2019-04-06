/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.MenuBar
         * @extends RadJav.GUI.GObject
         * A menu Bar.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class MenuBar extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /** @property {RadJav.GUI.HTMLElement/String} [_htmlElement=null]
             * @protected
             * If the OS is HTML5, this will be the HTML element that will be attached to.
             * If this property is a string, it will be selected by the HTML DOM's element id
             * then converted into a RadJav.GUI.HTMLElement.
             */
            protected _htmlElement: String | HTMLElement | any;
            /** @method setHTMLElement
             * Set the HTML element to use, if the OS being used is HTML5.
             * @param {RadJav.GUI.HTMLElement/String} element The element to be used.
             */
            setHTMLElement(element: HTMLElement): void;
        }
    }
}
