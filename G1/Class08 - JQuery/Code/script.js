let allElements = $("*"); // gets all elements
console.log(allElements);
let byIdElement = $("#mainTitle"); // gets element by id
console.log(byIdElement);
let byClassElements = $(".innerWrapper"); // gets elements by class name
let byTagNameElements = $("p"); // gets elements by tag name
let wrapperAndInnerWrapper = $(".wrapper,.innerWrapper"); // gets elements from multiple classes
let firstParagraph = $("p:first"); // gets the first p element
let lastParagraph = $("p:last"); // gets the last p element
let firstChildHeaders = $("h3:first-child"); // gets all the first h3 elements in their parents
let lastChildParagraphs = $("h3:last-child"); // gets all the last p elements in their parents
let secondChildParagraphs = $("p:nth-child(2)"); // gets all the second place p elements in their parents

console.log(byIdElement[0]);

// Get first and last element from JQuery array
let firstElement = allElements.first();
let lastElement = allElements.last();
let paragraph = allElements.find(".wrapper").find("p").last();

// Get DOM element from JQuery array
console.log(firstParagraph);
console.log(firstParagraph[0]);
allElements.get(0);
console.log(byClassElements.get());
let prev = $("#hello").prev();
let next = $("#hello").next();
console.log(next);
