







// if the answer is yes it will continue on 11 line
// if (statement) {
// 	statement;
// }
// if is No it will continue on line 13



// let score = 99;

// if (score > 100) {
//     alert("You won");
// }


// // else

// if (score < 100) {
//     alert("The score is less then 100");
// } else {
//     console.log(score);
// }


let correctAnswers = 3;
let correctValue = 32; 

console.log("CORRECT ANSWERS: ", correctAnswers);

// if (correctValue === 31) { // 31 === 31 => true
//     correctAnswers += 1; // if true 
//     alert("Correct answer"); // if true
// } else {
//     alert("Wrong answer"); // if false
// }

// if (correctValue === 31) { // 32 === 31 => false
//     correctAnswers += 1; // if true 
//     alert("Correct answer"); // if true
// } else {
//     alert("Wrong answer"); // if false
// }

console.log("CORRECT ANSWERS: ", correctAnswers);


let fridayCash = 44;

// if (fridayCash >= 50) {
//     alert("You should go to a dinner an a movie");
// } else if (fridayCash >= 35) {
//     alert("You should go aout to a fine meal");
// } else if (fridayCash >= 12) {
//     alert("You should go see a movie");
// } else {
//     alert("Looks like you will be watching TV");
// }


// if (fridayCash > 10) {
    
// } else if (fridayCash < 10) {

// }


console.log("========================== PROMPT =========================");

let input = prompt("How much cash do you have?"); // we get the input from screen as a string

let parsedInput = parseInt(input);// try to parse the string to a number
let parsedFloat = parseFloat(input);

console.log(parsedInput);
console.log(parsedFloat);

if (!Number.isNaN(parsedInput)) { // we check if the number is NOT NaN
    alert("The number is valid");

    // if (input >= 50) {
    //     alert("You should go to a dinner an a movie");
    // } else if (input >= 35) {
    //     alert("You should go aout to a fine meal");
    // } else if (input >= 12) {
    //     alert("You should go see a movie");
    // } else {
    //     alert("Looks like you will be watching TV");
    // }

} else { // if is NaN
    alert("Please enter a valid number");
}

// 60 - 69 => 6
// 70 - 79 => 7
// 80 - 89 => 8
// 90 - 99 => 9
// 100 => 10
// everything else => 5
