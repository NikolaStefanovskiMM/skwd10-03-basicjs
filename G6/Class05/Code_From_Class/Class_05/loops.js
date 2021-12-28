// let condition = false;

// while (condition) {
//   console.log("I am in the while loop");
// }

// do {
//   console.log("I am in the do while loop");
// } while (condition);

// console.log("THE END");

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let groups = ["G1", "G2", "G3", "G4", "G5", "G6", "G7"];

// let i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i]);
//   // i = i + 1
//   // i++;
//   i += 1;
// }

// for (let i = 0; i < groups.length; i++) {
//   console.log(groups[i]);
// }

// for (let i = groups.length - 1; i >= 0; i--) {
//   console.log(groups[i]);
// }

// for (let group of groups) {
//   if (group === "G3") {
//     continue;
//   }

//   if (group === "G5") {
//     break;
//   }
//   console.log(group);
// }

// let sum = 0;
// for (let num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

// function sumNumbersInArray(nums) {
//   let sum = 0;
//   for (let number of nums) {
//     sum += number;
//   }

//   return sum;
// }

// let result = sumNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);
// let result1 = sumNumbersInArray(numbers);
// console.log(result1);

let groceries = ["Bread", "Milk", "Butter"];

function addToGroceries(groc, item) {
  groc.push(item);
}

function printGrociersItems(groc) {
  for (let grocier of groc) {
    if (grocier !== null) {
      console.log(grocier);
    }
  }
}

function isItemExisting(groc, item) {
  let result = false;
  for (let grocier of groc) {
    if (grocier === item) {
      result = true;
      break;
    }
  }
  return result;
}

function deleteItem(groc, item) {
  for (let i = 0; i < groc.length; i++) {
    if (groc[i] === item) {
      groc[i] = null;
    }
  }
}

// console.log(groceries);
// printGrociersItems(groceries);
console.log("-------------------------------------------------------------");
// addToGroceries(groceries, "Salad");
// console.log(groceries);
// printGrociersItems(groceries);

console.log("---------------------------------------------------------------");

let isExisting = isItemExisting(groceries, "Marula");
// console.log(isExisting);

// deleteItem(groceries, "Milk");
// printGrociersItems(groceries);

let numbers = [];

for (let i = 0; i < 10; i++) {
  let userNumber = parseInt(
    prompt("Please insert number to be added in the array")
  );
  numbers.push(userNumber);
}

function findNumberOccurences(nums, number) {
  let counter = 0;
  for (let num of nums) {
    if (num === number) {
      counter++;
    }
  }
  return counter;
}

let times = findNumberOccurences(numbers, 23);
console.log(times);
