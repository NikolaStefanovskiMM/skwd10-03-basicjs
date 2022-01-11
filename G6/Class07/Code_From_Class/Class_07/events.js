function onButtonClick() {
  alert("Button was clicked");
}

function onFocus() {
  console.log("The mouse is over me");
}

function onLeave() {
  console.log("The mouse is not over me anymore");
}

// let myFunction = function () {
//   console.log("Whatever");
// };
// myFunction();

let button = document.getElementById("clickme");

// button.onclick = onButtonClick;

// button.onclick = function () {
//   alert("Button was clicked!");
// };
// button.onmouseover = onFocus;
// button.onmouseleave = onLeave;

// button.addEventListener("click", onButtonClick);

function externalFunction() {
  console.log("I am function called in event listener");
}
function externalFunction1() {
  console.log("I am function called in event listener 1");
}

let userNameInput = document.getElementById("username");

function onBlur(event) {
  console.log(event.target.value);
}
userNameInput.addEventListener("blur", function () {
  checkUserName(5);
  console.log(userNameInput.value);
  userNameInput.value = "";
});

function checkUserName(number) {
  console.log(number);
}

button.addEventListener("click", function () {
  userNameInput.removeEventListener("blur", onBlur);
});
