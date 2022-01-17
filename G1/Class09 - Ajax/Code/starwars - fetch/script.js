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