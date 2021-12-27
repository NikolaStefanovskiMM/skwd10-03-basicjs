// Attributes

// Check if an element has an attribute
let header = document.getElementsByTagName("h1")[0];
console.log(header.hasAttribute("class")); // Should be true since there is a class attribute
console.log(header.hasAttribute("id")); // Should be false since there is no id attribute

// Get value from an attribute
let image = document.getElementById("boss-section").children[1];
console.log(image.getAttribute("src"));

// Change value of an attribute
let sameImageElementNS = document.getElementsByTagName("h2")[0].nextElementSibling;
sameImageElementNS.setAttribute("width", "200");

// Remove attribute from an element
let sameImageElement = document.getElementsByTagName("img")[0];
sameImageElement.removeAttribute("alt");

// CSS
header.style.color = "red";
header.style.borderWidth = "2px";
header.style.borderStyle = "solid";
header.style.padding = "10px";
header.style.marginLeft = "20rem";
header.style.marginRight = "20rem";

let body = document.getElementsByTagName("body")[0];
let numberOfElementsInBody = body.childElementCount;
let footer = body.children[numberOfElementsInBody - 2];
let element = footer.firstElementChild;
element.classList.add('thats-all-folks');

// Read CSS from elements
console.log(header.style.color); // Will show red