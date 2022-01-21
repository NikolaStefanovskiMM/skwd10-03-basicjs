

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
