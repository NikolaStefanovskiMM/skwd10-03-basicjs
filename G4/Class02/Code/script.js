console.log('Js basic');

// ---------- Ways of declaring variables ----------
// VAR, LET and CONST
console.log('---------- Ways of declaring variables ----------');
// var
var myVar = 2;
// 100 lines later...
// var myVar = 5;
myVar = 7;
console.log('Var ' + myVar);
// var lets us redeclare variables and give new values

// let
let myLet = 12;
// 100 lines later...
// let myLet = 15;
myLet = 15;
// let doesn't allow us to redeclare variable but we can give new value
console.log('Let ' + myLet);

// const
const myConst = 20;
// myConst = 21;
// const does not allow to redeclare nor to give new value
console.log('Const ' + myConst);

// ---------- STRINGS ----------

console.log('---------- STRINGS ----------');
// Concatanation of strings
let myFirstString = 'Hello';
let concatanatedString = myFirstString + ' Petre!';
console.log(concatanatedString);

// if one of the sides is not a string, JS will convert it to string
let weirdOperation = "2" + 4;
// let weirdOperation = "2" + (4 + "5");
console.log(weirdOperation);

//types of concatenating string
let string01 = myFirstString + " Pane";
// ES6 fancy feature
let string02 = `Hello
from
multiline
string!`;
let string03 = `!!${myFirstString} Mike!!`;
let string04 = `Sum of number ${5} and number ${10} is ${5+10}`;
// alternative and ugly
let sum = 5 + 10;
let altString04 = "Sum of number" + " " + 5 + " " + "and number" + " " + 10 + " " + "is" + " " + sum;

console.log(string01);
console.log(string02);
console.log(string03);
console.log(string04);
console.log(altString04);

// ---------- NUMBERS ----------
console.log('---------- SPECIAL NUMBERS ----------');

// let operationWithString = "bob 'Bobski'";
let operationWithString = 10 - "bob";
console.log('Weird operation: ', operationWithString);
console.log(typeof(operationWithString));
console.log(isNaN('bob'));
// ES6 with Number.isNan()
let isOperationNaN = Number.isNaN(operationWithString);
console.log('Are you NaN, or what?!?', isOperationNaN);

// ---------- LOGICAL OPERATORS ----------
console.log('---------- LOGICAL OPERATORS ----------');

//Operations
let operation01 = 5 > 3;  //true
let operation02 = (4 + 5) === (2 + 7); //true
let operation03 = ("2" + "3") == (19 + 4); //true

console.log('operation 01', operation01);
console.log('operation 02', operation02);
console.log('operation 03', operation03);

let operation04 = (2 > 3) && (5 == "5"); //false
let operation05 = true || !(3 === "3"); //true
let operation06 = ((2 + 5) < 7) || false; //false
let operation900 = ((2 < 5) && (2 == 2)) && operation05; //true
let operation1000 = ((6 < 5) && (2 == 2)) || operation05;

console.log(operation04);
console.log(operation05);
console.log(operation06);
console.log(operation900);
console.log(operation1000);

let operationBonus1 = "bob" && 25467889;
let operationBonus2 = "bob" || 25467889;
let operationBonus3 = "" || 25467889;

console.log(operationBonus1);
console.log(operationBonus2);
console.log(operationBonus3);

console.log('---------- CONTROL ATRUCTURES ----------');
console.log('---------- IF / ELSE ----------');

let score = 197;

if(score > 100){
    console.log('You won');
    if(score > 150){
        console.log('You won double bonus!!!!!!');
    }
    // else{
    //     console.log('You did not won double bonus!!!!!!');
    // }
}
else if(score === 100){
    console.log('You saved yourself!');
}
else {
    console.log(`You didn't win ${score}`);
}

console.log('---------- EXERCISE ----------');
// How to get input from user
let input = prompt("Enter your friday cash:");
console.log(input);
let fridayCash = parseInt(input);
console.log(typeof(fridayCash));

if(fridayCash >= 50){
    console.log('You should go out to a dinner and a movie');
}
else if(fridayCash >=35){
    console.log('You should go out toa a fine meal');
}
else if(fridayCash >=10){
    console.log('You should go see a movie!');
}
else{
    console.log(`Looks like you'll be watching TV!`);
}