// -------------- JAVASCRIPT WORKSHOP ----------------


// 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.
// 30 mins

// let userNumber = parseInt(prompt("Enter number"))

// function insertDashes(number) {
//     let numbersArray = number.toString().split('').map(Number);
//     let sortArray = [];
//     for(let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i] % 2 === 0 && numbersArray[i + 1] % 2 === 0) {      
//             sortArray.push(numbersArray[i], "-");
//         } else {
//             sortArray.push(numbersArray[i]);
//         }
//     }   
//     return sortArray.join('');
// }

// console.log(`Result is ${insertDashes(userNumber)}`);


// 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
// 30 mins

// var startingArray = [];
// for (let i = 1; i <= 100; i++) {
//   startingArray.push(i);
// }

// let startingArray = Array.from(Array(100).keys()) 
// console.log(Array.from(Array(100).keys()))

// function numbersDivisible(numbers) {
//     let resultArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 7 === 0 && numbers[i] % 3 === 0) {
//             resultArray.push(numbers[i]);
//         }
//     }
//     return resultArray;
// }
// console.log(`Numbers divisible by 3 and 7 are: ${numbersDivisible(startingArray)} `);


// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins

// when using inputs in forms, if you want the page not to reload (and lose the text message) use the event parameter (event) inside the event and write event.preventDefault() in the anonymous function

let balance = 1500.0;

function getBalace() {
    alert(`Your current balance is ${balance}.`);
    atm();
}

function makeDeposit(deposit) {
    if(isNaN(deposit) || deposit === "") {
        alert("Error: please enter a valid amount of money!")
        atm();
    } else {
        balance += deposit;
        getBalace();
    }
}

function makeWithdrawal(withdraw) {
    if(isNaN(withdraw) || withdraw === "") {
        alert("Error: please enter a valid amount of money!")
        atm();
    } else {
        balance -= withdraw;
        getBalace();
    }
 }

 function exit() {
     let confirm = window.confirm("yes / no");

     if(confirm) {
        window.close();
     } else {
        atm();
     }
 } 

 function error() {
     alert("Wrong input!");
 }

function atm() {
    let choice = parseInt(prompt("Select a choice: 1). Balance 2). Deposit 3). Withdrawal 4). Exit"))

    if(choice === 1) {
        // function that gets balance
        getBalace();
    } else if (choice === 2) {
        // function that adds a deposit
        let deposit = parseFloat(prompt("How much money would you like to deposit?"))
        makeDeposit(deposit);
    } else if (choice === 3) {
        let withdraw = parseFloat(prompt("How much money would you like to withdraw?"))
        makeWithdrawal(withdraw)
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}  

atm();
