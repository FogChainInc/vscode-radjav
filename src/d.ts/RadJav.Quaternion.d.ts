/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Quaternion
     * A Quaternion class.
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Quaternion {
        constructor(w: Number, x: Number, y: Number, z: Number);
        /** @property {Number} [w=1]
         * The W component.
         */
        w: Number;
        /** @property {Number} [x=0]
         * The X component.
         */
        x: Number;
        /** @property {Number} [y=0]
         * The Y component.
         */
        y: Number;
        /** @property {Number} [z=0]
         * The Z component.
         */
        z: Number;
    }
}
