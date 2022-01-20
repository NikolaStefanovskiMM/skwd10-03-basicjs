let input = document.getElementById("main");
let btn = document.getElementById("btn");


input.addEventListener('keyup', function (e) {
    console.log(e); 
});

btn.addEventListener('click', function (param) {
    console.log(param); 
});