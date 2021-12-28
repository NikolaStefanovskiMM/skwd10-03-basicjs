console.log("*** WHILE LOOP ***");

/**
 * PRVA ITERACIJA: DALI 0 < 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: 0 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * VTORA ITERACIJA: DALI 1 < 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: 1 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * TRETA ITERACIJA: DALI 2 < 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: 2 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * CHETVRTA ITERACIJA: DALI 3 < 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: 3 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 *
 * SE POVTORUVA DO PREDPOSLEDNATA
 *
 * PREDPOSLEDNA ITERACIJA: i = 19; DALI 19 < 20 ? DA TOGASH ISPRINTAJ VO CONSOLE NUMBER: 19 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * POSLEDNA ITERACIJA: i = 20; DALI 20 < 20 ? NE! ..
 *
 * NO SO <=; i = 20; DALI 20 <= 20 ? DA! TOGASH ISPRINTAJ NUMBER: 20 I ZGOLEMI GO ITERATORIT ( i ) SO i++
 *
 * KOGA IMAME <= PRAVIME USTE EDNA PROVERKA VO NASIOT SLUCAJ POSLE POSLEDNATA ITERACIJA i = 21,
 * PROVERUVAME DALI 21 <= 20, USLOVOT NE SE ISPOLNUVA I SAMATA ITERACIJA ZAVRSHUVA
 *
 */

// ITERATOR
let i = 0;
while (i <= 20) {
  console.log(`Number: ${i}`);
  i++; // MORAME DA GO INCREMENTIRAME ILI ZGOLEMIME ITERATOROT ZA DA NE VLEZIME VO INFINITE LOOP
}

let iterator = 20;
while (iterator >= 0) {
  console.log(`Number: ${iterator}`);
  iterator--;
}

//prettier-ignore
let nonAlchoholicDrinks = [
    "Coca-cola",
    "Fanta",
    "Heineken 0%",
    "Apple Juice",
    "Orange Juice"
];
console.log(nonAlchoholicDrinks);
// KAKO BI GO NAPRAVILE PRINTANJE DO SEGA
// console.log(nonAlchoholicDrinks[0]);
// console.log(nonAlchoholicDrinks[1]);
// console.log(nonAlchoholicDrinks[2]);
// console.log(nonAlchoholicDrinks[3]);
// console.log(nonAlchoholicDrinks[4]);

console.log("Print with *** while loop ***");

/**
 * PRVATA ITRACIJA: DALI 0 < 5 ? DA TOGAS ISPRINTAJ GO CO KONZOLA ELEMTOT OD NIZATA SO 0 INDEX I ZGOLEMI GO ITERATOROT ( index )++
 * VTORA ITRACIJA: DALI 1 < 5 ? DA TOGAS ISPRINTAJ GO CO KONZOLA ELEMTOT OD NIZATA SO 1 INDEX I ZGOLEMI GO ITERATOROT ( index )++
 */
let index = 0;
while (index < nonAlchoholicDrinks.length) {
  console.log(`Drink: ${nonAlchoholicDrinks[index]}`);
  index++;
}

// // Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
// console.log("Kvadrat: ", Math.pow(2, 2));
// console.log("Kvadrat 2: ", 2 ** 2);

// let iteratorNumber = 101;
// let sum = 0;
// while (iteratorNumber <= 150) {
//   //   console.log(Math.pow(iteratorNumber, 2));
//   // sum = sum + Math.pow(iteratorNumber, 2);
//   sum += Math.pow(iteratorNumber, 2);
//   iteratorNumber++;
// }
// console.log(`The sum is: ${sum}`);

// CONTINUE WHILE LOOPS ****

let fullName = "George Dimitrov";
console.log(fullName);
console.log(fullName + " has " + fullName.length + " charactar");

/**
 * napravi funckija koja sto kako parametar ke prima niza od vrednosti t.e. stringovi
 * pronajdi go najgolemiot string i isprintaj go
 */

function showLongestNameOfArray(arrayOfStrings) {
  let longestName = "";
  let i = 0;

  while (i < arrayOfStrings.length) {
    if (longestName.length < arrayOfStrings[i].length) {
      longestName = arrayOfStrings[i];
    }
    i++;
  }

  return longestName;
}

let arrayOfNames = ["George", "Coca-cola", "Valentino Rossi", "Cedevita"];

let longestNameOfArray = showLongestNameOfArray(arrayOfNames);
console.log(`Longest name is: ${longestNameOfArray}`);

console.log("*** DO WHILE LOOP ***");

let iteratorForDoWhile = 0;

do {
  console.log(`The number is: ${iteratorForDoWhile}`);
  iteratorForDoWhile++;
} while (iteratorForDoWhile <= 10);

let iteratorSecondForDoWhile = 0;
do {
  console.log(`The number is: ${iteratorSecondForDoWhile}`);
  iteratorSecondForDoWhile++;
} while (iteratorSecondForDoWhile > 10);

console.log("*** FOR LOOPS ***");

/**
 * for(iteratorot, uslovot, zgolemuvame/namaluvame iteratorot)
 */

console.log("Print NUMBERS WITH FOR LOOP");

/**
 * PRVA ITERACIJA: i = 0 DALI 0 <= 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: ${i} (vo ovoj moment i e 0) 0 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * VTORA ITERACIJA: i = 1 DALI 1 <= 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: ${i} (vo ovoj moment i e 1) 1 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * TRETA ITERACIJA: i = 2 DALI 2 <= 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: ${i} (vo ovoj moment i e 2) 2 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * CHETVRTA ITERACIJA: i = 3 DALI 3 <= 20 ? DA! TOGASH ISPRINTAJ VO CONSOLE NUMBER: ${i} (vo ovoj moment i e 3) 3 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 *
 * SE POVTORUVA DO PREDPOSLEDNATA
 *
 * PREDPOSLEDNA ITERACIJA: i = 19; DALI 19 <= 20 ? DA TOGASH ISPRINTAJ VO CONSOLE NUMBER: ${i} (vo ovoj moment i e 19) 19 I ZGOLEMI GO ITERATOROT ( i ) SO i++
 * POSLEDNA ITERACIJA  i = 20; DALI 20 <= 20 ? DA! TOGASH ISPRINTAJ NUMBER: ${i} (vo ovoj moment i e 20) 20 I ZGOLEMI GO ITERATORIT ( i ) SO i++
 *
 * KOGA IMAME <= PRAVIME USTE EDNA PROVERKA VO NASIOT SLUCAJ POSLE POSLEDNATA ITERACIJA i = 21,
 * PROVERUVAME DALI 21 <= 20, USLOVOT NE SE ISPOLNUVA I SAMATA ITERACIJA ZAVRSHUVA
 *
 */

// FOR LOOP E ISTO KAKO I WHILE LOOP SAMO SO POLESNA SYNTAXA
for (let i = 0; i <= 20; i++) {
  console.log(`Number: ${i}`);
}

function printNames(namesInArray) {
  for (let i = 0; i < namesInArray.length; i++) {
    console.log(`Name: ${namesInArray[i]}`);
  }
}

printNames(arrayOfNames);

// **** BREAK AND CONTINUE ****
console.log("** BREAK");

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(`Name is ${arrayOfNames[i]}`);
  if (arrayOfNames[i] === "Coca-cola") {
    console.log(`We are at ${arrayOfNames[i]} and we will break the loop`);
    break;
  }
}

console.log("** CONTINUE");
for (let index = 0; index < arrayOfNames.length; index++) {
  console.log(`Name is ${arrayOfNames[index]}`);
  if (arrayOfNames[index] === "Coca-cola") {
    console.log(
      `We are at ${arrayOfNames[index]} and we will continue the loop`
    );
    continue;
  }
}

let dummyArray = [1, 2, 3, "Hello world", "Hello again"];
console.log(dummyArray);
console.log(dummyArray[3]);

let phoneBrands = ["Samsung", "Huawei", "iPhone"];

console.log("** FOR OF **");

for (let phone of phoneBrands) {
  console.log(phone);
}
