console.log('The script is working!');

// Functions revision
function multiplyTwoNumbers(number01, number02){
    // let result = number01 * number02;
    // return result;
    return number01 * number02;
}
let result01 = multiplyTwoNumbers(2, 5);
console.log(result01);
// console.log(multiplyTwoNumbers(2, 5));
// console.log(multiplyTwoNumbers(100, 7));
// console.log(multiplyTwoNumbers(9, 48));

//---------------- ARRAYS -----------------
console.log('---------------- ARRAYS -----------------');
let myFirstArray = ['Aleksandar', 'Katerina', 'Darko'];
let emptyArray = []; // empty array
let mixedArray = [3, 'string', null, false, undefined] // mixed array - elements are various types

// Access elements in array
let firstElementOfArray = myFirstArray[0]; // arays in JS are zero-indexed !!!
console.log(firstElementOfArray);

// Change value of an element in an array
myFirstArray[0] = 'Bojan';
console.log(myFirstArray[0]);
myFirstArray[0] = 'Stojan';
console.log(myFirstArray[0]);

// Getting the length of an array
console.log(`Length of myFirstArray is: ${myFirstArray.length}`);
let lastElement = myFirstArray[myFirstArray.length - 1];
console.log(`Last element is : ${lastElement}`);

// Adding and removing items
myFirstArray[myFirstArray.length] = 'Erika';
console.log(myFirstArray[myFirstArray.length - 1]);

// .push() used for adding elements(s) at the end of the array
// we can add multiple items at once
myFirstArray.push('Ivana', 'Milena');
console.log(myFirstArray);

// .unshift() used for adding alement(s) at the beginning of an array
// we can add multiple items at once
myFirstArray.unshift('Marjan', 'Mario');
console.log(myFirstArray);

// .pop() used for removing element at the end of the array
let removedFromEnd = myFirstArray.pop();
console.log(`Item removed: ${removedFromEnd}`);
console.log(myFirstArray);

// .shift() used for removing element on the first index of an array
let removedFromStart = myFirstArray.shift();
// myFirstArray.shift();
console.log(`Item removed: ${removedFromStart}`);
console.log(myFirstArray);

// ------------------   looping structures ------------------------------
//---------------- WHILE LOOP ----------------
console.log('---------------- LOOPS ----------------');

// while loop

let whileCounter = 101;
let sumOfSquares = 0;
while(whileCounter <= 150) {
    // some code
    // console.log(`${whileCounter}`);
    sumOfSquares += Math.pow(whileCounter, 2);
    // console.log(Math.pow(whileCounter, 2))
    // console.log(sumOfSquares);
    whileCounter++;
    // whileCounter += 1;
}
console.log(`Result is: ${sumOfSquares}`);

// do/while

let secretNumber = 9;
let userNumber = 0;

// do {
//     userNumber = parseInt(prompt('Guess my number! Pick one from 1-10'));
//     console.log(`User guess: ${userNumber}`);
// } while(userNumber !== secretNumber)

// infinite loop (BE CAREFULL WITH THESE !!!)
// while(true) {
//     let anotherUserInput = parseInt(prompt('Guess my number! Pick one from 1-10'));
//     if(anotherUserInput === secretNumber) {
//         console.log('Right guess!');
//         break; 
//     }
// }

// for loop
for(let i = 1; i <=100; i-- ) {
    console.log(i);

    if(i === -23)
    break;
}

for(let i = 1; i <= 100; i += 2 ) {
    console.log(i);
}

let anotherWhileCounter = 1;
while(anotherWhileCounter <= 100) {
    console.log(anotherWhileCounter);
    anotherWhileCounter += 2;
}


