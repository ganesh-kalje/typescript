
function returnMyName() : string {
	let myName = "Ganesh";
	return myName;
};

function sayHello : void {
	console.log("Hello")
}

function multiply(value1 : string, value2 : string) : number {
	return value1 * value2;
}
console.log(multiply(5,25));
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

let myMultiply : (value1 : number, value2 : number) => number;
//let myMultiply : (a : number, b : number) => number;
myMultiply = multiply;
multipsly(25,25);
//myMultiply = sayHello; This will give error because it is not defined type 


//Object
let user : {name : string , age : number} = {
	name : "max",
	age : 27
}
//Property name should be same in object and type


//Complex object
let complexObject : {data : number[], outPut : (all : boolean) => number[]} = {
	data : [100,36,35],
	outPut : function(all : boolean) : number[] {
		return this.data;
	}
}

//Custom types
type complexObj = {data : number[], outPut : (all : boolean) => number[]};

let complexObject2 : complexObj = {
	data : [100,36,35],
	outPut : function(all : boolean) : number[] {
		return this.data;
	}
}


//Union types
let unionValue : string | number = 25;
unionValue = "ganesh";

//nullble 
let numberOne : number | null = 25;
//numberOne =  null; // can assigne null typescript will not give error
//Need to set flagi strictNullable to true in tsConfig file
numberOne = null;

