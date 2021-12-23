console.log("Connected.")

// Recap

// let input = prompt("Enter a number:");
// console.log(input);
// console.log(typeof input);

// console.log("------ parsed: -------");

// let inputParsed = parseInt(input);
// console.log(inputParsed);
// console.log(typeof inputParsed);

// let inputParsedInFloat = parseFloat(input);
// console.log(inputParsedInFloat);
// console.log(typeof inputParsedInFloat);


// Class 03
// Switch Statements

let result = 10 + 5;

switch(result){
    case 10:
        console.log("Yes, the correct number is 10");
        break;
    case 15:
        console.log("Yes, the correct number is 15");
        break;
    case 20:
        console.log("Yes, the number is 20");
        break;
    default:
        console.log("Wrong input.");
        break;
}

// toLowerCase() <- It's used on string to convert all the caraters to lower case
// toUpperCase() <- It's used on string to convert all the caraters to UPER case

let inputName = prompt("Enter your name:");
switch(inputName){
    case "Vladimir":
        console.log("I love footbal!");
        break;
    case "Stefan": 
        console.log("Stefan is learning JavaScript! Yey");
        break;
    case "Jovana":
        console.log("Love going out!");
        break;
    default:
        console.log("Name is not recognized...");
        break;
}

let inputPet = prompt("What kind of pet you want?");

switch(inputPet.toLowerCase()){
    case "dog":
    case "puppy":
        console.log("Dogs are very friendly!");
        break;
    case "cat":
    case "kitty":
        console.log("Cats are awesome!")
        break;
    case "tigar":
        console.log("You should not pet a Tiger!");
        break;
    default:
        console.log("The pet that you want, it's not available here.");
        break;
}

// Functions
console.log("------------ Functions ------------");


function sayHello(){
    console.log("Hello from SEDC!");
}

sayHello();
