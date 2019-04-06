/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Label
         * @extends RadJav.GUI.GObject
         * A label.
         * Available on platforms: Windows,Linux,OSX,iOS,Android,HTML5
         */
        class Label extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
