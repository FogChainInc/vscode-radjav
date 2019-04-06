/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.GUI.GObject.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Window
         * @extends RadJav.GUI.GObject
         * A window.
         * Available on platforms: Windows,Linux,OSX,HTML5
         */
        class Window extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
