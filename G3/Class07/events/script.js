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