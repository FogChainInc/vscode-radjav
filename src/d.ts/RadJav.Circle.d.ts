/// <reference path="RadJav.d.ts" />
declare namespace RadJav {
    /** A basic circle.
     * @author Jason Ryan
     * Available on platforms: Windows,Linux,OSX,HTML5
     */
    class Circle {
        constructor(x: any, y: any, r: any);
        x: number;
        y: number;
        radius_squared: number;
        /** Returns true if the point provided is inside the circle.
         * @param {Number/RadJav.Vector2} x The x coordinate or Vector2 position.
         * @param {Number} [y=null] The y coordinate of the position.
         * @return {Boolean} Returns true if the point is inside the circle.
         */
        pointInside(x: number, y: number): boolean;
        /** @method dsqPointInside
         * Get the distance from the inside of the circle to a point.
         * @param {Number} distance_squared The distance away that would be considered inside the circle.
         * @return {Boolean} Returns true if the distance from the point is inside the circle.
         */
        dsqPointInside(distance_squared: Number): boolean;
    }
}
