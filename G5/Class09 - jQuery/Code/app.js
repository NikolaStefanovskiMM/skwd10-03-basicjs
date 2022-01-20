// jQuerry Connection Test
console.log(window.jQuery);

// Common Selectors from jQuery
// Selectors in jQuery always return collection of elements [array]

let allElements = $("*");
console.log(allElements);

let byIdElement = $("#mainTitle"); // document.getElementById("mainTitle")
console.log(byIdElement);
console.log(byIdElement[0]);
console.log(byIdElement.length);

let byClassNameElements = $(".innerWrapper");
console.log(byClassNameElements);

let byTagNameElements = $("p");
console.log(byTagNameElements);

let wrapperAndInnerWrapper = $(".wrapper, .innerWrapper");
console.log(wrapperAndInnerWrapper);

let firstParagraph = $("p:first");
console.log(firstParagraph);

let lastParagraph = $("p:last");
console.log(lastParagraph);

let firstChildHeader = $("h3:first-child");
console.log(firstChildHeader);

let lastChildParagraph = $("p:last-child");
console.log(lastChildParagraph);

let secondChildParagraphs = $("p:nth-child(2)");
console.log(secondChildParagraphs);

// Difference between Vanilla JS and jQuery
console.log("---------------------------------");

let elementById1 = document.getElementById("mainTitle");
let elementById2 = $("#mainTitle");
console.log(elementById1);
console.log(elementById2);
console.log(elementById2[0]);

let elementsByClass1 = document.getElementsByClassName("innerWrapper");
let elementsByClass2 = $(".innerWrapper");
console.log(elementsByClass1);
console.log(elementsByClass2);

let elementsByTagName1 = document.getElementsByTagName("p");
let elementsByTagName2 = $("p");
console.log(elementsByTagName1);
console.log(elementsByTagName2);

// jQuery Objects and DOM Objects
console.log("------------jQuery Objects---------------");

let selectSomeRandomElement = allElements.first();
let selectSomeRandomElement100 = $("*").first();
console.log(selectSomeRandomElement);
console.log(selectSomeRandomElement100);
let selectSomeRandomElement2 = allElements.last();
console.log(selectSomeRandomElement2);

let findElementsWithJQuery = allElements.find(".wrapper").find("p").last();
console.log(findElementsWithJQuery);

console.log(allElements[7]);
console.log(allElements.get(7));

let getAllElementsFromClass = byClassNameElements.get();
console.log(getAllElementsFromClass);

console.log(firstParagraph.next());
console.log(firstParagraph.prev());

// Common jQuery DOM Manipulations
console.log("--------------jQuery DOM Manipulation------------------")

let inputValue = $("input").first().val();
let inputElement = $("input").first();

console.log(inputValue);
console.log(inputElement);
console.log(inputElement.val());

// Editing attribute to the HTML element - display:none
secondChildParagraphs.hide();
secondChildParagraphs.show();

let selectedHTML = byClassNameElements.first().html();
console.log(selectedHTML);

// Editing HTML content in selected element
byClassNameElements.first().html(`<h1> This is the new H1 tag element </h1>`); 

let lastTagElement = byTagNameElements.last().text();
console.log(lastTagElement);

byTagNameElements.last().text("Here is the text for this element. PS: jQuery");

let lastTagElementForCSS = byTagNameElements.last().css("color");
console.log(lastTagElementForCSS);
byTagNameElements.last().css("color", "red");

// Difference between Vanilla JS and jQuery

let element1Input = document.getElementsByTagName("input")[0].value;
let element2Input = $("input").first().val();

console.log(element1Input);
console.log(element2Input);

let element1Main = document.getElementsByClassName("innerWrapper")[0].innerHTML;
let element2Main = $(".innerWrapper").first().html();

console.log(element1Main);
console.log(element2Main);

// jQuery Event Handlers
console.log("-----------jQuery Event Handlers -----------");

let button = $("button").first();

button.on("click", function(){
    console.log("Hello from jQuery Event Handler");
});

button.click(function(){
    console.log("Hello from more simple Event Handler");
});

button.click(function(e){
    console.log(e);
})


// Difference Between Vanilla JS and jQuery

button[0].addEventListener("click", function(){
    console.log("VanillaJS Click on Event");
});

button.click(function(){
    console.log("jQuery Click on Event");
});
