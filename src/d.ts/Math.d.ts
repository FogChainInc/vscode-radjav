/** @class Math
* The math class.
*/
interface Math {
    inv180: number;
    invPI: number;
    map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;
    sinh(arg: number): number;
    cosh(arg: number): number;
    tanh(arg: number): number;
    log10(arg: number): number;
    clamp(x: number, a: number, b: number): number;
    degreesToRadians(degrees: number): number;
    radiansToDegrees(radians: number): number;
    randomRange(min: number, max: number): number;
    lerp(start: number, end: number, time: number): number;
}
