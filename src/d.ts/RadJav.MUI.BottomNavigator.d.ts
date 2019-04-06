/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.MUI.View.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.BottomNavigator
         * A mobile view tab control.
         * Available on platforms: iOS,Android,HTML5
         */
        class BottomNavigator {
            static xmlTag: TagType;
            /** @property {string} [type=""]
             * The type of object.
             */
            type: string;
            /** @property {RadJav.MUI.View} [type=""]
             * The root view object.
             */
            rootWin: RadJav.MUI.View;
            constructor(view?: RadJav.MUI.View);
            addTab(view: RadJav.MUI.View, replace?: boolean): void;
        }
    }
}
