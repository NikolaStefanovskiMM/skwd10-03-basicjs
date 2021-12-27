
function calculateLoan(amount, months, interest, name) {
    console.log(`Amount: ${amount}`);
    console.log(`Months: ${months}`);
    console.log(`Interest: ${interest}`);
    console.log(`Name: ${name}`);
}

// Correct call
// console.log("Correct");
// calculateLoan(1000, 12, 7, "John Doe");

// console.log("Extra parameters");
// calculateLoan(1000, 12, 7, "John Doe", 1, "Trajan");

// console.log("Missing parameters");
// calculateLoan(1000, 12);

function makeRequest(url, timeout = 2000, callback = "calling function") {
    console.log(`Url: ${url}`);
    console.log(`Timeout: ${timeout}`);
    console.log(`Callback: ${callback}`);
}

// makeRequest("www.google.com");
// makeRequest("www.google.com", 100);
// makeRequest("www.google.com", 1500, "Hello world");
// makeRequest("www.google.com", "Call this callback");

// let number = Number("12345");
// let text = String(12345);
// console.log(typeof number, number);
// console.log(typeof text, text);

// Global scope
let aInGlobal = 10;
// this is the definiot from line 53;
// var sum;

function localScope() {
    // we are using an global variable
    console.log(aInGlobal);

    // local variable aInLocal
    let aInLocal = 15;
}

//console.log(aInLocal);

function localScope2() {
    console.log(aInGlobal);
    // sum will be defined in the global scope using var
    sum = 2 + 3;
}
// localScope2();
// console.log(sum);


function fncOne() {
    let a = 3;
}

function fncTwo() {
    fncOne();
}


function fncThree() {
    let a = 10;
    function fncFour() {
        console.log(a);
    }
    fncFour();
}
console.log("fncThree");
// fncThree();

let b = 3;
function fncFive() {
    console.log(b)
}
// fncFive();



let firstName = "Nikola";
let lastName = "Dalchevski";

// lots of codeeeeee........


// lots of code.......

function changeName() {
    // changing global variables
    firstName = "Bob";
    lastName = "Bobski";
    // defining local variables and not changing global variables
    // let firstName = "Bob";
    // let lastName = "Bobski";
}

changeName();

function printName(fName, lName) {
    console.log("Hello from " + fName + " " + lName);
}

// printName(firstName, lastName);



// this is variable declared on global level
let message = "Outside the function";						
function warning(message) { // => message is declared as parameter in the function its not the same with the global variable message
    console.log(message);
}


warning("Inside the function");
console.log(message);

//Declaration of both functions
function farToCel(celsius){
	let result = celsius * 1.8 + 32;
	return result;
}
function celToFar(farenheits){
	let result = (5/9) * (farenheits-32);
	return result;  
}

//The person chooses what to calculate
let personChoice = prompt("Enter F for farenheit and C for celsius");
let personInput = parseInt(prompt("Please enter value:"));

if (personChoice === "F") {
	console.log(`${celToFar(personInput)}C`);
} else if (personChoice === "C") {
    let result = farToCel(personInput);
	console.log(`${result}F`);
} else {
	console.log("ERROR!");
}
