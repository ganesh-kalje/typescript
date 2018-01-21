interface mainPerson {
	firstName : string;
}

function helloPerson(person : mainPerson) {
	//console.log("Hello ", person.firstName);
}

const person  = {
	firstName : "ganesh",
	age : 28
}
helloPerson(person);
//helloPerson({firstName : "tes", age : 27}); This will throw error. 
//object literal syntax stricly check with interface type
//to achive this we need to chagne in interface as following
interface secondPerson {
	firstName : string;
	age ?: number;
	[propName : string] : any; //In case we dont know property name or key
} 



/**
* Interface will not get compiled it is just for checking purpose
* If you see JS code of ts file you will not get any code of interface
* Interfaces are totaly ignored
*/