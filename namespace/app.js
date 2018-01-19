"use strict";
//This will import file in app.ts. import {} this is es6 feathure
//but typescript have its own sytax to import files
/// <reference path="circleMath.ts" />
/// <reference path="recatangleMath.ts" />
//Still we want to compile this with tsc --outFile app.js
//import CircleMath = MyMath.Circle;
console.log(MyMath.calculateRectangle(25, 25));
console.log(MyMath.calculateCircumference(2));
//console.log(CircleMath.calculateCircumference(2));
//If we want to avoid reference path="circleMath.ts" import then we will work with console with following command
//To bundle recangleMath.ts and circleMath.ts into one file we need to run
//typescript command tsc --outFile app.js circleMath.ts recatangleMath.ts app.ts 
