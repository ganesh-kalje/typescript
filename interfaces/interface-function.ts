interface SecondPerson {
	firstName : string;
	age : number;
	getName(name : string) : void;
} 

const person : SecondPerson = {
	firstName : "ganesh",
	age : 28,
	getName(lastName : string) : void {
		console.log(this.firstName+" "+lastName)
	}
}

//In class
class MyPerson implements SecondPerson {
	firstName: "ganesh";
	age: 28;
	lastNmae = "ka"; //It will work we can add more property and method but in interface methods shoudld be here
	getName(lastName : string) : void {
		console.log(this.firstName + " " + lastName);
	};	
}

let myPerson = new MyPerson();
console.log(myPerson.age);

//Interface as function types
interface doubleValFun {
	(number1 : number, number2 : number) : number
};

let myDoubleFunc : doubleValFun;
myDoubleFunc = function(value1 : number, value2 : number) {
	return (value1+value2)*2;
};


//interface inherientance
interface PersonA {
	firstName : string;
}

interface PersonB extends PersonA {
	lastName : string;
}

let newPerson : PersonB = {
	firstName : "X",
	lastName : "Y"
}