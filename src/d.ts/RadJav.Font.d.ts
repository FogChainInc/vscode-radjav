/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Color.d.ts" />
declare namespace RadJav {
    /** The font class.
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Font {
        constructor(obj?: any);
        /** The font family used.
         * @default "Open Sans"
         */
        fontFamily: String;
        /** The font size.
         * @default 10
         */
        size: Number;
        /** The font color.
         * @default RadJav.Color.Black
         */
        color: Color;
        /** Whether or not this font is underlined.
         * @default false
         */
        underline: boolean;
        /** Whether or not this font is bold.
         * @default false
         */
        bold: boolean;
        /** Whether or not this font is italic.
         * @default false
         */
        italic: boolean;
    }
}
