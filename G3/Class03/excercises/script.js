function getNumberInputFromScreen(message) {
    let input = prompt(message);
    let parsedInput = Number.parseInt(input);
    
    if (Number.isNaN(parsedInput)) {
        return null;
    }
    return parsedInput;
}

function calculateAge(dob, currentYear) {
    if (currentYear < dob || dob < 1930) {
        return `Cannot calculate age: invalid date of birth`;
    }
    
    let age = currentYear - dob;
    return `You are ${age} years old`;
}

function printInConsole(message) {
    console.log(message);
}

// let date = new Date();
// let currentYear = date.getFullYear();
// let input = getNumberInputFromScreen("Enter you year of birth?");

// if (input) {
//     printInConsole(calculateAge(input, currentYear));
// }




function calculateAgeTwo(year) {
    let date = new Date();
    let currentYear = date.getFullYear();

    // if (currentYear < year) {
    //     return -1;
    // }
    let age = currentYear - year;
    return age;
}

let input = prompt("Please enter year of birth");
let parsedInput = Number.parseInt(input);

if (!Number.isNaN(parsedInput)) {
    let age = calculateAgeTwo(parsedInput);

    if (age <= -1) {
        console.log("Please enter valid year");
    } else {
        console.log(`You are ${age} years old`);
        console.log("You are " + age + " years old");
    }
    
} else {
    console.log("Please enter valid year");
}
