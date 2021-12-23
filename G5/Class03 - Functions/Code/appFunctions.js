// Functions
console.log("------------ Functions ------------");

function sayHello(){
    console.log("Hello from SEDC!");
}

sayHello();

let studentOne = "Gjorgji";
let studentTwo = "Martina";

function greetings(name){
    console.log(`Hello ${name}, welcome to SEDC Class!`);
}

greetings(studentOne);
greetings(studentTwo);
greetings("Martin");

// Multiple parameter functions

let x = 19;
let y = 10;

function sumOfTwo(firstNumber, secondNumber){
    let result = firstNumber + secondNumber;
    console.log(`The sum of the two numbers is: ${result}`);
}

sumOfTwo(x, y);
sumOfTwo(5,10);

// Functions with return

let resultOfFunc = sumOfTwo(10,40);
console.log(resultOfFunc);

function sumOfTwoWithReturn(firstNum, secondNum){
    let result = firstNum + secondNum;
    return result;
}

let resultOfFunc2 = sumOfTwoWithReturn(3,7);
console.log(resultOfFunc2);

function printName(name){
    return `My name is ${name}`;
}
printName("Boban");

let someNameOne = printName("George");
console.log(someNameOne);

function calculateFinish(name, passScore){
    let finish = 15;
    if(passScore < finish){
        console.log(`${name} did not finish, he pass only ${passScore}km`);
    } else if(passScore >= finish){
        console.log(`${name} finished. Congratulations! Passed: ${passScore}km`);
    } else {
        console.log(`Name: ${name} | Score: ${passScore}km`);
    }
}

calculateFinish("Bojan", 5);
calculateFinish("Martina", 16);
calculateFinish("Aleksandar");
calculateFinish("George", 10, "Something Else");

// Function with default parameter

function calculateFinish2(passScore, name = "User", ){
    let finish = 10;
    if(passScore < finish){
        console.log(`${name} did not finish, he pass only ${passScore}km`);
    } else if(passScore >= finish){
        console.log(`${name} finished. Congratulations! Passed: ${passScore}km`);
    } else {
        console.log(`Name: ${name} | Score: ${passScore}km`);
    }
}

calculateFinish2(10);
calculateFinish2(2, "Petar");

// Built-in Javascript Functions - Number() & String()

let inputNumber = prompt("Enter some number:");

function getPowOfNum(number){
    let result = Number(number) ** 2;
    return result;
}

console.log(getPowOfNum(inputNumber));
console.log(typeof getPowOfNum(inputNumber));

let randomNumber = 200;
let numToString = String(randomNumber);
console.log(numToString);
console.log(typeof numToString);

// Scope Example

let someRandomVariable = "Something";

// Level 1 Scope - Global Scope
function saySomething(){
    //Leve 2 Scope - Private Scope
    let result = 1000;
    console.log(result);
    console.log(someRandomVariable); // We can access from outside scope

    function printSomething(){
        // Leve 3 Scope - Private Scope
        let name = "Aleksandar";
        console.log(`Hello ${name} from Leve 3 Scope`);
    }
    printSomething(); // We can call it only in the same scope
}

saySomething();

