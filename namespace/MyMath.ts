namespace MyMath {
	const PI : number = 3.14;

	function notAvailableOutSide() {

	}

	export function calculateCircumference(diameter : number) : number {
		notAvailableOutSide(); //It will work here but not outside of namespace
		return PI * diameter;
	}

	export function calculateRectangle(width : number, lenght : number) {
		return width * lenght;
	}
}

const PI = 2.15; //This value will not affect the namespce value
console.log(MyMath.calculateRectangle(25,25));
console.log(MyMath.calculateCircumference(2));
//console.log(MyMath.notAvailableOutSide()); //This will give error because it is not export