// // for this part you will need to uncomment the library that we made on class
// let a = 10;
// let b = 2;

// let result = sum(a, b);
// let result1 = subtract(a, b);
// let result2 = multiply(a, b);
// let result3 = divide(a, b);


// console.log("SUM", result);
// console.log("SUBTRACT",result1);
// console.log("MULITPLY", result2);
// console.log("DIVIDE", result3);


$(document).ready(function () {
    console.log("READY");

    document.getElementsByTagName('div');
    let allDivs = $('div');
    //console.log(allDivs);

    document.getElementById('1');
    let divWithIdOne = $('#1');
    //console.log(divWithIdOne);

    document.getElementsByClassName('active');
    let divWithClassActive = $('.active');
    //console.log(divWithClassActive);

    let divWithName = $('div[name="nesto"]');
    //console.log(divWithName);

    let allElements = $("*"); // gets all elements
    let byIdElement = $("#mainTitle"); // gets element by id
    let byClassElements = $(".innerWrapper"); // gets elements by class name
    let byTagNameElements = $("p"); // gets elements by tag name
    let wrapperAndInnerWrapper = $(".wrapper,.innerWrapper"); // gets elements from multiple classes
    let wrapperAndInnerWrapper1 = $("#mainTitle,.innerWrapper,span"); // gets elements from multiple classes
    let firstParagraph = $("p:first"); // gets the first p element
    let lastParagraph = $("p:last"); // gets the last p element
    let firstChildHeaders = $("h3:first-child"); // gets all the first h3 elements in their parents
    let lastChildParagraphs = $("p:last-child"); // gets all the last p elements in their parents
    let secondChildParagraphs = $("p:nth-child(2)"); // gets all the second place p elements in their parents

    // Get first and last element from JQuery array
    allElements.first();
    //console.log(allElements.first());
    allElements.last();
    //console.log(allElements.last());
    // Find elements in JQuery array
    allElements.find(".wrapper").find("p").last();
    //console.log(allElements.find(".wrapper").find("p").last());
    // Get DOM element from JQuery array
    allElements[0];
    allElements.get(0);
    //console.log(allElements.get(0));
    // Get all DOM elements from a JQuery array
    byClassElements.get();
    // Get next or previous element
    firstParagraph.next();
    //console.log(firstParagraph.next());
    firstParagraph.prev();


    $("input").first().val();// get value from input
    secondChildParagraphs.hide();// hide elements
    secondChildParagraphs.show();// show elements
    byClassElements.first().html();// get innerHTML
    byClassElements.first().html(`<h1> This is a new h1! </h1>`);// set innerHTML
    byTagNameElements.last().text();// get text
    byTagNameElements.last().text("This is a new text");// set text
    byTagNameElements.last().css("color");// getting CSS
    byTagNameElements.last().css("color", "red");// Changing CSS
    $("h1").first().after("<p>new p tag after the h1</p>");
    $("h1").first().before("<p>new p tag before the h1</p>");

    // document.getElementsByTagName("input")[0].value;
    // $("input").first().val();

    // document.getElementsByClassName("header")[0].innerHTML;
    // $(".header").first().html();// get innerHTML

    // document.getElementsByClassName("header")[0].innerText = "hey";
    // $(".header").first().text("hey");

    // document.getElementsByClassName("header")[0].style.color = "red";
    // $(".header").first().css("color", "red");

    let btn = $('button').first();

    btn.css("background-color", "red");

    $("form").submit(function (event) {
        console.log($(this).serializeArray());
        event.preventDefault();
    });

    let button = $("button").first();
    // simple on event click
    button.on("click", function () {
        console.log("Hello");
    })
    // Even simpler click event
    button.click(function (e) {
        console.log("HELLO AGAIN");
    })

    // Catching an event
    button.click(function (e) {
        console.log(e);
    })

    button.addEventListener("click", function () {
        console.log("hey");
    })
    button.click(function () {
        console.log("hey");
    })
})