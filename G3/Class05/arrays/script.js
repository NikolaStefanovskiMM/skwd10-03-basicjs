let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
let numbers1 = [1, 2, 3, 4, 5, 6, 7];
            // 0, 1, 2, 3, 4, 5 ,6 -> indexes 
let emptyArray = [];
let mixedValue = ["Trajan", 12, true, null, undefined, [], {}];
let authors = [ 'Ernest Hemingway', 'Charlotte Bronte',    
	'Charlotte Bronte',                
	'Dante Alighieri',  //A single statement 
	'Emily Dickinson'   //although in multiple lines           
];

let numbers = [1, 2, 3, 4, 5, 6, 7];
            // 0, 1, 2, 3, 4, 5 ,6 -> indexes

console.log(numbers);

console.log(numbers[2]);
console.log(numbers[5]);
console.log(numbers[0]); // reading the value
console.log(`We are getting the value from our array ${numbers} with index 3: ${numbers[3]}`);

// seting the value of the elemeent with index 5
numbers[5] = 10000;
// reading the value
let someVal = numbers[3];

console.log("We changed the value in the array");
console.log(numbers);

let lengthOfArray = numbers.length;
console.log("Lenght of numbers array " + lengthOfArray);

let lastElement = numbers[numbers.length - 1]; // => numbers[6] when evaluated
let lastElement1 = numbers[lengthOfArray]; // error out of bounds
let lastElement2 = numbers[6]

// using index not recomended
numbers[numbers.length] = 20;

console.log(numbers);
console.log("Lenght of numbers array " + numbers.length);

numbers.push(5000);

console.log(numbers);
console.log("Lenght of numbers array " + numbers.length);
// push always sets elements at the end of the array
numbers.push(123, 321, 234, 432);

console.log(numbers);
console.log("Lenght of numbers array " + numbers.length);

// unshift always sets the element on index 0
numbers.unshift(77777);

console.log(numbers);
console.log("Lenght of numbers array " + numbers.length);

// this will not add at the start of the array it will just change the value of the first element
numbers[0] = 9999;

console.log(numbers);
console.log("Lenght of numbers array " + numbers.length);

// here we will not save the value
numbers.pop();
// here we will give the value of the last element to some variable
let lastElementWithPop = numbers.pop();
console.log("last element: " + lastElementWithPop);

let firstElementWithShift = numbers.shift();
console.log("first element: " + firstElementWithShift);

// let a = [1, 2, 3];

// function something(test) {
//     // lots of code
// }

// something(a);