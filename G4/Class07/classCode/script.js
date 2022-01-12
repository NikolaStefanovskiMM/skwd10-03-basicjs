console.log('Hi G4');

let myBtn = document.getElementById('myDiv').lastElementChild;
// let myBtn = document.getElementsByTagName('button')[0];
// let myBtn = document.querySelector('button');
console.log(myBtn);

// --------------- Traditional DOM Event Handlers ------------------------

function saySomething() {
    alert('Hello G4');
}
// WRONG !!!!
// myBtn.onclick = saySomething();

 myBtn.onclick = saySomething;
//  console.log(saySomething);

myBtn.onclick = function() {
    console.log('Hello G4');
}

// ---------------- Event Listeners --------------- 

//Getting values from input 

let input = myBtn.previousElementSibling;
let greetBtn = document.getElementById('greetBtn');

function greetSomeone() {
    let name = input.value;
    console.log(name)
    alert(`Hello ${name}`);
    input.value = '';
}

greetBtn.addEventListener('click', greetSomeone, false);

// Getting values from input with anonymous function and event object

let dynamicInput = document.getElementById('dynamic-input');
dynamicInput.addEventListener('keyup', function(event) {
    let inputValue = event.target.value;
    console.log(inputValue);
    // call other function
    // alert("I am inside the anonymous function");
    // greetSomeone();
});

// using parameters with event handlers

function sumNumbers(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

let sumBtn = document.querySelector('#sumBtn');
// sumBtn.addEventListener('click', sumNumbers(2, 9), false);


sumBtn.addEventListener('click', function() {
    sumNumbers(2, 9);
    // 200 lines code
}, false)

// Exercise 2 

let paragraphToChange = document.getElementById('changeStyle');
let changeBtn = document.querySelector('#changeTextBtn');

changeBtn.addEventListener('click', function() {
    paragraphToChange.style.fontSize = '35px';
    paragraphToChange.style.color = 'red';  
    paragraphToChange.style.backgroundColor = 'green'
})


// Exercise 3

let fname = document.getElementById('firstName');
let lname = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let regBtn = document.getElementById('register');
let showUser = document.getElementById('showUser');

function getUserInfo(fname, lname, email, password) {
    let passDots = '';

    for(let i = 0; i < password.length; i++) {
        passDots += '*';
    }

    return `First Name: ${fname}
    Last Name: ${lname}
    Email: ${email}
    Password: ${passDots}`
}

regBtn.addEventListener('click', function() {
    showUser.innerText = '';
    let inputFirstName = fname.value;
    let inputLastName = lname.value;
    let inputEmail = email.value;
    let inputPassword = password.value;

    let userInfo = getUserInfo(inputFirstName, inputLastName, inputEmail, inputPassword);

    fname.value = ''
    lname.value = ''
    email.value = ''
    password.value = ''

    showUser.innerText = userInfo;
})



