/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.KeyEvent
        * A GUI key event.
        * @param {String} [key=""] The key that was pressed.
        * Available on platforms: Windows,Linux,OSX,HTML5
        */
        class KeyEvent {
            constructor(key: string);
            key: string;
        }
    }
}
