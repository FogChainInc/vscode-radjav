/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.TableCellModel
         * @extends RadJav.GUI.GObject
         * A mobile view controller.
         * Available on platforms: iOS,Android,HTML5
         */
        class TableCellModel extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
