console.log("script connected");

//difference between var and let
console.log(x);
var x = 5;
console.log(x);

// console.log(x);
// let x = 5;
// console.log(x);

// strings
console.log("Hello" + " " + "from SEDC");
var firstPart = "Hello";
console.log(firstPart + " from SEDC");
var secondPart = " from SEDC";
console.log(firstPart + "\n" + secondPart);

var a = 5;
console.log(firstPart + 10);
console.log(a);
console.log(firstPart + a);
console.log(typeof a);

console.log("printing '2' + 4");
// console.log('printing '2' + 4'); <-- this is not a good syntax
console.log('2' + 4);

var userName = "Bob";
console.log('Hello ' + userName + ', welcome to our page');
console.log(`Hello ${userName}, welcome to our page`);
console.log(`just quotes`);

// null & undefined
var b;
console.log(b);
console.log(typeof b);
var c = null;
console.log(c);
console.log(typeof c);

// NaN
console.log(2 + "test"); // <-- this is converted to string
console.log(2 - '2'); // <-- this is converted to number, and all the other math operations like /, *, %
console.log(2 - true); // <-- when true is converted to a number, it returns 1
console.log(2 * false); // <-- when false is converted to a number, it returns 0
console.log(2 - "test"); // <-- this can't be converted, so it returns NaN
var result = 3/'test';
console.log(result);
console.log(typeof result);

console.log(NaN == NaN); // <-- returns false
console.log(NaN === NaN); // <-- returns false
console.log('check if NaN is NaN ' + isNaN(result));
console.log('check if string is NaN ' + isNaN("text"));
console.log('check if string number is NaN ' + isNaN("2"));
console.log('check if boolean is NaN '+ isNaN(true));
console.log('check if number is NaN ' + isNaN(2));

console.log('check if NaN is Number.isNaN ' + Number.isNaN(result));

// infinity
var positiveInfinity = 1/0;
console.log("positive infinity " + positiveInfinity);
var negativeInfinity = -1/0;
console.log("negative infinity " + negativeInfinity);
var anotherInfinity = -1/-0;
console.log("positive infinity " + anotherInfinity);
console.log(Number.POSITIVE_INFINITY);

// logical operators
console.log("true && true:");
console.log(true && true);
console.log("true && false:");
console.log(true && false);
console.log("false && false:");
console.log(false && false);

console.log("true || true:");
console.log(true || true);
console.log("true || false:");
console.log(true || false);
console.log("false || false:");
console.log(false || false);

console.log("!false");
console.log(!false);
console.log("!true");
console.log(!true);

console.log("'first value' && 'second value'");
console.log('first value' && 'second value');
console.log("24 && 12");
console.log(24 && 12);
console.log("24 && false");
console.log(24 && false);

console.log("24 || 12");
console.log(24 || 12);
console.log("false || 12");
console.log(false || 12);

var minimum = 50;
var points = 62;
var hasPassed = points >= minimum;
console.log(`the student has passed: ${hasPassed}`);
console.log((5 + 2) != (4 + 3));
console.log((points - 12) > minimum);
console.log((4 >= 2) && (5 != 5));
console.log(null && false);
console.log("!'string value': " + !'test')

// inequality
var test1 = "42";
var test2 = "43";
var test3 = "test";
console.log(test1 > test2);
console.log(test1 > test3);
console.log(test1 < test3);
console.log(test1 == test3);

// if 
if (4 > 2) {
    console.log("we are in the if");
}

var num = 5;
if (num > 3) num++;
//num > 3 && num++; <-- this is the same command
console.log(num);

var bingoPoints = 100;
if (bingoPoints > 100) {
    console.log("You won!")
} else if (bingoPoints === 100) {
    console.log("You are so close");
} else {
   console.log("Better luck next time");
}

var loggedIn = false;
if (loggedIn) {
    console.log("Welcome to our page");
} else {
    console.log("Please log in");
}

// prompt
//var userInput = prompt();
var userInput = prompt("Please enter your budget:");
console.log(userInput);
//console.log(parseInt(userInput)); 
console.log(parseFloat(userInput));