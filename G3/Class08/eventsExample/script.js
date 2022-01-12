let divs = document.getElementsByClassName("main");


for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function (event) {
        console.log(event.target.id);
    });
}

// for (let element of divs) {
//     element.addEventListener('click', function (event) {
//         console.log(event.target.id);
//     });
// }