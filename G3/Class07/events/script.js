function sayHello() {
    let a = 3;
    let b = 5;
    let result = a + b;
    console.log(result);
    alert("Hello you just raised and handled an event");
}

let counter = 0;
function printMessageInConsole() {
    counter += 1;
    console.log(`Counter is: ${counter}`);
}

let element = document.getElementById("btn-traditional");
//element.onclick = printMessageInConsole;
// element.onclick = function () {
//     console.log("I have been clicked");
// }

// function sayHello() {
//     alert("Hello World");
// };
// element.onclick = sayHello;

// function iWon() {
//     alert("I'm the WINNER");
// };
// element.onclick = iWon;

// function abc() {
//     console.log("Hello");
// }

// console.log(abc());

let divElement = document.getElementById("someDiv");

// divElement.addEventListener('click', function () {
//     alert("Called by event listener");
// });

// function sayHello2() {
//     alert("Hello from addEventListener");
// }

// divElement.addEventListener('click', sayHello2);
// divElement.addEventListener('mouseover', function () {
//     console.log("On Blur");
// });

// divElement.addEventListener('click', function (event) {
//     console.log(event);
// })

let inputElement = document.getElementById('username');
inputElement.addEventListener('blur', function (event) {
    console.log(event.target.value);
});

inputElement.addEventListener('keydown', function (event) {
    console.log(event.target.value);
});