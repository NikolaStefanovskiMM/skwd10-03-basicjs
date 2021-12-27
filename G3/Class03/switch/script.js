console.log("Connected");

let day = 4;
let dayInWords = "";

switch (day) {
    case 1:
        dayInWords = "Monday";
        // executes code
        break; // exits switch statement
    case 2:
        dayInWords = "Thuesday";
        break;
    case 3:
        dayInWords = "Wednesday";
        break;
    default:
        console.log("No day exists with that number");
        break;
}

console.log(dayInWords);


// -----
let value = "4";

switch (value) {
    case "1":
        console.log(value);
        break;
    case "2":
        console.log(value);
        break;
    case "3":
    case "4":
        console.log(value);
        // ...
        break;
    default:
        console.log("default");
        console.log(value);
        break;
}

// ----
let number = 1;
// without breaks it will execute all statemnets cases 
switch (number) {
    case 1:
        console.log("case 1");
        number += 1;
        // here we need break 
    case 2:
        console.log("case 2");
        number += 2;
        // here we need break 
    case 3:
        console.log("case 3");
        number += 3;
        // here we need break 
    case 4:
        console.log("case 4");
        number += 4;
        // here we need break 
    default:
        console.log("We are in default");
        break;
}

console.log(number); // 1 + 1 + 2 + 3 + 4 = 11

let name = "Bob";

switch (name) {
    case "Trajan": // name === "Trajan" in some way
        console.log("Trainer");
        break;
    case "Nikola": // name === "Nikola" in some way
        console.log("Assistant");
        break;
    case "Bob": // name === "Bob" in some way
        console.log("Coordinator");
        break;
    default:
        console.log("Enter valid value");
        break;
}

if (name === "Trajan") {
    console.log("Trainer");
} else if (name === "Nikola") {
    console.log("Assistant");
} else if (name === "Bob") {
    console.log("Coordinator");
} else {
    console.log("Enter valid value");
}