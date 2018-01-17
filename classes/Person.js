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
    function Person(name, username) {
        this.username = username;
        this.age = 28;
        this.name = name;
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
