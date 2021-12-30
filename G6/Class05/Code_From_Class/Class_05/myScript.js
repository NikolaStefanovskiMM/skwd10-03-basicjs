let h1 = document.getElementById("myTitle");
// console.log(h1);
// console.log(h1.textContent);
let paragraphs = document.getElementsByClassName("myParagraph");
// console.log(paragraphs);

let second = document.getElementsByClassName("second");
// console.log(second[0]);

let divs = document.getElementsByTagName("div");
// console.log(divs[0]);
// console.log(divs[1]);

let queryDivs = document.querySelectorAll(".myDiv");
let queryDiv = document.querySelector(".myDiv");
// console.log(queryDivs);
// console.log(queryDiv);

let mainDiv = document.querySelector("#main");
// console.log(mainDiv.nextElementSibling.nextElementSibling);
// console.log(mainDiv.previousElementSibling);

// console.log(mainDiv.parentElement);

// console.log(mainDiv.children);
// console.log(mainDiv.firstElementChild);
// console.log(mainDiv.lastElementChild);

let paragraph = document.querySelector(".second");
// console.log(paragraph.textContent);
// console.log(paragraph.innerText);
// let previous = paragraph.innerText;
// paragraph.innerText = "I AM GENERATED FROM JS! " + previous;

console.log(mainDiv.innerHTML);
// mainDiv.innerHTML = "";

mainDiv.innerHTML +=
  "<h1 class='clasa'>I AM JS TITLE </h1> <p> I am paragraph from JS </p>";
