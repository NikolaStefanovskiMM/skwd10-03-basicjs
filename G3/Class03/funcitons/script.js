//console.log("Is Connected");


// this is the definition
function logMessage() {
    console.log("Hello from function");
}

function sayHello() {
    let name = "Trajan";
    console.log("Hello from " + name);
}

// here we execute the code from the function
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// you can execute this funcvtion n times
// sayHello();



// function with parameters that does not return anything
function sumOfTwoNumbers(num, num1) {
    let sum = num + num1;
    console.log(sum);
}

// sumOfTwoNumbers(2, 3);
// sumOfTwoNumbers(5, 5);
// sumOfTwoNumbers(10, 2323223);

function sumOfFourNumbers(num, num1, num2, num3) {
    let sum = num + num1 + num2 + num3;
    console.log(sum);
}

// sumOfFourNumbers(1, 1, 1, 1);


// function with parameters that returns a value
function sumOfThreeNumbers(num, num1, num2) {
    let sum = num + num1 + num2;
    return sum;
}

// let sumOfThreeNumbersResult = sumOfThreeNumbers(1, 2, 3); // => 6
// console.log(sumOfThreeNumbersResult);

// let sumOfThreeNumbersResult1 = sumOfThreeNumbers(4, 5, 6); // => 15
// console.log(sumOfThreeNumbersResult1);

// let sumOfThreeNumbersResult2 = sumOfThreeNumbers(7, 8, 9); // => 24
// console.log(sumOfThreeNumbersResult2);

// let result = sumOfThreeNumbers(sumOfThreeNumbersResult, sumOfThreeNumbersResult1, sumOfThreeNumbersResult2); // => 45
// console.log(result);

// let result1 = sumOfThreeNumbers(1, 2, result);



function three() {
    return 3;
    // every thing after return is not usable and it will NOT be executed
    // console.log("Trajan")
    // let a = 3 + 4;
}

// let a = three();

function printMessage(message) {
    console.log(message);
}

function isUserMature(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// let isMature = isUserMature(22);

// if (isMature) {
//     printMessage("User is over 18");
// } else {
//     printMessage("User is under 18");
// }

// if (isUserMature(22)) {
//     printMessage("User is over 18");
// } else {
//     printMessage("User is under 18");
// }

function changeToUpperCaseLeters(input) {
    if (typeof input === 'string') {
        let allUpperCase = input.toUpperCase();
        return allUpperCase;
    } else {
        console.log("Error input not valid");
        return input;
    }
}

// let input = "AbCkienauAsid";
// let result = changeToUpperCaseLeters(input);
// printMessage(result);

function getInputAsNumber() {
    let screenInput = prompt("Please enter a number!");

    let parsedInput = parseInt(screenInput);

    // if (!Number.isNaN(parsedInput)) {
    //     return parsedInput;
    // }
    
    // return 0;

    if (Number.isNaN(parsedInput)) {
        return 0;
    } else {
        return parsedInput;
    }
}
// command: alt + shift + f  => format code based on setting in VS code

// let number = getInputAsNumber();
// console.log(number);

// number = getInputAsNumber();
// console.log(number);

// number = getInputAsNumber();
// console.log(number);

// number = getInputAsNumber();
// console.log(number);

function divide(num1, num2) {
    // add validation for numbers
    // add logic
    // return value
}

// bad function :)
function returnEverything() {
    let expresion = 0;

    if (expresion) {
        return 4;
    } else if (expresion) {
        return true;
    } else {
        return "Trajan";
    }
}

function isUserMature2(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function grantAccess(firstName, lastName, age) {
    if (isUserMature2(age)) {
        console.log(`Hi ${firstName} ${lastName}, welcome to this site!`);
    } else {
        console.log(`Sorry ${firstName} ${lastName}, you are not allowed!`);
    }
}

// function something(firstName, lastName, age, isBald, mothersMaidenName) {
    
// }

// grantAccess("Trajan", "Stevkovski", 33);