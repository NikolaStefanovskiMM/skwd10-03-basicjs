console.log('Sre we live?!?');

$(document).ready(function(){


    let button = $("#getData");

    let myObject = {
        coTrainer1 : "Panche Manaskov",
        coTrainer2 : "Petre Arsovski",
        students: [

            "Todor",
            "Milena",
            "Greg",
            "Erika",
            "Katerina",
            "Bojan"
        ],
        academy: "Code",
        course: "JS basic"
    };

    // JSON.stringify converts JS object to JSON
    let jsonObject = JSON.stringify(myObject);
    console.log(jsonObject);

    // JSON.parse converts JSON object to JS object
    let backToObject = JSON.parse(jsonObject);
    console.log(backToObject);

    // AJAX calls
    button.click(function(){

        const urlToGetData = "https://jsonplaceholder.typicode.com/users";

        $.ajax({
            url: urlToGetData,
            success: function(result){
                console.log('Success!');
            },
            error: function(){
                console.error('Error occured!');
            }
        })
        .done(function(data){
            for(let user of data){
                $("#userList").append(`<li>${user.username} - ${user.email}</li>`);
            }
        });
        
    })


});