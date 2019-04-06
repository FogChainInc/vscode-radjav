/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.View
         * @extends RadJav.GUI.GObject
         * A mobile view.
         * Available on platforms: iOS,Android,HTML5
         */
        class View extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            createMainView(): Promise<RadJav.GUI.GObject>;
        }
    }
}
