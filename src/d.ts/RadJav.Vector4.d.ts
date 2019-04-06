/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Vector4
    * A Vector4 class.
    * Available on platforms: Windows,Linux,OSX,HTML5
    */
    class Vector4 {
        constructor(x?: number | RadJav.Vector2 | RadJav.Vector3 | RadJav.Vector4, y?: number, z?: number, w?: number);
        /** @property {number} [x=0]
        * The X component.
        */
        x: number;
        /** @property {number} [y=0]
        * The Y component.
        */
        y: number;
        /** @property {number} [z=0]
        * The Z component.
        */
        z: number;
        /** @property {number} [w=0]
        * The W component.
        */
        w: number;
        /** @method tostring
        * Convert this object to a string.
        * @return {string} The string representing this object.
        */
        tostring(): string;
        lerp(start: Vector4, end: Vector4, time: number): Vector4;
    }
}
declare function parseVector4(string: string): RadJav.Vector4;
