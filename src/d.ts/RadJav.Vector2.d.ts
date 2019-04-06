/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Vector2
     * A Vector2 class.
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Vector2 {
        constructor(x?: number | Vector2, y?: number);
        /** @property {number} [x=0]
         * The X component.
         */
        x: number;
        /** @property {number} [y=0]
         * The X component.
         */
        y: number;
        /** @method tostring
         * Convert this object to a string.
         * @return {string} The string representing this object.
         */
        tostring(): string;
        /** @method setX
         * Set the X component of this object.
         * @param {number} n The new X component of this object.
         */
        setX(n: number): void;
        /** @method setY
         * Set the X component of this object.
         * @param {number} n The new X component of this object.
         */
        setY(n: number): void;
        /** @method set
         * Set the X,Y component of this object.
         * @param {number} x The new X component of this object.
         * @param {number} y The new Y component of this object.
         */
        set(x: number, y: number): void;
        /** @method add
         * Add X and Y values to the X and Y components of this object.
         * @param {number} x The X component to add.
         * @param {number} y The Y component to add.
         */
        add(x: number, y: number): void;
        /** @method sub
         * Subtract X and Y values from the X and Y components of this object.
         * @param {number} x The X component to subtract.
         * @param {number} y The Y component to subtract.
         */
        sub(subVector2: Vector2): void;
        /** @method mult
         * Multiply X and Y values to the X and Y components of this object.
         * @param {number} x The X component to subtract.
         * @param {number} y The Y component to subtract.
         */
        mult(n: number): void;
        /** @method divide
         * Divide this object by another Vector2 object or number.
         * @param {RadJav.Vector2|number} vector2 The Vector2 or number to divide by.
         */
        divide(vector2: number | Vector2): Vector2;
        /** @method dot
         * Perform a dot product on this object.
         * @param {RadJav.Vector2} dotVector2 The Vector2 to perform the dot product.
         * @return {number} The result of the dot product.
         */
        dot(dotVector2: Vector2): number;
        /** @method length
         * Get the length of this object using a square root. This will use Math.sqrt.
         * @return {number} The length of this object.
         */
        length(): number;
        /** @method normalize
         * Normalize this object, this will use this object's length method.
         * @return {number} The normalized length of this object.
         */
        normalize(): Vector2;
        lerp(start: Vector2, end: Vector2, time: number): Vector2;
        /** @method parseVector2
        * @static
        * Parse a Vector2 string and create a Vector2 object from it.
        * @param {string} str The string to parse.
        * @return {RadJav.Vector2} The new Vector2 created from this string.
        */
        static parseVector2(str: string): Vector2;
    }
}
