
let counter = 0;

do {
    console.log("This will be executed only once");
    console.log("Expression evaluates in " + counter < 0);
} while (counter < 0);


let numbers = [1, 2, 3, 4, 5, 6, 7];

let i = 0;
do {
    let element = numbers[i]; // numbers[0] -> numbers[1] 
    console.log(`Element on index ${i} has value ${element}`);
    i += 1;
} while (i < numbers.length);

// while (expresion) {
//     // body
// }

// do {
//     // body
// } while (expresion);