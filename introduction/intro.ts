let myName : string = "MyName";

let myAge : number = 25;

let hasHobbies : boolean = true;

let myRealAge : any;
myRealAge = 27;
myRealAge = '27';

//Arrays
let hobbies : any[] = ["cooking", "sport", "reading"];
hobbies[100];

/*let hobbies = ["cooking", "sport", "reading"];
hobbies[100]; //It will give error because typescript consider hobbies as string array*/


//Tuples type New in typescript
let address : [string, number]= ["Pune", 412105];

//Enum type New in typescript
enum Color {
	Gray, //0
	Green, //1
	Blue  //2
};

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
let newName : any = 100;
newName = "ganesh";