// alert("Hello from HTML");
console.log("Hello from console!");

// Variables
console.log("--------VARIABLES--------");

//declaration
var trainer;

//initialization
trainer = "Pane";
console.log(trainer);

//100 lines later
trainer = "Petre";
console.log(trainer);

var assistant = "Aleksandar";
// assistant = 5;
console.log(assistant);


// undefined vs null
console.log("---------- undefind vs null -----------");

var testVar01;
console.log(testVar01);
// undefined - the variable does NOT have a value yet

// testVar01 = 1;
// console.log(testVar01);

var testVar02;
testVar02 = null;
console.log(testVar02);
// null - we deliberatly put null as a value


// naming convention types
// camel case: userInputNumber  -> we use this for variables in JS
// pascal case: UserInputNumber
// kebab-case: user-input-number

// equality in JS
console.log("--------- Equality in JS ------------");

// checks if sides are equal by value and type
console.log(5 === "5");

// checks if sides are equal only by value;
console.log(5 == "5");

console.log(4 !== 1);
console.log(4 != "4");

console.log(5 > 1);

//asignment operators
console.log("---------- Asignment operators ----------");
var a = 1;
var b = 5;
var c = a + b;
a += b; // a = a + b; - this is the same
console.log(c);
console.log(a);
console.log(b);

//Exercise 3

var feet = 97;
var feetToMeters = feet * 0.3048;
console.log(feet + " feet are equal to " + feetToMeters + " meters");

// this is a newer and fancy way
console.log(`${feet} feet are equal to ${feetToMeters} meters`); 

// Exercise 4
var sideA = 15;
var sideB = 6;
var area = sideA * sideB;
console.log("Rectangle are is: " + area + " m2.");

// Exercise 5
var radius = 10; 
var areaCircle = (radius * radius) * Math.PI;
console.log(`Circle surface are is: ${areaCircle}m2`);



