console.log("Connected");

// Combining string;
console.log("******* STRINGS CONCATANATION ******");

let firstName = "George";
var lastName = "Dimitrov";
let age = 26;

// String concatanation

//dont mind the comment pls
//prettier-ignore
console.log(
  "Hello," + "my name is " + " " +firstName + " " +lastName +  " and I am " + age + " old."
);

let randomNumber = "Number: " + 1;
console.log(randomNumber);
console.log(typeof randomNumber);

let groupName = "G";
let groupNumber = 5;
console.log("We are " + groupName + groupNumber + " group");
console.log("G" + 5);

console.log("Result is: ", 4 + "5");
console.log("100" + 1);

console.log(5 * 5 - 4 / 2 + "100");

//ECMASCRIPT 2015 ili ES6
//string interpolation

console.log("******* STRINGS INTERPOLATION ******");

let mentorOne = "Aleksandar Manasiev";
let mentorTwo = "George Dimitrov";

let mentors_information = `Mentors of this group are ${mentorOne} and ${mentorTwo}`;

console.log(mentors_information);
console.log("Hello \nworld");
let bananaSmoothieIngrediants = `1. Milk; 2.Banana
3.Almonds; 4.Honey;
5.Peanut Butter;
`;
console.log(bananaSmoothieIngrediants);

let forestFruits = "Forest fruits";
let price = 100 + 50;

let forestFruitsSmoothie = `1.${forestFruits}; 2.Blueberry Juice;
3.Banana; Price: ${price}`;

console.log(forestFruitsSmoothie);

console.log("It's going to rain tomorrow");

// console.log('It's going to rain tomorrow '); Javascript compains :(

//prettier-ignore
console.log("With espace character: ", 'It\'s going to rain tomorrow ');

//SPECIAL NUMBERS;
console.log("******* SPECIAL NUMBERS ******");

let invalidNumber = 2 * "Hello";
console.log(invalidNumber); // NaN
console.log(typeof invalidNumber);

console.log(451 * undefined);

console.log(10 + "World"); //String concatanation

console.log(undefined / false);

console.log(isNaN(invalidNumber)); // isNaN proveruva dali vrednosta NE E BROJ! I sekogash vrakja TRUE ili FALSE

let nextYearValue = 2022;

console.log(isNaN(nextYearValue));
console.log(isNaN("Hello World"));

//INFINITY

let positiveInfinite = 1 / 0;
let negativeInfinite = -1 / 0;

console.log("Positive infinite: ", positiveInfinite);
console.log("Negative infinite: ", negativeInfinite);

console.log(1000000 > positiveInfinite);
console.log("The type of inifnite: ", typeof positiveInfinite);

let infiniteValue = Infinity;
let negativeInfiniteValue = -Infinity;

console.log(infiniteValue);

// LOGICAL OPERATORS
console.log("****** LOGICAL OPERATOR ******");

// &&, ||, !  KE NI VRATAT BOOLEAN VREDNOST (TRUE ILI FALSE)

// DOKOLKU GI KORISTIME SO NE BOOLEAN (TRUE/FALSE) VREDNOSTI, KE VRATAT NE BOOLEAN(TRUE/FALSE) VREDNOST

console.log("** && -> AND **");

// && KE NI VRATI TRUE SAMO AKO DVATA OPERANDI SE TRUTHY VREDNOSTI ILI VRAKJAAT TRUE
//           TRUE      TRUE
console.log(2 > 1 && 10 < 100);

let myAge = 26;
let minimumAgeRequirement = 18;

let canIGoToDisco = myAge > minimumAgeRequirement;
let isItSaturday = "Saturday";

console.log(canIGoToDisco && isItSaturday === "Saturday"); // RETURNS TRUE BECAUSE THE TWO OPERANDS ARE TRUTHY

let kidsAge = 15;

let canKidGoToDisco = kidsAge > minimumAgeRequirement;

console.log(canKidGoToDisco && isItSaturday === "Saturday"); // RETURNS FALSE BECAUSE ONE OF THE OPERANDS IS FALSE;

// KOGA IMAME 2 TRUTHY VREDNOSTI OPERATOROT JA VRAKJA VTORATA TRUTHY VREDNOST
console.log(26 && "Hello world");
console.log("Hello world" && 26);

// KOGA IMAME 2 FALSY VREDNOSTI JA VRAKJAAT PRVATA FALSY VREDNOST
console.log(undefined && 0);
console.log(0 && false);
console.log(0 && canKidGoToDisco);
// KOGA IMAME 1 TRUE/TRUTHY VREDNOST A TRUGATA E FALSE ILI FRALSY VREDNOST KE JA VRATI FALSY VREDNOSTA
console.log(0 && 3 > 1);
console.log(5 > 1 && undefined);
console.log("Hello world" && undefined);

console.log("** || -> OR **");

// OR OPERATOROT || ( LOGICAL OR ) KE NI VRATI TRUE DOKOLKU BAREM EDNA OD VREDNOSTITE E TRUE

let isSchoolWeekOver = true;
let isHomeWorkFinished = false;

let canIGoOut = isSchoolWeekOver || isHomeWorkFinished;

console.log("Can I go out? ", canIGoOut);

console.log(2 > 10 || 10 < 100);

// KOGA IMAME 2 TRUTHY VREDNOSTI, OR OPERATOROT JA VRAKJA PRVATA TRUTHY VREDNOST
console.log(26 || "Hello world");
console.log("Hello class" || "Hello world");
// KOGA IMAME 2 FALSY VREDNOSTI, OR OPERATOROT JA VRAKJA VTORATA FALSY VREDNOST
console.log(undefined || 0);
console.log(undefined || 5 < 2);
// KOGA IMAME 1 TRUE/TRUTHY VREDNOST A DRUGATA E FALSE ILI FALSY VREDNOST JA ZIMA SEKOGASH TRUTHY VREDNOST
console.log("Helloo what's up? " || undefined);
console.log(0 || "Hello class");

let userGenderInput;
console.log("User gender is:", userGenderInput);

console.log(`User entered gender ${userGenderInput || "woman"}`);

console.log("** ! -> NOT **");

console.log(!true);
console.log(!userGenderInput);

let nameLessString = "";
console.log(!nameLessString);

console.log(40 > "36");
console.log(40 > "test");

console.log("****** CONTROL STRUCTURES ******");

// if (10 > 5) {
//   alert("Yes, 10 is bigger then 5 ");
// }

// if (canIGoOut) {
//   alert("Yes you can go out :)");
// } else {
//   alert("No you can't :(");
// }

// let movieName = "Harry Potter";
// let movieName = "Lord of the rings";

// if (movieName === "Harry Potter") {
//   alert("Best movie :)");
// } else {
//   alert(`${movieName} is still a good movie :))`);
// }

// if (movieName === "Harry Potter" || movieName === "Lord of the rings") {
//   alert("Best movie :)");
// } else {
//   alert(`${movieName} is still a good movie :))`);
// }

// ELSE IF

let dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
  console.log("Well... the week is getting started");
} else if (dayOfWeek === "Tuesday") {
  console.log("UEFA Champions legue night, sorry girls ");
} else if (dayOfWeek === "Wednesday") {
  console.log("It's wednesday my duuudees");
} else {
  console.log("No matter what day it is :)) ");
}

// NESTED IF STATEMENTS
let isItHoliday = true;

if (dayOfWeek === "Monday") {
  // isItHoliday === true
  if (isItHoliday) {
    console.log("Extended weekend");
  } else {
    console.log("Well, more luck next time");
  }
}

// GETTING INPUT FROM USER WITH PROMPT

// PROMPT

// let userName = prompt("Hello amigo, please enter your name:");
// console.log("User entered name: " + userName);

// let lastNamePrompt = prompt("Hello amigo, please enter you last name:");

// console.log(`User full name is: ${userName} ${lastNamePrompt}`);

// SE SHTO KE VPISAME NA PROMPTOT KE DOJDE KAKO STRING;

// let promptNumber = prompt("Enter first number");
// let promptSecondNumber = prompt("Enter second number");

// console.log(promptNumber);
// console.log(typeof promptNumber);

// console.log(parseInt(promptNumber));
// console.log(parseFloat(promptSecondNumber));

// console.log(
//   "Result is:",
//   parseInt(promptNumber) + parseFloat(promptSecondNumber)
// );

// parseInt => KONVERTIRA STRING VO BROJ
// parseFloat =>  KONVERTIRA STRING VO BROJ, NO ISTO TAKA, KONVERTIRA I DECIMALI 11.2

// let promptUserInputNumber = parseInt(prompt("Enter number:"));
// let promptSecondUserInputNumber = parseInt(prompt("Enter number:"));

let promptUserInputNumber = parseFloat(prompt("Enter number:"));
let promptSecondUserInputNumber = parseFloat(prompt("Enter number:"));

console.log(typeof promptUserInputNumber);

console.log(promptUserInputNumber + promptSecondUserInputNumber);

let userInput = "1995"; //prompt

let chineseZodiacFormula = (userInput - 4) % 12;

//if(){}else{}
