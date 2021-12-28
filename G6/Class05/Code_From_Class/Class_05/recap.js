function celToFah(celsuius) {
  let fah = celsuius * 1.8 + 32;
  return fah;
}

let userInput = parseInt(prompt("Please insert Celsius"));

let result = celToFah(userInput);
console.log("In Fah is: ", result);

// let a = 10;
// let b = 20;
let a = parseInt(prompt("Insert first number"));
let b = parseInt(prompt("Insert second number"));

function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = sumTwoNumbers(a, b);
