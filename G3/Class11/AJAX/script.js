

$("#btn").on('click', function () {
    let userId = $("#userId").val();
    let url = '';
    if (userId) {
        url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    } else {
        url = "https://jsonplaceholder.typicode.com/users";
    }

    $.ajax({
        url: url,
        //method: "GET", // by default is get
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
})


// $.ajax({
//     url: "https://swapi.dev/api/people/1",
//     //method: "GET", // by default is get
//     success: function (response) {
//         console.log(response);

//         setTimeout(() => {
//             $("#btn").on('click', function () {
//                 console.log(response);
//             })
//         }, 10000);
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

function showData(response, from) {
    console.log(from, response);
} 

$("#btn1").on('click', function () {
    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        //method: "GET", // by default is get
        success: showData,
        error: function (error) {
            console.log(error);
        }
    });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(showData)
        .catch(error => console.log(error));
});
