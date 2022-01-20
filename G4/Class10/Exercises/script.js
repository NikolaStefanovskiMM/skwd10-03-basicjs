console.log('Lots of exercises...');

// Simple calculator

//inputs
let input01 = document.getElementById('input01');
let input02 = document.getElementById('input02');
//buttons
let sumBtn = document.getElementById('sumBtn');
let difBtn = document.getElementById('difBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');
let powBtn = document.getElementById('powBtn');
//paragraph for result
let resultPar = document.getElementById('result');

// events

sumBtn.addEventListener('click', function(){
    let sum = parseInt(input01.value) + parseInt(input02.value);
    // let sum = parseInt(input01.value + input02.value);
    // console.log(sum);
    resultPar.innerHTML = `The sum of numbers id ${sum}`;
    input01.value = "";
    input02.value = "";

})


difBtn.addEventListener('click', function(){
    let dif = parseInt(input01.value) - parseInt(input02.value);
    resultPar.innerHTML = `The difference of numbers id ${dif}`;
    input01.value = "";
    input02.value = "";

})


mulBtn.addEventListener('click', function(){
    let mul = parseInt(input01.value) * parseInt(input02.value);
    resultPar.innerHTML = `The multiplication of numbers id ${mul}`;
    input01.value = "";
    input02.value = "";

})

divBtn.addEventListener('click', function(){
    let div = parseInt(input01.value) / parseInt(input02.value);
    resultPar.innerHTML = `The division of numbers id ${div}`;
    input01.value = "";
    input02.value = "";

})


powBtn.addEventListener('click', function(){
    let pow = Math.pow(parseInt(input01.value), parseInt(input02.value));
    resultPar.innerHTML = `Number ${input01.value} on the power of ${input02.value} is ${pow}`;
    input01.value = "";
    input02.value = "";

})
