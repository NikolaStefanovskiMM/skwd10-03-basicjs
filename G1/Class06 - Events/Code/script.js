// First way of binding an event to an element
function hideElementDescription() {
  var elementDescription = document.getElementById('elementDescriptionId');

  elementDescription.style.display = "none";
}

// Second way of binding an event to an element
var secondElement = document.getElementById('secondWayOfBindingElement');

function changeColorOfElementOnFocus() {
  secondElement.style.color = 'red';
}

function changeColorOfElementOnBlur() {
  secondElement.style.color = 'green';
}

secondElement.onfocus = changeColorOfElementOnFocus;
secondElement.onblur = changeColorOfElementOnBlur;

// Overwrite of event on some element
let helloButton = document.getElementById('btnHello');

function sayHello() {
  console.error('HELLO G1!');
}

function whoIsTheWinner() {
  console.error('WE ARE THE WINNER!');
}

helloButton.onclick = sayHello;
helloButton.onclick = whoIsTheWinner;

// Third way of binding an event to an element
const sumOfTwoNumber = () => {
  var inputOneNumber = Number(document.getElementById('firstNumberFromInput').value);
  var inputTwoNumber = Number(document.getElementById('secondNumberFromInput').value);

  if (isNaN(inputOneNumber)) inputOneNumber = 0;
  if (isNaN(inputTwoNumber)) inputTwoNumber = 0;

  alert(`The sum of the first and second input is ${inputOneNumber + inputTwoNumber}`);
}

document.getElementById('sumOfTwoNumbers').addEventListener('click', sumOfTwoNumber)

// Double click event
document.getElementById('btnDBClick').addEventListener('dblclick', function(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.shiftKey);
  console.log(event.type);
  console.log(event.x + " " + event.y);
});


// On press enter
function onEnterPress(event) {
  console.log(event.target.value);

  if (event.keyCode == 13) {
    alert(`${event.target.value}`);
  } else {
    console.error(`${event.target.value}`);
  }
}

document.getElementById('SEDC-G1').addEventListener('keypress', function(event) {
  onEnterPress(event);
  sumOfTwoNumber();
});

// How useCapture works?
window.addEventListener('click', function(){console.error('The process number', 1)}, false);
window.addEventListener('click', function(){console.error('The process number', 2)}, true);
window.addEventListener('click', function(){console.error('The process number', 3)});
window.addEventListener('click', function(){console.error('The process number', 4)}, true);