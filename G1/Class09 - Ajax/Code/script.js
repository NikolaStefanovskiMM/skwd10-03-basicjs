console.log("APP IS STARTED");

// calling API with vanilla javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("this is the response from the api");
        console.log(xhttp.response);
        let jsObject = JSON.parse(xhttp.response);
        console.log(jsObject);
        obj = jsObject;
        console.log(jsObject.results[0].name)
        let newJson = JSON.stringify(jsObject);
        console.log(newJson);
    }
};
xhttp.open("GET", "https://pokeapi.co/api/v2/ability");
xhttp.send();

console.log("APP IS FINISHED");

// calling API with ajax
$("button").click(function(){
    console.log("button click start");
    $.ajax({
        url: "https://pokeapi.co/api/v2/ability",
        success: function(result) {
            console.log(result);
        }
    });
    console.log("button click end");
})