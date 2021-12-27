let result = 0;

//result = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13... + 100;

let end = 50;
let start = 0;

while (start <= end) {
    console.log("step " + start);
    console.log(`Start: ${start}`);
    console.log(`End: ${end}`);
    console.log(`Expression: ${start <= end}`);

    result += start;
    start += 1;

    console.log(`Result: ${result}`);
    console.log(`Start: ${start}`);
    console.log("");
}

console.log("END RESULT: " + result);

// step 1;
/*
    end = 100;
    start = 0;
    start <= end => 0 <= 100 => true
    result = result + start; => 0
    start = start + 1;
*/

// step 2;
/*
    end = 100;
    start = 1;
    start <= end => 1 <= 100 => true 
    result = result + start; => 1
    start = start + 1; => 2
*/

// step 100;
/*
    end = 100;
    start = 100;
    start <= end => 100 <= 100 => true 
    result = result + start; => large number
    start = start + 1; => 101
*/

// step 101;
/*
    end = 100;
    start = 101;
    start <= end => 101 <= 100 => false
    will exit the loop;
*/

// while (expresion) {
//     // this will be executed untill expresion is evaluated as false
// }

let result1 = 0;
let counter = 0;
while (counter < 5) {
    // on every step the loop will reinitialize everything that is declared inside the loop body
    //let result = 0;
    result1 += 100;
    counter += 1;
}