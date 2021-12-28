let niza = ["Goce", "Angel", "John", "Bob"];
// BAD PRACTICE
let mesovitaNiza = ["Goce", 22, true, [], {}, true, NaN, undefined];
// console.log(mesovitaNiza);

// console.log(niza[0]);
// console.log(niza[1]);
// console.log(niza[2]);
// console.log(niza[3]);
// console.log(niza[4]); //Undefined

// console.log(niza.length);
// console.log(niza[niza.length - 1]);

// niza[2] = "Mike";
// niza[niza.length - 1] = "James";
// niza[0] = "First";
// console.log(niza);

// niza[niza.length] = "James";
// niza.push("James", "Mike", "Mile");
// niza.unshift("Mike", "James", "Gordon");
// console.log(niza);

// let removedItem = niza.pop();
// console.log(niza);
// console.log(removedItem);
// let removedItem = niza.shift();
// console.log(niza);
// console.log(removedItem);

// LOOPS

// let answer = prompt("Please enter letter");

// while (answer !== "y") {
//   answer = prompt("Please enter annother letter");
// }

// console.log("You finnaly found the correct letter");

// let firstNames = ["Goce", "Kabov", "Angel", "Mitrov"]; // array[0] array[1]
// let drug = ["Goce", "John", "Ben"];
// let index = 0;

// while (index < firstNames.length) {
//   console.log(firstNames[index]);
//   index++;
// }

// let numbers = [];

// let time = 1;

// let max = 0;

// while (time <= 3) {
//   let number = parseInt(prompt(`Please insert number ${time}`));
//   //   if (number > max) {
//   //     max = number;
//   //   }
//   numbers.push(number);
//   time++;
// }

// let i = 0;

// while (i < numbers.length) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   i = i + 1;
// }

// console.log(max);

// Example 1

let number = parseInt(prompt("Please insert number"));

let numbers = [];
while (number !== 0) {
  let digit = number % 10;
  numbers.unshift(digit);
  number = parseInt(number / 10);
}
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
