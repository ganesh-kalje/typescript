"use strict";
var MyMath;
(function (MyMath) {
    /*export namespace Circle	 { //Try to avoid this kind of export, Keep it simple
        const PI : number = 3.14;
        export function calculateCircumference(diameter : number) : number {
            return PI * diameter;
        }
    }*/
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
