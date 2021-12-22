console.log("script connected");

// inner function example
function test () {
    var testVariable = 5;
    console.log("test function is executed");
    function test2 () {
        console.log("test 2 function is executed");
    }
    test2();
    return testVariable;
    console.log("teat");
}
test();
console.log(test());
//console.log(testVariable); // <-- this is not in the scope
//test2(); // <-- this is not in the scope

// arrays
let days = ['Ponedelnik', 'Vtornik', 'Sreda'];
console.log(days);
console.log(typeof days);
let emptyArray = [];
console.log(emptyArray);
let mixedArray = [1, null, "text", true];
console.log(mixedArray);
let bigArray = ["test1", 
    "test2",
    "test3",
    "test4",
    "test5"];
console.log(bigArray);
console.log(bigArray[0]);
console.log(bigArray[6]);
console.log(bigArray[2]);
bigArray[2] = "test3 updated";
console.log(bigArray);
console.log(bigArray.length);
var itemNumber = 3;
console.log(bigArray[bigArray.length - 1]);
console.log(bigArray[itemNumber]);
bigArray[bigArray.length] = "test6";
console.log(bigArray);
console.log(bigArray.push("test7", "test8", "test9"));
console.log(bigArray);
console.log(bigArray.unshift(-1, "test0"));
console.log(bigArray);
console.log("this item was removed " + bigArray.pop());
console.log(bigArray);
console.log("this item was removed " + bigArray.shift());
console.log(bigArray);

// loops
var x = 0;
while(x < 10) {
    console.log("in the while " + x);
    document.write(x + "<br>");
    x = ++x; // <-- if we never increase x, it will be an infinite loop
}
console.log("outside the while " + x);

var counter = 0;
console.log("printing the values from an array");
while(counter <= bigArray.length - 1) { // <-- same as counter < bigArray.length
    console.log(bigArray[counter]);
    counter++;
}

// max item in array example
var max = 0;
var numArray = [2,15, 56,77,23,44,75, 22, 12,5];
var counter = 0;
while(counter < numArray.length) {
    if (numArray[counter] > max) {
        max = numArray[counter];
    }
    counter++;
}
console.log("this is the largest number in the array " + max);

// calculate sum example
let result = 1;
let i = 101;
while(i <= 150){
    result *= Math.pow(i, 2);
    i++;
}
console.log(result);

// print the digits in a number example
var userInput = 456;//parseInt(prompt("Please enter a number"));
var digits = [];
while(userInput) {
    var digit = userInput % 10;
    digits.unshift(digit);
    userInput = parseInt(userInput / 10);
}
console.log(digits);
