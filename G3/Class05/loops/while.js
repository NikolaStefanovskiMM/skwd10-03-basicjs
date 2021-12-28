let result = 0;

//result = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13... + 100;

let end = -1;
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

let numbers = [1, 2, 3, 12, 12, 32, 342, 4234, 12312, 4342, 34324];

let counter1 = 0;
while (counter1 < numbers.length) {
    let element = numbers[counter1];
    console.log(`Element on index ${counter1} has value ${element}`);
    counter1 += 1;
}


let numbersArr = [];

// we want to fill the array with 10 values (numbers)
let i = 0;
while (i < 10) {
    // get number from screen
    let input = parseInt(prompt("Please enter a number"));
    // add value to numbersArr
    numbersArr.push(input);
    // increase i
    i += 1;
}

// we want to determent witch is the largest value;
// max value at start is the first number in the array
let max = numbersArr[0];
// we set i to 1 cuz the first number of the array is currently the largest value and we do NOT need to check it again
i = 1;
while (i < numbersArr.length) {
    let element = numbersArr[i];
    if (max < element) {
        max = element;
    }
    i += 1;
}

console.log(numbersArr);
console.log("Max value is " + max);

// Math.pow(3, 2); => 3 na kvadrat


// let result = 0;
// let i = 101;
// while (i <= 150) {
//     result += Math.pow(i, 2);
//     i++;
// }
// console.log(result);