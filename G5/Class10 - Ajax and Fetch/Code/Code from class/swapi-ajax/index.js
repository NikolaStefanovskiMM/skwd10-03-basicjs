console.log("connected");

// swapi.dev
// https://swapi.dev/api/people

let myBtn = document.getElementById("myBtn");
let resultDiv = document.getElementById("resultDiv");

myBtn.addEventListener("click", function () {
  getApiPeople("https://swapi.dev/api/people");
});

function getApiPeople(url) {
  $.ajax({
    url: url,
    success: function (response) {
      console.log(response);
      printSwapiPeople(response.results, resultDiv);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function printSwapiPeople(peopleArray, element) {
  for (let i = 0; i < peopleArray.length; i++) {
    let newUnorderedList = document.createElement("ul");

    newUnorderedList.innerHTML += `
            <li>Name: ${peopleArray[i].name}</li>
            <li>Birthyear: ${peopleArray[i].birth_year}</li>
            <li>Gender: ${peopleArray[i].gender}</li>
        `;
    element.appendChild(newUnorderedList);
  }
}
