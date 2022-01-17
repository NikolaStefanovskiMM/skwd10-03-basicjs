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
})