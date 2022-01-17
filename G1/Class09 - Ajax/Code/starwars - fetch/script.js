var p = $("p");
console.log("APP STARTED");

// promise example
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("show something to the user");
        resolve("test");
    }, 30);
});

myPromise.then(result => console.log(result));
console.log("APP FINISHED");

fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(function (response) {
    console.log(response);
    var people = response.results;

    //initialize table
    var table = new Tabulator("#example-table", {
        data: people, //assign data to table
        layout:"fitColumns",   
        columns:[                 //define the table columns
            {title:"Name", field:"name"},
            {title:"Height", field:"height"},
            {title:"Mass", field:"mass"},
        ],
    });
});