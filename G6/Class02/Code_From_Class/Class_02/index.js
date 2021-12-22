// CONCATANATION
var message = "Hello" + " " + "SEDC" + " " + "WHATEVER WHATEVER WHATEVER";
// console.log(message);

var message1 = "Happy" + " " + 2022;
// console.log(typeof message1);
// console.log(message1);
var message2 = message + message1 + 100;
// console.log(message2);

// INTERPOLATION
var message3 = `${message} ${message1} ${100}`;
// console.log(message3);

var message4 = "Goce`s phone is broken";
var message5 = `Goce's phone is broken`;
// console.log(message5);

// SPECIAL NUMBERS

var result = "text" * 100;

// console.log(typeof result);
// console.log(result);

var res = 2 / "ASD";
// console.log("RESULT: ", res);
// console.log("IS RESULT EQUAL TO NAN:", res == NaN);
// console.log("IS RESULT EQUAL TO NAN STRICT:", res === NaN);
// console.log("USE BROWSER NAN: ", isNaN(res));

var stringNumber = "Lazen broj";
// isNaN(something) => checks if "something" is not a number (nothing more)
// console.log(isNaN(stringNumber));

// Number.isNan(something) => checks if something is of type number and the value is not a number => NaN
// console.log(Number.isNaN(result));

//INFINITY

var infin = 10 / 0;
console.log(infin);
console.log(typeof infin);

var minusInf = -10 / 0;
console.log(minusInf);

var a = Infinity;

var grade1 = 10;
var grade2 = 8;
var grade3 = 9;

var passed = 8;

var hasPassed = (grade1 + grade2 + grade3) / 3 >= passed;
console.log(hasPassed);

var score = 95;
// if (score < 50) {
//   alert("1");
// } else if (score < 70) {
//   alert("2");
// } else if (score < 80) {
//   alert("3");
// } else if (score < 90) {
//   alert("4");
// } else {
//   alert("5");
// }

// prompt => Ask input from user
var userInput1 = prompt("Please insert one number:");
// var userInput2 = prompt("Please enter second number: ");

console.log(userInput1);

// parseInt(something) => converst "something" to number (int)
// var result = parseInt(userInput1) + parseInt(userInput2);

// alert(`SUM OF THE TWO NUMBERS IS ${result}`);
