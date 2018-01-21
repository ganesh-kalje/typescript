"use strict";
function returnMyName() {
    var myName = "Ganesh";
    return myName;
}
;
function sayHello() {
    console.log("Hello");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 25));
//console.log(multiply(5,"g")); Gives error
//Function as types
/**
    let myMultiply;
    myMultiply = sayHello;
    myMultiply(); //return or call multiply function
    myMultiply = multiply;
    myMultiply(25, 25);
*/
/**
* myMultiply varible assign function
* but myMultiply variable should only one kind of function
* myMultiple(25,25)
**/
var myMultiply;
//let myMultiply : (a : number, b : number) => number;
myMultiply = multiply;
multipsly(25, 25);
//myMultiply = sayHello; This will give error because it is not defined type 
//Object
var user = {
    name: "max",
    age: 27
};
//Property name should be same in object and type
//Complex object
var complexObject = {
    data: [100, 36, 35],
    outPut: function (all) {
        return this.data;
    }
};
var complexObject2 = {
    data: [100, 36, 35],
    outPut: function (all) {
        return this.data;
    }
};
//Union types
var unionValue = 25;
unionValue = "ganesh";
//nullble 
var numberOne = 25;
//numberOne =  null; // can assigne null typescript will not give error
//Need to set flagi strictNullable to true in tsConfig file
numberOne = null;
