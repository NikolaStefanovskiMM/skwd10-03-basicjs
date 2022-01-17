console.log("Test");

$(document).ready(function() {
    let allElements = $("*");
    console.log(allElements);

    let elementById = $("#firstTitle");
    console.log(elementById);
    let elementsByClassName = $(".innerWrapper");
    console.log(elementsByClassName);
    let elementsByTagName = $("p");
    console.log(elementsByTagName);
    //let elementsByTagDOM = document.getElementsByTagName("p"); // vanila js
    let firstParagraph = $("p:first");
    console.log(firstParagraph);
    let lastParagraph = $("p:last");
    console.log(lastParagraph);

    let firstChild = $(".innerWrapper :first-child");
    let lastChild = $(".innerWrapper :last-child");
    let nthChild = $(".innerWrapper :nth-child(2)");

    console.log(firstChild);
    console.log(lastChild);
    console.log(nthChild);
    // console.log(firstChild.text())

    // some mopre complex selecting
    let someElement = allElements.find(".wrapper").find("p").first();
    console.log(someElement.text());
    
    // jquery methods to hide and show elements
    someElement.hide();
    someElement.show();

    // get value from input
    let inputvalue = $("input").first().val();
    // console.log(inputvalue);

    $("input").first().val("nesto");

    let titleToChange = $("#secondTitle");
    console.log(titleToChange.text());
    titleToChange.text("We are changing the title from Jquery!");

    // getting and setting html content

    $(".emptyDiv").first().html("<p>I am a paragraph generated from Jquery</p>");
    console.log($(".emptyDiv").first().html());

    // adding content before and after an element
    $("h1").first().after("<p>new p tag after the h1</p>");
    $("h1").first().before("<p>new p tag before h1</p>");

    // changing style with Jquery
    // elementsByTagName.last().css("color", "red");
    // elementsByTagName.last().css("font-size", "24px");
    // elementsByTagName.last().css("background-color", "yellow");
    elementsByTagName.last().css({'color': 'red', 'font-size': '24px', 'background-color': 'yellow'});

    // Events in Jquery
    let button = $("button").first();

    // button.on("click", function() {
    //     alert("Hi from Jquery!");
    // })

    button.click(function() {
        alert("I am the simplest event handler!")
    })


})