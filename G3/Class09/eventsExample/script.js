let btn = document.getElementById("btn-event");
let h1 = document.getElementById("result");

function calculateWidth(event, width) {
    let x = event.x;
    let y = event.y;

    let result = x + y + width;
    return result;
}
function sum(a, b) {
    return a + b;
}

btn.onclick = function (event) {
    console.log("THIS IS TRADITIONAL EVENT", event.localName);
}

btn.addEventListener('click', function (event) {
    console.log(event);
    let height = event.screenX;
    let width = event.screenY;
    let abcd = sum(height, width);
    let abc = sum(event.screenX, event.screenY);
    console.log(abcd, abc);
    //let target = event.target;
    let result = calculateWidth(event, 100);
    h1.innerText = result; 
});

// let counter = 0;
// btn.addEventListener('click', function () {
//     counter += 1;
//     h1.innerText = counter;
// });



function paramMissmatch(num1, num2) {
    /// lots of code
    console.log(num1, num2);
}

// paramMissmatch();
// paramMissmatch(1, 2);