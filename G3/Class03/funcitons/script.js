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

let sumOfThreeNumbersResult = sumOfThreeNumbers(1, 2, 3); // => 6
console.log(sumOfThreeNumbersResult);

let sumOfThreeNumbersResult1 = sumOfThreeNumbers(4, 5, 6); // => 15
console.log(sumOfThreeNumbersResult1);

let sumOfThreeNumbersResult2 = sumOfThreeNumbers(7, 8, 9); // => 24
console.log(sumOfThreeNumbersResult2);

let result = sumOfThreeNumbers(sumOfThreeNumbersResult, sumOfThreeNumbersResult1, sumOfThreeNumbersResult2); // => 45
console.log(result);

let result1 = sumOfThreeNumbers(1, 2, result);