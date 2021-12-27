// sayHello();
console.log('Hello from JS console');

//---------- SWITCH --------------
// let userInput = parseInt(prompt('Enter a number from 1-7'));

// if(userInput === 1) {
//     console.log('You have classes at SEDC')
// }
// else if(userInput === 2) {
//     console.log('You are free');
// }
// else if(userInput === 3) {
//     console.log('You have classes at SEDC');
// }


// switch(userInput) {
//     case 1:
//         console.log('You have classes at SEDC');
//         break;
//     case 2:
//         console.log('You are free');
//         break;
//     case 3:
//         console.log('You have classes at SEDC');
//         break;
//     case 4:
//         console.log('You are free');
//         break; 
//     case 5:
//         console.log("I'ts Kafana time!!!!") 
//         break; 
//     case 6:
//         console.log("It's the weekend!") 
//         break;
//     case 7:
//         console.log("It's the weekend!") 
//         break;
//     default:    
//         console.log("No such day")   
//         break;         
// }

//fall out scenario

// switch(userInput) {
//     case 1:
//         console.log('You have classes at SEDC');
//         break;
//     case 2:
//         console.log('You are free');
//         break;
//     case 3:
//         console.log('You have classes at SEDC');
//     case 4:
//         console.log('You are free'); 
//     case 5:
//         console.log("I'ts Kafana time!!!!") 
//     case 6:
//         console.log("It's the weekend!") 
//         break;
//     case 7:
//         console.log("It's the weekend!") 
//         break;
//     default:    
//         console.log("No such day")   
//         break;         
// }


// ---------- Functions --------------------
console.log("---------- Functions --------------------")


// sayHello();

// function without parameters/argument, and without return
function sayHello() {
    console.log("Hello G4");
}

sayHello();
sayHello();
sayHello();

// Good practice: first declare the function, then use it!!

// function with arguments/parameters.

let number1 = 44;
// let globalNumber = 222;

function sumOfNumbers(number1, number2) {
    let result = number1 + number2;
    console.log(`The result is ${result}`);
    // globalNumber = 300;
    // console.log(globalNumber);
}

let globalNumber = 222;
// we don't have access to the result varialbe inside the function
// console.log(`Result is: ${result}`);

console.log(globalNumber)


sumOfNumbers(number1, 75);
// sumOfNumbers(3, 105);
// sumOfNumbers(globalNumber, 30);

console.log(globalNumber);
globalNumber = 222;
console.log(globalNumber);

// funtions with return values 

function sumNumbersWithReturn(num1 = 150, num2 = 100) {
    let result = num1 + num2;
    return result;
}

let resultSum = sumNumbersWithReturn();
let resultSum1 = sumNumbersWithReturn(100, 600);
let absoluteResult = resultSum + resultSum1;
console.log(resultSum);
console.log(resultSum1);
console.log(absoluteResult);


// default parameters
function sumThreNumbers(num1, num2, num3 = 150) {
    let result = num1 + num2 + num3;
    // console.log("logged result",result);
    return result;
}

let functionResult = sumThreNumbers(40, 45);
let newNewNumber = 100;
let newNewResult = newNewNumber + functionResult;
console.log("NewNewResult", newNewResult);

// let newResult = sumThreNumbers(40, 45);
// console.log("new result:", newResult);

// -------------- SCOPE ------------------------------
console.log("-------------- SCOPE ------------------------------");

let input = 5; // this lives in the global scope

function scopeTestFunction(number1, number2) { // This is function scope. Everthing inside the {} is in the function scope
    let result = number1 + number2 + input;
    let fixed = 99;
    console.log("First Log:", result);
    console.log("input:", input);

    if(input === 5) {
        let result2 = number1 + number2 - input + fixed; // let is contained inside the block scope. This means it only lives in the block scope
        // return result2;
        var someNumber = 55; // var is contained inside the function scope
        console.log("result2:" + result2);
    }
    // console.log("result2:", result2); // We can't access the result1 variable here because it is declared with let and it is locked in the if {}
    console.log("someNumber", someNumber); // We can access someNumber because it is a var variable and it is contained in the whole function sumTwoNumbers
}

// console.log(result2); // We can't access something in the function scope from the outside ( let and var included )
// console.log(someNumber)

scopeTestFunction(2, 5);

// Exercise 2 - Degrees converter
function convertDegrees(type, number){
    if(type === 'C'){
        return number * 1.8 + 32;
    } else if(type === 'F'){
        return (5 / 9) * (number - 32);
    } else {
        return 'Invalid input';
    }
}

let userTypeInput = prompt("Enter F for Fahrenheit or C for Celzius degrees:");
let userNumberInput = parseInt(prompt("Enter number:"));
alert(convertDegrees(userTypeInput, userNumberInput));


// exercise 3

function ageCalculator(birthYear) {
   let age = new Date().getFullYear() - birthYear;
   console.log(`You are ${age} years old`)
}

ageCalculator(1992);
ageCalculator(1990);
ageCalculator(2005);






