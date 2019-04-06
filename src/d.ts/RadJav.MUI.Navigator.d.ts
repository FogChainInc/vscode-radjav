/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Animation.d.ts" />
/// <reference path="RadJav.MUI.View.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.Navigator
         * A mobile view navigator.
         * Available on platforms: iOS,Android,HTML5
         */
        class Navigator extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            type: string;
            rootWin: RadJav.MUI.View;
            views: RadJav.MUI.View[];
            animation: RadJav.Animation;
            pushView: string;
            constructor(rootView: RadJav.MUI.View, obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            setAnimation(animation: RadJav.Animation): void;
            getAnimation(): RadJav.Animation;
            push(view: RadJav.MUI.View, replace?: boolean): void;
            pop(view?: RadJav.MUI.View): void;
        }
    }
}
