console.log("Connected.");

// DOM Selectors
// Selecting by ID, will return only one element
let myTitle = document.getElementById("myTitle");
console.log(myTitle);
console.log(myTitle.innerText);

// Selecting by class name, it will return HTML Collection -> array
let paragraphs = document.getElementsByClassName("myParagraph");
console.log(paragraphs);
console.log(paragraphs[0]);

let secondParagraph = document.getElementsByClassName("second");
console.log(secondParagraph);

let paragraphsByTagName = document.getElementsByTagName("p");
console.log(paragraphsByTagName);
console.log(paragraphsByTagName[0]);

// DOM Query Selectors

let paragraphsByQ = document.querySelectorAll("p");
console.log(paragraphsByQ);

let firstP = document.querySelector(".myParagraph");
console.log(firstP);
let titleQ = document.querySelector("#myTitle");
console.log(titleQ);


// Selecting Family Elements in the DOM Tree
console.log("--------Family DOM Selection -----------");

let singleParagraph = paragraphs[0];
let sibling = singleParagraph.nextElementSibling;
console.log(sibling);
console.log(sibling.innerText);

let parentElement = singleParagraph.parentElement;
console.log(parentElement);

let parentElementChildrens = parentElement.children; // Will return Collection of all children HTML elements
console.log(parentElementChildrens);

let firstChildElement = parentElement.firstElementChild;
let lastChildElement = parentElement.lastElementChild;
console.log(firstChildElement);
console.log(lastChildElement);

// Selecting last div element, can be done with .lenght - 1 too!
let lastDivElement = document.getElementsByTagName("div")[1];
console.log(lastDivElement);



// DOM Manipulation

let headTitle = document.getElementById("myTitle");
console.log(headTitle.innerText);
headTitle.innerText = "Yea, this is my new Title!";

singleParagraph.innerText += "Additional text goes here....";


let secondElementP = document.getElementsByClassName("myDiv")[1];

secondElementP.innerHTML = "";
console.log(secondElementP);

let firstName = "Aleksandar";
let secondName = "Manasiev";

secondElementP.innerHTML = `<p>Hello on our website</p>
<h3 class="someClass">Hello ${firstName} ${secondName}</h3>
<p>This is the end of our application.</p>
`;
