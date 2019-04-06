/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.TableViewController
         * @extends RadJav.MUI.ViewController
         * A mobile view.
         * Available on platforms: iOS,Android,HTML5
         */
        class TableViewController extends RadJav.MUI.ViewController {
            static xmlTag: TagType;
            constructor(obj?: any, text?: string, parent?: RadJav.MUI.ViewController);
        }
    }
}
