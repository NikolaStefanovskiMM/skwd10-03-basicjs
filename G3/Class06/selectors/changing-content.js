// let myDiv = document.getElementById("main");
// let textSpaces = myDiv.textContent; // Get content with white spaces
// let textNoSpaces = myDiv.innerText; // Get content without white spaces
// console.log(textSpaces);
// console.log(textNoSpaces);

// let header = document.getElementById("myTitle");
// console.log(header.innerText); // Checking what the text is

// header.innerText = ""; // Changing the text to nothing
// console.log(header.innerText);

// header.innerText = "New TEXT!";
// console.log(header.innerText);

// header.innerText += " Ultra new text";
// console.log(header.innerText);


let myDiv = document.getElementById("main");
console.log(myDiv.children);
// Adding new element in the div
console.log(myDiv.innerHTML);
myDiv.innerHTML += `<p class="new"> 
Paragraph generated from JavaScript
</p>`;
myDiv.innerHTML += `<div><h1>Hello from JS</h1><h2>Im Sibling to h1</h2></div>`;
console.log(myDiv.children);
myDiv.innerHTML = ""; // removing all code from myDiv
