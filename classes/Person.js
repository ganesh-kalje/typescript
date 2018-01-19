"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, username) {
        this.username = username;
        this.age = 28;
        this.name = firstName;
    }
    Person.prototype.printAge = function () {
        this.setType("type");
        console.log(this.age); //print age
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type); //print type
    };
    return Person;
}());
var person = new Person("Ganesh", "ganesh");
console.log(person); // {name : "Ganesh", "username" : "ganesh"}
person.printAge();
// person.setType("type"); It will not work out side
var Ganesh = /** @class */ (function (_super) {
    __extends(Ganesh, _super);
    function Ganesh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ganesh";
        return _this;
    }
    return Ganesh;
}(Person));
var ganesh = new Ganesh("Mahesh", "ganesh");
console.log(ganesh); // {name : ganesh, username : ganesh}
//Static method and properties
var Helpers = /** @class */ (function () {
    function Helpers() {
        this.numberOfTall = 25;
    }
    Helpers.PI = 3.14;
    return Helpers;
}());
alert(Helpers.PI);
//abstract class
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
var nameTest = /** @class */ (function (_super) {
    __extends(nameTest, _super);
    function nameTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    nameTest.prototype.changeName = function () {
    };
    return nameTest;
}(Project));
//Singlto or private constructor readonly property
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
        this.testVar = "ganesh";
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The only one'); cannot create
var right = OnlyOne.getInstance();
//right.testVar = "mahesh"; It will not work because testVar readonlyh property
