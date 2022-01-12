$(document).ready(function() {
    let secondWrapper = $("#secondWrapper");
    console.log(secondWrapper[0]);
    let paragraph = $("div p").last();
    console.log(paragraph);
    let h1 = $('div h1').first();
    console.log(h1);
    let button = $("button");
    console.log(button);

    console.log(document.getElementsByTagName("input")[0].value);
    console.log($("input").first().val());

    paragraph.hide();
    paragraph.show();
    secondWrapper.html(); // gets the inner html
    secondWrapper.first().html(`<h1> This is a new h1! </h1>`);// set innerHTML
    h1.text(); // gets the text
    h1.text("H1 text changed") // sets the element text
    // h1.text(""); // delete the text in the element
    h1.css("color");// getting CSS
    h1.css("color", "red");// Changing CSS 
    h1.before("<p>This is added before h1</p>");
    h1.after("<p>This is added after h1</p>");

    h1.text("JQuery is awesome");
    button.css("background-color", "red");

    button.on("click", function() {
        console.log("Hello");
    });

    button.click(function(e) {
        console.log("Hello for other click");
        console.log(e);
    });
});