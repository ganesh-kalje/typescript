"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function notAvailableOutSide() {
    }
    function calculateCircumference(diameter) {
        notAvailableOutSide(); //It will work here but not outside of namespace
        return PI * diameter;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectangle(width, lenght) {
        return width * lenght;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.15; //This value will not affect the namespce value
console.log(MyMath.calculateRectangle(25, 25));
console.log(MyMath.calculateCircumference(2));
//console.log(MyMath.notAvailableOutSide()); //This will give error because it is not export 
