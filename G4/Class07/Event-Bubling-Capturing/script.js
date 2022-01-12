let box01 = document.getElementById('div01');
let box02 = document.getElementById('div02');
let box03 = document.getElementById('div03');

let button = document.getElementById('btn');

box01.addEventListener(
    'click',
    function() {
        console.log('Box 1 is clicked.')
    },
    false
)

box02.addEventListener(
    'click',
    function(event) {
        event.stopPropagation();
        console.log('Box 2 is clicked.')
    },
    false
)

box03.addEventListener(
    'click',
    function() {
        console.log('Box 3 is clicked.')
    },
    false
)

button.addEventListener(
    'click',
    function(event) {
        // event.stopPropagation()
        console.log('The button is clicked.')
    },
    false
)


// box01.addEventListener(
//     'click',
//     function(event) {
//         // event.stopPropagation()
//         console.log('Box 1 is clicked.')
//     },
//     true
// )

// box02.addEventListener(
//     'click',
//     function(event) {
//         event.stopPropagation()
//         console.log('Box 2 is clicked.')
//     },
//     true
// )

// box03.addEventListener(
//     'click',
//     function() {
//         console.log('Box 3 is clicked.')
//     },
//     true
// )

// button.addEventListener(
//     'click',
//     function() {
//         console.log('The button is clicked.')
//     },
//     true
// )