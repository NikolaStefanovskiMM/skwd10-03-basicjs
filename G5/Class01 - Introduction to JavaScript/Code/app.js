// JavaScript Basic Concepts
// Declaration & Initialization

let simpleVariable;
let number = 10;

console.log(simpleVariable);
console.log(number);

simpleVariable = "Tom";
console.log(simpleVariable);

let firstName = "George";
let second_name = "Dimitrov";

// function TestFunction(){
//     let firstNumber = 100;
//     console.log("Inside:" + firstNumber);
// }
// TestFunction();
// console.log(firstNumber);

console.log("---Primitive Data Types----");

console.log("Jack"); // String
console.log("250"); // String
console.log(100); // Number
console.log(25); // Number
console.log(true); // Boolean
console.log(false); // Boolean


let someName = "Jack";
let someNumber = 12.10;
let someBool = true;
let someNull = null;
let someUndefined;

console.log(typeof someName);
console.log(typeof someNumber);
console.log(typeof someBool);
console.log(typeof someNull);
console.log(typeof someUndefined);

let secondTypeofString = 'Jon';
let multiString = "Academy \n SEDC";
console.log(multiString);

/* Multi line comment
this is cool.
Cool comment.
*/

// We cannot use reserved keywords
// let new = 100;

// Operators in JavaScript
console.log("------- Operators ------")

let a = 21;
let b = 5;

let additionResult = a + b;
console.log(additionResult);

let substractionResult = a - b;
console.log(substractionResult);

let multiplication = a * b;
console.log(multiplication);

let division = a / b;
console.log(division);

let modulusResult = a % b;
console.log(modulusResult);

let incrementationRes = ++additionResult;
console.log(incrementationRes);

let decrementRes = --substractionResult;
console.log(decrementRes);

let someVariable = 10;
console.log(++someVariable);

let expoResult = a ** b;
console.log(expoResult);

let complexResult = (substractionResult + 10) ** 2;
console.log("Result: " + complexResult);


// Comparison Operators 
console.log("-------Comparison Operators------");

let x = 50;
let y = 100;

console.log(x < y); // true
console.log(x >= y); // false
console.log(x == y); // false
console.log(y === x); // false
console.log(y != x); // true
console.log("----------");
console.log(10 == '10');
console.log(10 === '10');

// 
console.log("-------- Assignment Operators --------");
let z = 3;
let xy = 19;

console.log(x);
console.log(x += z); // same as x = x + z
console.log(x);

console.log(xy /= z); // same as xy = xy / z
console.log(xy);


// Exercise 3 part1
console.log("-------Exercise 3----------");

let feetsLenght = 150;
let conversionRateToMeters = 0.3048;

let resultOfConversion = feetsLenght * conversionRateToMeters;
console.log("Result is:" + resultOfConversion);