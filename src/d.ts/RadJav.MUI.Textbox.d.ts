/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace MUI {
        /** @class RadJav.MUI.Textbox
         * @extends RadJav.GUI.GObject
         * A mobile textbox.
         * Available on platforms: iOS,Android,HTML5
         */
        class Textbox extends RadJav.GUI.GObject {
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
