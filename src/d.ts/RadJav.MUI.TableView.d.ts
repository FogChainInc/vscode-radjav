/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.TableView
         * @extends RadJav.MUI.View
         * A mobile TableView.
         * Available on platforms: iOS,Android,HTML5
         */
        class TableView extends RadJav.MUI.View {
            static xmlTag: RadJav.TagType;
            static InputModeText: number;
            static InputModeNumber: number;
            static InputModeDecimal: number;
            static InputModePhone: number;
            static InputModeEmail: number;
            static InputModePassword: number;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
        }
    }
}
