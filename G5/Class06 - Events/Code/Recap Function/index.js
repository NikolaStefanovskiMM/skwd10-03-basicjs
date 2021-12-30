// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.

// 2,
// [1, 2,2,3,4,5,5] => 2 pati go ima brojot 2

/**
 * Naparavi funckija da se vika findNumber => DONE
 * Napravi funkcijata da prima 2 parametri => DONE
 * Ke ni treba brojach koisto ke broi kolku pati e zastapen zadadeniot broj => DONE
 * Ke treba da iterirame niz nizata (kojashto ke bide pratena kako argument) i da proverime kolko pati se sodrzi zadadeniot broj (prviot argument) =>DONE
 * Ako brojot ispraten kako argument se sodrzi poveke pati, zgolemuvaj go numberAppereance-ot. => DONE
 * I na kraj, isprintaj kolko pati se pojavil zadadeniot broj => DONE
 */ //body

let myNumbers = [123, 3, 2, 3, 3, 3, 5, 6, 3, 10];

console.log(myNumbers);
console.log(myNumbers.length);

// void
function findNumber(number, arrayOfNumbers) {
  let numberAppereance = 0;
  // 0 < 9 // 1 < 9  // 2 < 9 ... // 9 < 9 ?
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (number === arrayOfNumbers[i]) {
      numberAppereance++;
    }
  }
  //   console.log(`There is ${numberAppereance} occurrences of number ${number} in the array`)
  return `There is ${numberAppereance} occurrences of number ${number} in the array`;
}

let numberOccurrences = findNumber(3, myNumbers);

console.log(numberOccurrences);

let numberOccurrencesSecond = findNumber(5, [1, 500, 456, 5, 4, 3, 2, 5, 10]);
console.log(numberOccurrencesSecond);

let numberOccurrencesThird = findNumber(
  500,
  [1, 500, 456, 5, 4, 500, 3, 500, 2, 500, 5, 10]
);
console.log(numberOccurrencesThird);
