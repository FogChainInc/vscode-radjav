/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.Image
         * @extends RadJav.GUI.GObject
         * A mobile image.
         * Available on platforms: iOS,Android,HTML5
         */
        class Image extends RadJav.GUI.GObject {
            static xmlTag: RadJav.TagType;
            static ScaleModeAspectFit: number;
            static ScaleModeAspectFill: number;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
