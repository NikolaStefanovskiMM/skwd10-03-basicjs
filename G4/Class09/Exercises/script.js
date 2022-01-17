console.log('We are live!');

$(document).ready(function() {

    // Exercise 1
    let div01 = $(`#firstWrapper`);
    let paragraph = $("p").get(0);
    let title = $("h1:first");
    let subTitle = $("h3:last");
    let btn = $("button").first();

    console.log(div01);
    console.log(paragraph);
    console.log(title);
    console.log(subTitle);
    console.log(btn);

    // Exercise 2   
    title.text("JQuery is awesome!!!");
    title.after("<p>I am random paragraph</p>");
    btn.css("background-color", "red");

    // Exercise 3

    let secondDiv = $("#secondWrapper");
    let allParagraphs = $("p");

    btn.click(function() {
        secondDiv.hide();
        allParagraphs.css("color", "green");
        btn.text("Don't click me");
    })

    // Exercise 4

    let input = $(".input-form");
    let result = $("#result");
    let btnResult = $("#btn-avg");

    function calculateAverage(num1, num2, num3) {
        let sum = num1 + num2 + num3;
        return Math.floor(sum / 3);
    }

    btnResult.click(function() {
        let numOne = parseInt(input[0].value);
        let numTwo = parseInt(input[1].value);
        let numThree = parseInt(input[2].value);

        let average = calculateAverage(numOne, numTwo, numThree);

        if (average >= 10) {
            result.text(average).css("color", "green")
        } else {
            result.text(average).css("color", "red");
        }
    })





})