// The representation of the whole HTML file is in the document object
console.log(document);

// Using document to find the title of the page
console.log(document.title);

// Using document to find the current URL
console.log(document.URL);

// Using document to force a reload on the page from JavaScript
// document.location.reload();

console.log(document.getElementsByTagName("p")[0].textContent);
console.log(document.getElementsByTagName("p")[0].innerText);
console.log(document.getElementsByTagName("p")[0].innerHTML);