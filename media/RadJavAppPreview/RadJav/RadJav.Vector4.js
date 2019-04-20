var RadJav;
(function (RadJav) {
    var Vector4 = (function () {
        function Vector4(x, y, z, w) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            if (w === void 0) { w = 0; }
            if (x instanceof RadJav.Vector2) {
                var temp = x;
                x = temp.x;
                y = temp.y;
            }
            if (x instanceof RadJav.Vector3) {
                var temp_1 = x;
                x = temp_1.x;
                y = temp_1.y;
                z = temp_1.z;
            }
            if (x instanceof RadJav.Vector4) {
                var temp_2 = x;
                x = temp_2.x;
                y = temp_2.y;
                z = temp_2.z;
                w = temp_2.w;
            }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Vector4.prototype.tostring = function () {
            return this.x + "," + this.y + "," + this.z + "," + this.w;
        };
        Vector4.prototype.lerp = function (start, end, time) {
            var result = new Vector4();
            result.x = Math.lerp(start.x, end.x, time);
            result.y = Math.lerp(start.y, end.y, time);
            result.z = Math.lerp(start.z, end.z, time);
            return (result);
        };
        return Vector4;
    }());
    RadJav.Vector4 = Vector4;
})(RadJav || (RadJav = {}));
function parseVector4(string) {
    var v4dReturn = new RadJav.Vector4();
    if (string == "")
        return v4dReturn;
    string = string.toLowerCase();
    string = string.replace(/ /g, "");
    var arystrings = string.split(",");
    v4dReturn.x = parseFloat(arystrings[0]);
    v4dReturn.y = parseFloat(arystrings[1]);
    v4dReturn.z = parseFloat(arystrings[2]);
    v4dReturn.w = parseFloat(arystrings[3]);
    return v4dReturn;
}
//# sourceMappingURL=RadJav.Vector4.js.map