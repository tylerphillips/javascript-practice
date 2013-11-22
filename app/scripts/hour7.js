// HOUR 7 OBJECT ORIENTED PROGRAMMING

// JavaScript has a built in object simply called 'Object'

// myNewObject = new Object();

// myNewObject.info = "I am a shiny new object";

// function myFunc(){
// 	alert(this.info);
// };

// myNewObject.showInfo = myFunc;

// // To call this method, you can simply use the now-familiar do notation:

// myNewObject.showInfo();

// USING THE this KEYWORD

// when used inside of a function, this refers to the function's parent object

// function Car(Color, Year, Make, Miles) {
// 	this.color = Color;
// 	this.year = Year;
// 	this.make = Make;
// 	this.odometerReading = Miles;
// 	this.setOdometer = function(newMiles) {
// 		this.odometerReading = newMiles;
// 	}
// }
// var car1 = new Car("blue", "1998", "Ford", 79500);
// var car2 = new Car("yellow", "2004", "Nissan", 56350);
// car1.setOdometer(82450);
 
function Pet() {
	this.animal = " ";
	this.name = " ";
	this.color = " ";
	this.setAnimal = function(newAnimal) {
		this.animal = newAnimal
	}
	this.setName = function(newName) {
		this.name = newName;
	}
	this.setColor = function(newColor) {
		this.color = newColor;
	}

}

// a Pet object has properties that contain 
// the type of animal and the name of the pet and methods to set these values
// added color property to object
var myCat = new Pet();
myCat.setAnimal = "cat";
myCat.setName = "Sylvester";
myCat.setColor = "orange";

var myDog = new Pet()
myDog.setAnimal = "dog";
myDog.setName = "Molly";
myDog.setColor = "blonde";

function Horse() {
	this.gender = " "
	this.setGender = function(newGender) {
		this.gender = newGender;
	}
}

//Inheritence
Horse.prototype = new Pet(); // inherits the properties and methods of Pet
var myHorse = new Horse();
myHorse.setName("Jack");
myHorse.setGender("male");
alert(myHorse.name + " is a " + myHorse.gender);

//Encapsulation
function Box(width, length, height) {
	function volume(a,b,c) {
		return a*b*c;
	}
	this.boxVolume = volume(width, length, height);
}
var crate = new Box(5,4,3);
alert("Volume = " + crate.boxVolume); // works correctly
// Creating an object literal.
 
// var myObject = {
//     sayHello: function() {
//         console.log( "hello" );
//     },
//     myName: "Rebecca"
// };
 
// myObject.sayHello(); // "hello"
 
// console.log( myObject.myName ); // "Rebecca"