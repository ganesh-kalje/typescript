"use strict";
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, lenght) {
        return width * lenght;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
