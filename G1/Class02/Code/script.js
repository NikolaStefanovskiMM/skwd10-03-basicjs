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