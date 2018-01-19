class Person {
    public name : any;
    private age: number = 28;
    protected type : string;

    constructor(firstName : string, public username : string) {
        this.name = firstName;
    }

    printAge() {
        this.setType("type");
        console.log(this.age); //print age
    }

    private setType(type : string) {
        this.type = type;
        console.log(this.type); //print type
    }
}

const person = new Person("Ganesh", "ganesh");
console.log(person); // {name : "Ganesh", "username" : "ganesh"}
person.printAge();

// person.setType("type"); It will not work out side
class Ganesh extends Person {name: string = "ganesh";}

const ganesh = new Ganesh("Mahesh", "ganesh");
console.log(ganesh); // {name : ganesh, username : ganesh}


//Static method and properties
class Helpers {
    static PI: number = 3.14;
    private numberOfTall = 25;
}
alert(Helpers.PI)

//abstract class
abstract class Project {
    abstract changeName() :void;
}

class nameTest extends Project {
    changeName() {

    }
}

//Singlto or private constructor readonly property
class OnlyOne {
    private static instance: OnlyOne;
    public readonly testVar: string = "ganesh"
    private constructor(public name: string) {
        
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The only one'); cannot create
let right = OnlyOne.getInstance();
//right.testVar = "mahesh"; It will not work because testVar readonlyh property

