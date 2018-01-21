"use strict";
var myName = "MyName";
var myAge = 25;
var hasHobbies = true;
var myRealAge;
myRealAge = 27;
myRealAge = '27';
//Arrays
var hobbies = ["cooking", "sport", "reading"];
hobbies[100];
/*let hobbies = ["cooking", "sport", "reading"];
hobbies[100]; //It will give error because typescript consider hobbies as string array*/
//Tuples type New in typescript
var address = ["Pune", 412105];
//Enum type New in typescript
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
;
/*let myColor: Color = Color.Blue;
console.log(myColor); //IT will print 2

enum Color {
    Gray, //0
    Green, //1
    Blue = 100//100
};

let myColor: Color = Color.Blue;
console.log(myColor); //IT will print 100
*/
//any types
var newName = 100;
newName = "ganesh";
