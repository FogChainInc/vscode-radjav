/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.Textbox
         * @extends RadJav.GUI.GObject
         * A Textbox.
         * Available on platforms: Windows,Linux,OSX,iOS,Android,HTML5
         */
        class Textbox extends RadJav.GUI.GObject {
            static xmlTag: TagType;
            static InputModeText: number;
            static InputModeNumber: number;
            static InputModeDecimal: number;
            static InputModePhone: number;
            static InputModeEmail: number;
            static InputModePassword: number;
            constructor(obj?: any, text?: string, parent?: RadJav.GUI.GObject);
            /**
             * Set input mode.
             */
            setInputMode(mode: number): void;
            /**
             * Get input mode.
             */
            getInputMode(): number;
        }
    }
}
