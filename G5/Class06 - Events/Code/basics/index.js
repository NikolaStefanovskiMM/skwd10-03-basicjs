// // OVDE KAZHUVAME document.body SLUSAJ!! NA OVOJ EVENT! (ondblclick)
// document.body.ondblclick = function () {
//   console.log("test");
//   document.body.style.backgroundColor = "pink";
// };

// document.body.onmousemove = function () {
//   console.log("Mouse is moving");
// };
let greetContainer = document.getElementById("greet_container");
let toggleButton = document.getElementById("toggle_btn");
let productsContainer = document.getElementById("products_container");

// ************ HTML EVENT HANDLERS ************
function greetingMessage() {
  alert("Hello user :)");
}

let isDisplayed = false;
function toggleGreetContainer() {
  let lastDivChild = greetContainer.lastElementChild;

  if (isDisplayed) {
    lastDivChild.innerText = "We learn about events in javascript amigo :)";
    toggleButton.innerHTML = "HIDE TEXT";
  } else {
    lastDivChild.innerText = "";
    toggleButton.innerHTML = "SHOW TEXT";
  }
  console.log("Is displayed w/o NOT operator", isDisplayed);

  console.log("Is displayed with NOT operator", !isDisplayed);
  isDisplayed = !isDisplayed;
}

let productsList = ["Nice looking bag", "Woman Jacket", "T-Shirt"];

function printProducts(products) {
  console.log("We are here");
  productsContainer.innerHTML = "";
  productsContainer.innerHTML += "<ul>";
  for (let i = 0; i < products.length; i++) {
    console.log("We are inside the loop", products[i]);
    productsContainer.innerHTML += `<li>${products[i]}</li>`;
  }

  productsContainer.innerHTML += "</ul>";
}

// ************ BETTER PRACTICE EVENT HANDLERS ************

let textToChange = document.getElementById("textToChange");
let changeTextBtn = document.getElementById("change_text_btn");
let headingToBeClicked = document.getElementById("headingToBeClicked");
let loremText = document.getElementById("loremText");
let myInput = document.getElementById("myInput");

function changeBtnText() {
  textToChange.innerText = "Yep the text has been changed :)";
}

changeTextBtn.onclick = changeBtnText;
// changeTextBtn.onclick = changeBtnText()
// changeTextBtn.onclick = changeBtnText(); BAD!

headingToBeClicked.onclick = function () {
  alert("Huuraayyyyy you have clicked me");
};

loremText.onmouseenter = function () {
  console.log("You hovered over the text :)");
};

loremText.onmouseleave = function () {
  console.log("You exited the text :)");
};

//EVENT PARAMETAR E SPECIJALEN PARAMETAR
//ZA FUNKCIITE KOISTO SE POVIKANI OD SAMIOT EVENT :)
//I SAMO TIE MOZHAT DA PRISTAPAT DO OVOJ SPECIJALEN PARAMETAR/ARGUMENT
function onUserInput(event) {
  console.log(event);
  console.log("Something is chaning in the input =))");
}

myInput.oninput = onUserInput;

// ************ EVENT LISTENERS ************

let moviesBtn = document.getElementById("moviesBtn");
let moviesContainer = document.getElementById("moviesContainer");
let sayHelloHeading = document.getElementById("sayHelloHeading");
let userNameInput = document.getElementById("userNameInput");
let loginBtn = document.getElementById("loginBtn");

let moviesArray = ["Harry Potter", "The Godfather", "Avatar"];

function printMovies() {
  moviesContainer.innerHTML = "";
  moviesContainer.innerHTML += "<ol>";
  for (let i = 0; i < moviesArray.length; i++) {
    moviesContainer.innerHTML += `<li>${moviesArray[i]}</li>`;
  }
  moviesContainer.innerHTML += "</ol>";
}

moviesBtn.addEventListener("click", printMovies);

function sayHello(message) {
  alert(message);
}

sayHelloHeading.addEventListener("dblclick", function () {
  sayHello(`This message is sent as argument in event listeners!`);
});

let userName = "";

function printUserName(event) {
  console.log(event.target.value);
  userName = event.target.value;
}

userNameInput.addEventListener("input", printUserName);
//isti se i dvata primera
// userNameInput.addEventListener("input", function (event) {
//   printUserName(event);
// });

loginBtn.addEventListener("click", function () {
  console.log(`User name: ${userName}`);

  // MOZEME DA GO IZBRHEME SAMIOT EVENT LISTENER!
  userNameInput.removeEventListener("input", printUserName);
});

// *********** PHONE BOOK EXERCISE ************

let phoneBookID = document.getElementById("phoneBookID");
let addToPhoneBook = document.getElementById("addToPhoneBook");
let phoneBookContainer = document.getElementById("phoneBookContainer");
let errorMessage = document.getElementsByTagName("span");

let contact = "";
//Reden broj na kontakt listata :)
let contactIndex = 1;
phoneBookID.addEventListener("input", function (event) {
  contact = event.target.value;
});

addToPhoneBook.addEventListener("click", function () {
  if (contact === "") {
    console.log("wrong input");
    errorMessage[0].style.display = "block";
    errorMessage[0].style.color = "red";
    phoneBookID.style.borderBlockColor = "red";
  } else {
    errorMessage[0].style.display = "none";
    errorMessage[0].style.color = "black";
    phoneBookID.style.borderBlockColor = "black";
    phoneBookContainer.innerHTML += `<p>${contactIndex}. ${contact}</p>`;
    phoneBookID.value = "";
    contact = "";
    contactIndex++;
  }
});

let parentDiv = document.getElementById("parentDiv");
let childDiv = document.getElementById("childDiv");

parentDiv.addEventListener("click", function () {
  console.log("Parent div was clicked");
});

childDiv.addEventListener("click", function (event) {
  // koristime event.stopPropagation() za da prevenirame na
  // child elementot go trigerira eventot i na negoviot parent
  //dokolku go delat istiot event
  // vo nashiot slucaj i child i parent div-ot go delat istiot event "click"
  //i dokolku ne koristime event.stopPropagation(), child-ot ke go trigerira (rais-ne)
  // eventot na samiot parent.
  event.stopPropagation();

  //event.preventDefault(); se koristi za da se prevenira default-niot behaveur na samiot
  //event =).
  event.preventDefault();

  console.log("Child div was clicked");
});
