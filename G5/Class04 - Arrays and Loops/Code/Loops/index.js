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
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
console.log("Kvadrat: ", Math.pow(2, 2));
console.log("Kvadrat 2: ", 2 ** 2);

let iteratorNumber = 101;
let sum = 0;
while (iteratorNumber <= 150) {
  //   console.log(Math.pow(iteratorNumber, 2));
  // sum = sum + Math.pow(iteratorNumber, 2);
  sum += Math.pow(iteratorNumber, 2);
  iteratorNumber++;
}
console.log(`The sum is: ${sum}`);
