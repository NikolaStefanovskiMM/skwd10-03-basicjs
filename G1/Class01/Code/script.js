//alert("Hello");

// declaration and initialization
console.log(number1);
var number1;
console.log(number1);
number1 = 5;
console.log(number1);

var firstName = "Andrea";
console.log(firstName); //FirstName is not defined <-- case sensitive
//debugger;

// local and global declaration
var name = "testing Name";
function test() {
    var name = "Andrea";
    console.log(name);
}
test();
console.log(name);

// nulls
var nullExample;
console.log(nullExample);
console.log(typeof nullExample);
nullExample = null;
console.log(nullExample);
console.log(typeof nullExample);

console.log(null === undefined);
console.log(null == undefined);
console.log(null === undefined);

// primitive values
console.log(typeof 5.5);
console.log("hello\nfrom\nSEDC");
var isActive = true;
console.log("is Active " + isActive);

// single line comment
/*this 
is 
multiple
line
comment*/

// operations
var breakTest;
var a = 15;
var b = 4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
var sum = a + b;
console.log(sum);
console.log(a + 1);
console.log(a++); // <-- a is not incremented at this point, use ++a if you want to increment a at this point
console.log(a);

// comparison
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(5 >= 5);
var isEqual = 5 == 5;
console.log("check if 5 is equal to 5 " + isEqual);
var isNotEqual = 6 != 5;
console.log("check if 6 is not equal to 5 " + isNotEqual);
var isNotEqual = 5 != 5;
console.log("check if 5 is not equal to 5 " + isNotEqual);

console.log("check if 5 is not equal to 5 " + (5!=5).toString());

// assignment operators
var x = 5;
var y = 2;
x += y;
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);
x %= y;
console.log(x);

// Feet in meters example
var feetInMeters = 0.3048;
var feet = 70;
var result = feet * feetInMeters;
console.log(result);

// area example
var a = 5; // prompt("Enter a side value as a number");
console.log(a);
var b = 4; // prompt("Enter b side value as a number");
console.log(b);
var area = a*b;
console.log("This is the area " + area);

// area of a circle
var pi = 3.14;
var radius = 5;
var area = pi * radius * radius;
console.log("This is the area of a circle " + area);
