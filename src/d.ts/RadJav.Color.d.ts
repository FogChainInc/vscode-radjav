/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Color
     * Represents a color.
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Color {
        constructor(r?: number | {
            r: 0;
            g: 0;
            b: 0;
            a: 1;
        }, g?: number, b?: number, a?: number);
        /** @property {Number} [r=0]
         * Red, between 0 and 1.
         */
        r: number;
        /** @property {Number} [g=0]
         * Green, between 0 and 1.
         */
        g: number;
        /** @property {Number} [b=0]
         * Blue, between 0 and 1.
         */
        b: number;
        /** @property {Number} [a=0]
         * Alpha, between 0 and 1.
         */
        a: number;
        /** @method toHex
         * Return this color as a hex string.
         * @return {String} The hex string representing the color.
         */
        toHex(): string;
        /** @method toHTMLColor
         * Return this color as a HTML color string.
         * @return {String} The html string representing the color.
         */
        toHTMLColor(): String;
        /** @method toHexInt
         * Return this color as a hex color integer.
         * @return {Number} The hex integer representing the color.
         */
        toHexInt(): Number;
        static Black: Color;
        static White: Color;
        static Red: Color;
        static Green: Color;
        static Blue: Color;
    }
}
/**
 * Parse a color string.
 * @param {String} str The color string to parse.
 * @return {RadJav.Color} The color.
 */
declare function parseColor(str: string): RadJav.Color;
