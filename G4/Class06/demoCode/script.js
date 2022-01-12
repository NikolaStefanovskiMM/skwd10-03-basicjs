console.log("Testing our page script");


//Selectors 
console.log("--------- Selectors ---------");
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

// class selector - always returns array of elements
let paragraphs = document.getElementsByClassName("myParagraph");
console.log(paragraphs);
let paragraphWithOneElement = document.getElementsByClassName("second");
console.log(paragraphWithOneElement);

// console.log(paragraphs[0]);

// tag selector - returns array of elements 
let tagParagraphs = document.getElementsByTagName("p");
console.log(tagParagraphs);


// query selectors
let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);
let allParagraphsQuery = document.querySelectorAll(".myParagraph")
console.log(allParagraphsQuery);

// Traversing 
console.log("---------- Traversing through the DOM");
let childPar = document.querySelector(".child-par");
console.log(childPar);

// sibling selector
let nextSibling = childPar.nextElementSibling;
console.log(nextSibling);
console.log(nextSibling.previousElementSibling);

// parent selector 
let parentElement = childPar.parentElement;
console.log(parentElement);

// child selectors 
let childrenOfParent = parentElement.children;
console.log(childrenOfParent);

console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);

// Changing content 
let header = document.getElementById("myTitle");
console.log(header)
console.log(header.textContent);
console.log(header.innerText);

header.innerText = "";
header.innerText = "I am a new header from JS";
header.innerText += " G4";
console.log(header.innerText);


let students = ['Todor', 'Erika', 'Bojan', 'Aleksandar', 'Greg'];

let myList = document.querySelector("#list");

for(let student of students) {
    myList.innerHTML += `<li>${student}</li>`;
}

myList.style.color = "red";
myList.style.backgroundColor = "green";
// myList.style.display = "none";

