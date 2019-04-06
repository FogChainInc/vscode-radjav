/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Vector3
    * A Vector3 class.
    * Available on platforms: Windows,Linux,OSX,HTML5
    */
    class Vector3 {
        constructor(x?: number | RadJav.Vector2 | RadJav.Vector3, y?: number, z?: number);
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
        /** @method tostring
        * Convert this object to a string.
        * @return {string} The string representing this object.
        */
        tostring(): string;
        /** @method add
        * Add x,y,z values to the x,y,z components of this object.
        * @param {number} x The X component to add.
        * @param {number} y The Y component to add.
        * @param {number} z The Z component to add.
        */
        add(vector3: Vector3 | number): Vector3;
        /** @method sub
        * Subtract X and Y values from the X and Y components of this object.
        * @param {number} x The X component to subtract.
        * @param {number} y The Y component to subtract.
        * @param {number} z The Z component to subtract.
        */
        subtract(vector3: Vector3 | number): Vector3;
        /** @method multiply
        * Multiply x,y,z values to the x,y,z components of this object.
        * @param {number} x The X component to subtract.
        * @param {number} y The Y component to subtract.
        * @param {number} z The Z component to subtract.
        */
        multiply(vector3: Vector3 | number): Vector3;
        /** @method divide
        * Divide this object by another Vector3 object or number.
        * @param {RadJav.Vector3 | number} Vector3 The Vector3 or number to divide by.
        */
        divide(vector3: Vector3 | number): Vector3;
        /** @method dot
        * Perform a dot product on this object.
        * @param {RadJav.Vector3} vector3 The Vector3 to perform the dot product.
        * @return {number} The result of the dot product.
        */
        dot(vector3: Vector3): number;
        /** @method cross
        * Perform a cross product on this object.
        * @param {RadJav.Vector3} vector3 The Vector3 to perform the dot product.
        * @return {number} The result of the dot product.
        */
        cross(vector3: Vector3): Vector3;
        /** @method length
        * Get the length of this object using a square root. This will use Math.sqrt.
        * @return {number} The length of this object.
        */
        length(): number;
        /** @method normalize
        * Normalize this object, this will use this object's length method.
        * @return {number} The normalized length of this object.
        */
        normalize(): Vector3;
        /** @method squaredLength
        * Normalize this object, this will use this object's length method.
        * @return {number} The normalized length of this object.
        */
        squaredLength(): number;
        /** @method absDotProduct
        * Get the dot product as an absolute value.
        * @param {RadJav.Vector3} vector3 The Vector3 to perform the dot product.
        * @return {number} The absolute value of the dot product.
        */
        absDotProduct(vector3: Vector3): number;
        /** @method angleBetween
        * Get the angle between two vectors.
        * @param {RadJav.Vector3} vector3 The Vector3 to get the angle from.
        * @return {number} The angle.
        */
        angleBetween(vector3: Vector3): number;
        /** @method distance
        * Get the distance between two vectors.
        * @param {RadJav.Vector3} vector3 The Vector3 to get the distance from.
        * @return {number} The distance.
        */
        distance(vector3: Vector3): number;
        static lerp(start: Vector3, end: Vector3, alpha: number): Vector3;
    }
}
