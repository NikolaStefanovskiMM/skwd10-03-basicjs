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