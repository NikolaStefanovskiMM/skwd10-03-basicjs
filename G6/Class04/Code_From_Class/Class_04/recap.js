// let result = 1;

// if (result) {
//   alert("YOU WON");
// } else {
//   alert("YOU LOST");
// }

// if (result === 1) {
//     console.log("Monday")
// }
// else if (result === 2) {
//     console.log("Tuesday")
// }
// else if (result ===3) {
//     console.log("We")
// }

// if ((10 + 20) > (20 + 15)) {

// }

// if (("cat" && "dog") && (false || true)) {

// }

// FUNCTIONS

function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

function createFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  //   return `${firstName} ${lastName}`
  return fullName; // return "Goce Kabov"
}

// const fullName = "John Doe";
// printName("Goce Kabov");
// printName("Angel Mitrov");
// printName(fullName);

// printName("Goce", "Kabov");
// printName("Angel", "Mitrov");

// let first = prompt("Insert First Name");
// let last = prompt("Insert Last Name");

// let result = createFullName(first, last); // let result = createFullName("Goce", "Kabov")
// console.log(result);
// alert(result)

function operate(firstNumber, secondNumber) {
  return operate1(firstNumber, secondNumber) + 100;
}

function operate1(first, second) {
  return first + second;
}

let result = operate(10, 20);
console.log(result);
