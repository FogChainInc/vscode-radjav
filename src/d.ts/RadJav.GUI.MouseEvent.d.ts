/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    namespace GUI {
        /** @class RadJav.GUI.MouseEvent
        * A GUI mouse event.
        * @param {Number} [x=0] The x position of the mouse.
        * @param {Number} [y=0] The y position of the mouse.
        * Available on platforms: Windows,Linux,OSX,HTML5
        */
        class MouseEvent {
            constructor(x?: number, y?: number);
            x: number;
            y: number;
        }
    }
}
