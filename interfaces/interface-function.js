var person = {
    firstName: "ganesh",
    age: 28,
    getName: function (lastName) {
        console.log(this.firstName + " " + lastName);
    }
};
//In class
var MyPerson = /** @class */ (function () {
    function MyPerson() {
        this.lastNmae = "ka"; //It will work we can add more property and method but in interface methods shoudld be here
    }
    MyPerson.prototype.getName = function (lastName) {
        console.log(this.firstName + " " + lastName);
    };
    ;
    return MyPerson;
}());
var myPerson = new MyPerson();
console.log(myPerson.age);
;
var myDoubleFunc;
myDoubleFunc = function (value1, value2) {
    return (value1 + value2) * 2;
};
var newPerson = {
    firstName: "X",
    lastName: "Y"
};
