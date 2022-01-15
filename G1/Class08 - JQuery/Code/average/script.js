var button = $("button");
var inputs = $("input");
button.click(function() {
    var average = calculateAverage(inputs);
    var h1 = $("#average");
    h1.text(`This is the average of these numbers ${average}`);
    if (average >= 10) {
        h1.css("color", "green");
    } else {
        h1.css("color", "red");
    }
});

function calculateAverage(inputs) {
    var sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
    }
    var average = parseInt(sum / inputs.length);
    return average;
}