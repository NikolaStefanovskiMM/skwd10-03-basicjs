// we are selecting by id cuz ids are always unique
let title = document.getElementById("myTitle");

// console.log(title);
// console.log(title.textContent);

let paragraphs = document.getElementsByClassName("myParagraph"); 
let secondParagraph = document.getElementsByClassName("second"); 
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(secondParagraph); // Will give us an array with 1 paragraph
// console.log(secondParagraph[0]); // Will give us the only paragraph


let paragraphs1 = document.getElementsByTagName("p"); 
let texts = document.getElementsByTagName("text"); 
// console.log(paragraphs1); // Will give us an array with 2 paragraphs
// console.log(paragraphs1[0]); // Will give us the first paragraph
// console.log(texts); // Will give us an array with 1 text
// console.log(texts[0]); // Will give us the only text

let paragraphs2 = document.querySelectorAll("p"); // this will serach all p tags
let firstP = document.querySelector(".myParagraph"); // this will search all element by class name => dot represents class search
let header = document.querySelector("#myTitle"); // this will search all elements with ID my title => hashtag represents id search
// console.log(paragraphs2); // Will give us an array with 2 paragraphs
// console.log(firstP); // Will give us the first paragraph it finds
// console.log(header); // Will give us the first header it finds

let paragraphsOne = document.getElementsByClassName("myParagraph");
let para = paragraphsOne[0];
let sibling = para.nextElementSibling; // We add the next sibling element here
// console.log(para); // The first paragraph
// console.log(sibling); // The second paragraph
// console.log(sibling.previousElementSibling); // Will log the first paragraph again
// console.log(para.previousElementSibling); // the first h1

let parentDiv = paragraphsOne[0].parentElement; // We take the parent of the paragraph
// console.log(paragraphsOne[0]); // The first paragraph
// console.log(parentDiv); // The second paragraph

let myDiv = document.getElementById("main");
let divChildren = myDiv.children; // All children of myDiv
let divFirstCh = myDiv.firstElementChild; // Get first child of myDiv
let divLastCh = myDiv.lastElementChild; // Get last child of myDiv
// console.log(divChildren); // Array of all children of myDiv
// console.log(divFirstCh); // The first child element of myDiv
// console.log(divLastCh); // The last child element of myDiv