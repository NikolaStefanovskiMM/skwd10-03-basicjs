let ourHeader = document.getElementById("myTitle");
console.log(`Our header's text: ${ourHeader.innerText}`);
//ourHeader.innerText = "This is new text!!!!";

console.log("====Access by class=====");
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`ourParagraphs' first element: ${ourParagraphs[0].innerText}`);

console.log("====Access by tag=====");
let paragraphs = document.getElementsByTagName("p");
console.log(`paragraphs length: ${paragraphs.length}`);
console.log(`paragraphs' second element: ${paragraphs[1].innerText}`);

console.log("====Access by css selectors=====");
let firstDivWithClass = document.querySelector(".myDiv");
console.log(firstDivWithClass);
let ourDivs = document.querySelectorAll(".myDiv");
console.log(`ourDivs length: ${ourDivs.length}`);
console.log(ourDivs[1]);

console.log("===Siblings====");
let header = document.getElementsByTagName("h1")[0]; //[element][0] -> element
let nextSibling = header.nextElementSibling;
console.log(nextSibling);
let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

console.log("====Children=====");
let children = document.getElementById("main").children;
console.log(children);

console.log('====Parent=====');
let firstParagraph = paragraphs[0];
let parent = firstParagraph.parentElement;
console.log(`parent:`);
console.log(parent);

console.log("=====Changing content=====");
let thirdParagraph = paragraphs[2];
thirdParagraph.innerText = thirdParagraph.innerText + " This is interesting!";

let secondParagraph = paragraphs[1];
secondParagraph.innerHTML = "<span>This is our span!!!</span>";

//this creates an empty span element
let spanElement = document.createElement("span");
//add text to the span element
spanElement.innerText = "Dynamic span";
//add class to the span element
spanElement.setAttribute("class", "mySpan");
//add the span somewhere in the html, in this case as last child to the secondParagraph
secondParagraph.appendChild(spanElement);
