console.log("Connected");

// 1. Write a js func that accepts two integers and displays the larger
console.log("******* 1 *******");

/**
 * - Deklariraj funkcija
 * - Funkcijata da prima dva parametri: numberOne, numberTwo
 * - Da proverime koj broj e pogolem i da go vratime toj broj
 */

let numberOne = 3;
let numberTwo = 1;

let firstNumber = 7394;
let secondNumber = 1235;
//                             2         5
function printLargerNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

// function printLargerNumber(numberOne, numberTwo) {
//   if (firstNumber > secondNumber) {
//     console.log(firstNumber);
//   } else {
//     return secondNumber;
//   }
// }

let largerNumber = printLargerNumber(2, 5);
console.log(largerNumber);
// document.write(printLargerNumber(2, 5));
let largerNumberSecond = printLargerNumber(numberOne, numberTwo);
console.log(largerNumberSecond);
let largerNumberThird = printLargerNumber(1251, 8823);
console.log(largerNumberThird);

// 2. Func that accepts name, lastname and age as parametars and returns short story
console.log("******* 2 *******");
//                        John   Doe     26
function printStoryOfUser(name, lastName, age) {
  return `Hello, I am ${name} ${lastName} and I am ${age} years old.`;
}
let myLastName = "Doe";

let userStory = printStoryOfUser("John", myLastName, "26");
let userStorySecond = printStoryOfUser("Bob", myLastName, "28");
console.log(userStory);
console.log(userStorySecond);

// 3. Write a func that will accept list of fruits and print in console.
console.log("******* 3 *******");

let myFruits = ["Banana", "Ananas", "Apple", "Avocado", "Tomatoe"];

function printListOfFruits(fruitsList) {
  for (let i = 0; i < fruitsList.length; i++) {
    console.log(`${i + 1}. ${fruitsList[i]}`);
    if (fruitsList[i] === "Blueberry") {
      // Break ili Return vikaat da izlezeme od lupot t.e. loop-ot za zavrshi so iteriranje
      //break;
      //return;
      continue;
    }
  }
}

printListOfFruits(myFruits);
printListOfFruits(["Strawberry", "Blueberry", "Raspberry"]);

// 4. Write a js func that will accept a string as input, and print which character is at what position
//return false if string is invalid
console.log("******* 4 *******");

// George
// 1.G 2.e 3.o 4.r 5.g 6.e
function checkPositionOfCharacterInString(stringValue) {
  /**
   * ke proverime dali stringot e navistina string
   *
   */
  // ke probame da go isparsirame t.e. da ja promenime vrednosta od string vo broj
  let parsedString = parseFloat(stringValue);
  console.log(parsedString);
  // proveruvame dali isparsiraniot string NE E BROJ (isNaN) NaN = not a number
  let checkIfStringAintNumber = isNaN(parsedString);

  console.log(checkIfStringAintNumber);
  let characters = "";

  if (stringValue === "" || !checkIfStringAintNumber) {
    return "Ehehehe you must enter valid string";
  } else {
    for (let i = 0; i < stringValue.length; i++) {
      characters += `${i + 1}.${stringValue[i]} `;
    }
  }

  return characters;
}

let characters = checkPositionOfCharacterInString("George");
console.log(characters);
let charactersInvalid = checkPositionOfCharacterInString("5");
console.log(charactersInvalid);
let charactersInvalidSecond = checkPositionOfCharacterInString(1235);
console.log(charactersInvalidSecond);
let charactersInvalidThird = checkPositionOfCharacterInString("");
console.log(charactersInvalidThird);

// 5. Write a js func that will iterate through given numbers and will print if number is even or odd
console.log("******* 5 *******");

function printNumbers(arrayOfNumbers) {
  let numbersInfo = "";

  if (arrayOfNumbers.length === 0) {
    return "Sorry bro please provide a valid array";
  } else {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] % 2 === 0) {
        numbersInfo += `${arrayOfNumbers[i]} is even. \n`;
      } else {
        numbersInfo += `${arrayOfNumbers[i]} is odd. \n`;
      }
    }
    return numbersInfo;
  }
}

let printNumbersDeatailsFalsy = printNumbers([]);
console.log(printNumbersDeatailsFalsy);
let printNumbersDetailsTruthy = printNumbers([
  1, 2, 3, 51, 7, 423, 5, 7, 2, 3, 5, 6, 10,
]);
console.log(printNumbersDetailsTruthy);

let arrCostum = [1, 2, 3, 4, 5, 6];

function evenOddSum(arr) {
  let helperArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) helperArray.push(arr[i] * 2);
    else helperArray.push(arr[i] * 3);
  }
  return helperArray;
}

let evenOrOddNumbers = evenOddSum(arrCostum);
console.log(evenOrOddNumbers);

let evenOrOddNumbersSecond = evenOddSum([2, 4, 2, 21]);
console.log(evenOrOddNumbersSecond);

// DOM - EVENTS

// 6. Mini calculator, create 2 inputs, and 2 buttons.
// <!-- PRVA -->

let numberOneInput = document.getElementById("numberOne");
let numberTwoInput = document.getElementById("numberTwo");
let divideBtn = document.getElementById("divideBtn");
let multyBtn = document.getElementById("multyBtn");
let resultOfCalc = document.getElementById("resultOfCalc");

// operand => *  /
function calculateNumbers(firstNumber, secondNumber, operand) {
  console.log(firstNumber, secondNumber, operand);
  console.log(typeof firstNumber, typeof secondNumber, typeof operand);

  let parsedNumberOne = parseFloat(firstNumber);
  let parsedNumberTwo = parseFloat(secondNumber);

  if (isNaN(parsedNumberOne) || isNaN(parsedNumberTwo)) {
    alert("Please provide valid numbers");
  } else {
    if (operand === "*") {
      resultOfCalc.innerText =
        "Result is: " + parsedNumberOne * parsedNumberTwo;
    }
    if (operand === "/") {
      resultOfCalc.innerText =
        "Result is: " + parsedNumberOne / parsedNumberTwo;
    }
  }
}

divideBtn.addEventListener("click", function () {
  calculateNumbers(numberOneInput.value, numberTwoInput.value, "/");
});

multyBtn.addEventListener("click", function () {
  calculateNumbers(numberOneInput.value, numberTwoInput.value, "*");
});

// <!-- VTORA -->
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let clickButton = document.getElementsByTagName("button");
let parentDiv = document.querySelector("#parentDiv");
let resultDiv = parentDiv.lastElementChild;

console.log(clickButton[2]);

clickButton[2].addEventListener("click", function () {
  resultDiv.innerHTML += `<span style="color: pink"> User is: ${firstNameInput.value} ${lastNameInput.value}  </span>`;
  firstNameInput.value = "";
  lastNameInput.value = "";
});

// <!-- TRETA -->

let userInputText = document.getElementById("userInputText");
let userColor = document.getElementById("userColor");
let textResult = document.getElementById("textResult");
let btnGenerator = document.getElementById("btnGenerator");

function generateTextWithColor(userTextInput, userColorInput) {
  textResult.innerHTML = "";
  textResult.innerHTML = `<h3 style="color: ${userColorInput};">${userTextInput}</h3>`;
}

btnGenerator.addEventListener("click", function () {
  generateTextWithColor(userInputText.value, userColor.value);
});

// <!-- CHETVRTTA -->
// CREATE TODO LIST

let todoInput = document.getElementById("todoInput");
let printTodoResult = todoInput.nextElementSibling;
let todoBtn = document.getElementById("todoBtn");

let todos = [];

function addTodo(userTodoInput) {
  if (userTodoInput === "") {
    alert("Please enter a todo");
  } else {
    todos.push(userTodoInput);
  }
}

function printTodos(elementsForRes, todoArray) {
  elementsForRes.innerHTML = "";

  elementsForRes.innerHTML += "<ul>";
  for (let i = 0; i < todoArray.length; i++) {
    elementsForRes.innerHTML += `<li>${todoArray[i]}</li>`;
  }
  elementsForRes.innerHTML += "</ul>";
}

todoBtn.addEventListener("click", function () {
  addTodo(todoInput.value);

  if (todos.length > 0) {
    printTodos(printTodoResult, todos);
    todoInput.value = "";
  }
});
