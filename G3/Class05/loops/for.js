// let i = 0;

// while (i < 10) {
//     i++;
// }

//   counter; expresion; increment
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


let result = 0;
let end = 100;
for (let i = 0; i < end; i += 2) {
    console.log("step " + i);
    console.log(`Start: ${i}`);
    console.log(`End: ${end}`);
    console.log(`Expression: ${i <= end}`);

    result += i;

    console.log(`Result: ${result}`);
    console.log(`Start: ${i}`);
    console.log("");
}

console.log("END RESULT " + result);
            // 0, 1, 2, 3, 4, 5, 6, 7 = indexes
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// from zero till end
for (let index = 0; index < numbers.length; index += 1){
    let element = numbers[index]; // numbers[0] -> numbers[1] 

    console.log(`Element on index ${index} has value ${element}`);
}
console.log("");
// from end till zero
for (let index = numbers.length - 1; index >= 0; index -= 1){
    let element = numbers[index]; // numbers[0] -> numbers[1] 

    console.log(`Element on index ${index} has value ${element}`);
}