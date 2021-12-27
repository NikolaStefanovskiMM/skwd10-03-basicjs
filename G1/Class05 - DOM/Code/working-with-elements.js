// Get text from an element
let header = document.getElementsByClassName("header")[0];

// Get value of an input
let input = document.getElementById("name-input");

// Get HTML from an element
let form = document.getElementById("form");

// Change text of an element
let header = document.getElementsByClassName("header")[0];
header.textContent = "This is a new title"; // Overwrite the previous text with new one
header.textContent += " and this is added later!"; // Attach a new text to the previous one
// header.textContent = ""; // Remove all text ( by setting it to an empty string )

// Change value of an input
let input = document.getElementById("name-input");
input.value = "Jill"; // Overwrite the previous value with new one
input.value += " Wayne"; // Attach a new text to the previous one
// input.value = ""; // Remove the value ( by setting it to an empty string )

// WATCH OUT LINE 29 will overwrite the whole form
// Change HTML of an element
let form = document.getElementById("form");
form.innerHTML = "<h2> This is a new element created from JS </h2>"; // Overwrite the previous HTML with new one
form.innerHTML += "<h3> This element is added later </h3>"; // Attach a new HTML to the previous one
// form.innerHTML = ""; // Remove all HTML from the element ( by setting it to an empty string )