/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /**
         * A button.
         * Available on platforms: Windows,Linux,OSX,iOS,Android,HTML5
         */
        class Button extends RadJav.GUI.GObject {
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            static xmlTag: TagType;
        }
    }
}
