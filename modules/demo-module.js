"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
var Circle = require("./circle");
var rectangle_1 = require("./rectangle"); //We can use user defined name 'calc' here, for this we need to add 'export default'
/**
 * Core javascript not support any kind of file load.
 * ES6 is have feature to load file load but all browser is  not support ES6
 * loader module => It just javascript lib, added extension to load files
 * For achiving this we need to use loader module, like SystemJs
 * We include SystemJs in demo-module.html, Please see configuration
 * Need to setup config in
 */
console.log(circle_1.PI);
console.log(Circle.calculateCircumference(1));
console.log(rectangle_1["default"]);
