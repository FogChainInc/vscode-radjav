/// <reference path="RadJav.d.ts" />
/// <reference path="RadJav.Vector2.d.ts" />
/// <reference path="RadJav.Vector4.d.ts" />
declare namespace RadJav {
    /** @class RadJav.Rectangle
     * A basic rectangle.
     * @param {Number|RadJav.Vector2|RadJav.Vector4} [x=0] The x coordinate of the rectangle. Can also be a Vector2
     * representing the position of this rectangle. Lastly, it can also be a Vector4 representing the
     * rectangle's position and size.
     * @param {Number|RadJav.Vector2} [y=0] The y coordinate of the rectangle. Can also be a Vector2
     * representing the size of this rectangle.
     * @param {Number} [w=0] The width of this rectangle.
     * @param {Number} [h=0] The height of this rectangle.
     * @author Jason Ryan
     * @author Nathanael Coonrod
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Rectangle {
        constructor(x?: any, y?: number, w?: number, h?: number);
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
        /** @method setPosition
         * Set the position of this object.
         * @param {Number|RadJav.Vector2} x The x coordinate of this object, or the Vector2
         * representing the coordinates of this object.
         * @param {Number} [y=null] The y coordinate of this object.
         */
        setPosition(x: any, y?: number): void;
        /** @method getPosition
         * Get the position of this object.
         * @return {RadJav.Vector2} The Vector2 representing the position of this object.
         */
        getPosition(): Vector2;
        /** @method setSize
         * Set the size of this object.
         * @param {Number|RadJav.Vector2} w The width of this object, or the Vector2
         * representing the size of this object.
         * @param {Number} [h=null] The height of this object.
         */
        setSize(w: any, h?: number): void;
        /** @method getSize
         * Get the size of this object.
         * @return {RadJav.Vector2} The Vector2 representing the size of this object.
         */
        getSize(): Vector2;
        /** @method pointInside
         * Check if a point is inside this object.
         * @param {Number/RadJav.Vector2} x The x coordinate of the point, or the Vector2
         * representing the coordinates of the point to check.
         * @param {Number} [y=null] The y coordinate of the point.
         * @return {Boolean} Returns true if the point is inside the rectangle.
         */
        pointInside(x: any, y: Number): boolean;
        /** @method xInside
         * Check if a x coordinate is inside this rectangle.
         * @param {Number} x The x coordinate of the point to check.
         * @return {Boolean} Returns true if the x coordinate is inside the rectangle.
         */
        xInside(x: Number): boolean;
        /** @method yInside
         * Check if a y coordinate is inside this rectangle.
         * @param {Number} y The y coordinate of the point to check.
         * @return {Boolean} Returns true if the y coordinate is inside the rectangle.
         */
        yInside(y: Number): boolean;
    }
}
