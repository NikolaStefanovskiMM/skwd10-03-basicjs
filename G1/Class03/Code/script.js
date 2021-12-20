console.log("script connected");

// example what day is it
//var userInput = prompt("Please enter a number between 1 and 7");
var userInput = 2;
var day = parseInt(userInput);

switch(day) {
    case 1:
        console.log("You have class today");
        break;
    case 2:
        console.log("You are free");
        break;
    case 3:
        console.log("You have class today");
        break;
    case 4:
        console.log("You are free");
        break;
    case 5:
        console.log("It's FRIDAY!");
        break;     
    case 6:
        console.log("You have class today");
        break;
    case 7:
        console.log("RELAX");
        break;
    default:
        console.log("Please enter a valid number between 1 and 7");
        break;
}

// switch example with logical operators
//var userMoney = prompt("Please enter your budget:");
var userMoney = 60;
var fridayCash = parseInt(userMoney);
switch(true) {
    case fridayCash >= 50: // 60 === (60 >= 50) => 60 === true
        console.log("You should go out to a dinner and a movie");
        break;
    case fridayCash >= 35:
        console.log("You should go out to a fine meal");
        break;
    case fridayCash >= 12:
        console.log("You should go see a movie");
        break;
    default:
        console.log("Looks like you'll be watching TV");
        break;
}
// this is not a good example to use switch

// example what day is it refactored
//var userInput = prompt("Please enter a number between 1 and 7");
var userInput = 2;
var day = parseInt(userInput);

switch(day) {
    case 1:
    case 3:
    case 6:
        console.log("You have class today");
        break;
    case 2:
    case 4:
        console.log("You are free");
        break;
    case 5:
        console.log("It's FRIDAY!");
        break;
    case 7:
        console.log("RELAX");
        break;
    default:
        console.log("Please enter a valid number between 1 and 7");
        break;
}

// functions
function hello() {
    console.log("hello from SEDC");
}

hello();
hello();
hello();

// functions with arguments
function sum(num1 = 0, num2 = 0) {
    console.log(num1);
    console.log(num2);
    var result = num1 + num2;
    console.log("the sum is " + result);
    return result;
}

sum(2, 3);
sum(23, 156);
sum();
var sumOfTwoNumbers = sum(1, 2);
console.log(sumOfTwoNumbers);
sum(1, 2, 3);
sum(1);
sum();
sum(-4, 5);
var number1 = 6;
sum(number1);

// function scopes
var inputString = '5';
var inputNumber = Number(inputString);
var varTest = "Hello";
console.log(inputNumber);

function testFunc() {
    funcVariable = 7; // <-- this will create a global variable
    var inputString = "text";
    varTest = "Hello again";
    console.log(funcVariable);
    console.log(inputString);
}
testFunc();
console.log(varTest);
console.log(inputString);
console.log(funcVariable);

// from Celsius to Fahrenheit
var userInput = parseInt(prompt("Enter the temperature in celsius"));
function transform(celsius) {
    var result = celsius * 1.8 + 32;
    console.log(result);
    return result;
}

var fahrenheit = transform(userInput);
console.log(fahrenheit);