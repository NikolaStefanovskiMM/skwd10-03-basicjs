// let jsObject = {
//   firstName: "Goce",
//   lastName: "Kabov",
//   age: 29,
//   isCoronaPositive: false,
//   subjects: ["JS", "HTML", "CSS"],
//   address: {
//     street: "Some street",
//     number: 22,
//     city: "Skopje",
//   },
// };

// console.log(jsObject);

// let jsonObject = JSON.stringify(jsObject);

// console.log("==========================================");
// console.log(jsonObject);

// console.log("================================================");
// console.log(JSON.parse(jsonObject));

// $(function () {
//   let button = $("#getData");
//   button.on("click", function () {
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/users",
//       success: function (res) {
//         console.log(res);
//       },
//       error: function (error) {
//         console.log(error, "ERRORRRRRRRR");
//       },
//     });
//   });
// });

let button = document.getElementById("getData");
// button.addEventListener("click", function () {
//   fetch("https://swapi.dev/api/peoples/1")
//     .then(function (res) {
//       if (res.status >= 200 && res.status <= 299) {
//         res.json().then(function (person) {
//           console.log(person);
//         });
//       } else {
//         throw Error("GOCES ERROR");
//       }
//     })
//     .catch(function (error) {
//       console.log(error, "ERRORRRRRRR");
//     });
// });

// button.addEventListener("click", async function () {
//   fetch("https://swapi.dev/api/people/1")
//     .then(function (res) {
//       if (res.status >= 200 && res.status <= 299) {
//         res.json().then(function (person) {
//           console.log(person);
//         });
//       } else {
//         throw Error("GOCES ERROR");
//       }
//     })
//     .catch(function (error) {
//       console.log(error, "ERRORRRRRRR");
//     });

//   const res = await fetch("https://swapi.dev/api/peoples/1");
//   if (res.status >= 200 && res.status <= 299) {
//     const person = await res.json();
//     console.log(person);
//   } else {
//     console.log("Something went wrong");
//   }
// });
