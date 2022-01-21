let myBtn = document.getElementById("myBtn");
let resultDiv = document.getElementById("resultDiv");

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

/**
 * KORISTENJETO NA FETCH ZA PRAVENJE API POVICI, SEKOGASH VRAKJA PROMISE
 *
 * PROMISOT: PENDING, FULFILLED, REJECTED
 */

/**
 * ZA DA GI KONZUMIRAME REZULTATITE OD SAMIOT PROMISE
 * MORAME DA GO RESOLVNEME PROMISE-OT
 */

function getSwapiPeople() {
  let promise = fetch("https://swapi.dev/api/people");
  console.log(promise);

  promise
    .then(function (response) {
      console.log(response);
      return response.text();
    })
    .then(function (result) {
      // OVDE IMAME STRINGIFICIRAN JSON!
      //   console.log(result);

      //ZA DA GO KONZUMIRAME TOJ JSON
      //MORAME DA GO ISPARSIRAME!
      let parsedResult = JSON.parse(result);
      console.log("Parsed result: ", parsedResult);
      console.log("The results array of the request:", parsedResult.results);
      printSwapiPeople(parsedResult.results, resultDiv);
    })
    .catch(function (error) {
      console.log(error);
    });
}

myBtn.addEventListener("click", getSwapiPeople);
