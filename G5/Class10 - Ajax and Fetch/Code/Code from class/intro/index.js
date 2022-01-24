console.log("Connected");

let exampleMe = {
  firstName: "George",
  lastName: "Dimitrov",
  age: 26,
  hobbies: ["coding", "workout"],
};

// JSON = Javascript object notation
console.log("My info in object are:", exampleMe);

// Ova kje bidi stingificiran JSON

let stingifiedExampleMe = JSON.stringify(exampleMe);

console.log("Stringified example me: ", stingifiedExampleMe);

// Type-ot na stringificiraniot JSON e STRING
console.log(typeof stingifiedExampleMe);

/**
 * JSON.parse() MORAME DA I PRATIME STRINGIFICIRAN JSON KAKO ARGUMENT,
 * BIDEJKI NEMA DA RABOTI =)
 */
// let invalidParsing = JSON.parse(exampleMe);
// console.log(invalidParsing);

let parsedStringifiedExampleMe = JSON.parse(stingifiedExampleMe);
console.log("Parsed stringified json: ", parsedStringifiedExampleMe);
console.log(parsedStringifiedExampleMe.firstName);

console.log("******** AJAX ********");

let myBtn = document.getElementById("myBtn");
let myTitle = document.getElementById("myTitle");
let resultDiv = document.getElementById("resultDiv");

myBtn.addEventListener("click", function () {
  $.ajax({
    // odgomentiraj ja linijata za da simulirate nevaliden request =)
    //   url: "https://jsonplaceholder.typicode.com/NEPOSTOECKO",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
      console.log("We have recieved the response of the request =)");
      console.log(response);
      // for (let i = 0; i < response.length; i++) {
      //   console.log(response[i].name);
      // }
      usersThatWeHaveFetched(response, resultDiv);
      changeTitleText(myTitle);
    },
    error: function (err) {
      console.log(err);
      changeTitleText(myTitle, false);
    },
  });
});

function usersThatWeHaveFetched(userArray, element) {
  for (let i = 0; i < userArray.length; i++) {
    let newUnorderedList = document.createElement("ul");

    newUnorderedList.innerHTML += `
            <li>Name: ${userArray[i].name}</li>
            <li>Username: ${userArray[i].username}</li>
            <li>Phone-number: ${userArray[i].phone}</li>
            <li>Address: ${userArray[i].address.street}</li>

        `;
    element.appendChild(newUnorderedList);
  }
}

function changeTitleText(element, areUsersFetched = true) {
  if (areUsersFetched) {
    element.innerText = "Users are fetched =)";
  } else {
    element.innerText = "No users are fetched amigo =)";
  }
}
