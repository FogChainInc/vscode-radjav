/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.Label
         * @extends RadJav.GUI.GObject
         * A mobile label.
         * Available on platforms: iOS,Android,HTML5
         */
        class Label extends RadJav.GUI.GObject {
            static xmlTag: RadJav.TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
