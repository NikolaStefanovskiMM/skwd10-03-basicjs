// console.log("Im connected!");

let hello = "Hello" + " " + "World"; // => Hello World
console.log(hello);

// let firstName = "Trajan";
// let lastName = 'Stevkovski';

// let fullName = firstName + " " + lastName; // => Trajan + + Stevkovski => Trajan Stevkovski
// console.log(fullName);

let sedc = "SEDC";
let year = 2022;
// console.log("Year is of type before concatenation: ");
// console.log(typeof year);
let sedcYear = sedc + " " + year // => SEDC 2022
console.log(sedcYear);
// console.log("Year is of type after concatenation: ");
// console.log(typeof year);


let result = "2" + 4; // => 24
console.log(result);
let result2 = 2 + "4"; // => 24 
let result3 = 2 - "4"; // => -2
console.log(result2);
console.log(result3);

let firstName = "Trajan";
let lastName = 'Stevkovski';
let age = 33;
let gender = "M";
let address = "Skopje";

// Hi im Trajan Stevkovski i live in Skopje and im 33 years old

// let greet = "Hi im " + firstName + " " + lastName + " i live in " + address + " and im " + age + ' years old';
// console.log(greet);

// let greet2 = `Hi im ${firstName} ${lastName} i live in ${address} and im ${age} years old`;
// console.log(greet2);

// www.sedc.com/
// /students
// /subjects
// /courses

let baseUrl = "www.sedc.com/";
let courses = "courses";
let subjects = "subjects";
let students = 'students';

// we want to get all courses
// most common use
let courseUrl = `${baseUrl}${courses}/basicjs/class01`;

let quotes = " I'm ";
let double = ' I"m ';

console.log("===================================================");

let a = 2 / "foo"; // => NaN
console.log(a);
console.log(typeof a);

let isNan = isNaN(a); // => true
console.log(isNan);

let b = "foo";
console.log(isNaN(b)); // checks if b 

let isBNan = Number.isNaN(b); // b = NaN checks if b has an explicit value of NaN
console.log(isBNan);

let maxNumber = Infinity;
let minNumber = -Infinity;

// comparison

// ( (score1 + score2) > (hightScore1 + heightScore2) ) => ((result of score1 + score2) > (result of highScore1 + highScore2))
// ((1 + 2) > (3 + 4)) => 3 > 7;



// ((5 < 3) && (3 > 1)) => false && true => false;
// (((5 + 2) > (3 + 1)) && (3 - 1) === 2) => ( (7 > 4) && 2 === 2  ) => true && true => true
// (((5 + 2) > (3 + 1)) && (3 - 1) === 2) && (((5 + 2) > (3 + 1)) && (3 - 1) === 2) || (((5 + 2) > (3 + 1)) && (3 - 1) === 2) && (((5 + 2) > (3 + 1)) && (3 - 1) === 2) => this is not so good :)

//  -        -       -       -
// true && true && true && false => false
// false && true && true && true => false
//   -

// 'Cat' && "Dog" => Cat is truthy value && Dog is thruty value => true or "Dog" is thruty value

// "Cat" && "Dog" && "Mouse" => "Mouse"
// "Cat" && "" && "Mouse" => ""

// a1 = true  && true       // t && t returns true
// a2 = true  && false      // t && f returns false
// a3 = false && true       // f && t returns false
// a4 = false && (3 == 4)   // f && f returns false
// a5 = 'Cat' && 'Dog'      // t && t returns 'Dog'
// a6 = false && 'Cat'      // f && t returns false
// a7 = 'Cat' && false      // t && f returns false
// a8 = ''    && false      // f && f returns ''
// a9 = false && ''         // f && f returns false


