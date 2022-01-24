// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// let firstNameInput = document.getElementById("firstName");
// let lastNameInput = document.getElementById("lastName");
// let ageInput = document.getElementById("age");
// let registerButton = document.getElementById("register");
// let body = document.getElementsByTagName("body")[0];

// let users = [];
// let list = document.createElement("ul");
// body.appendChild(list);

// registerButton.addEventListener("click", function () {
//   let firstName = firstNameInput.value;
//   let lastName = lastNameInput.value;
//   let age = parseInt(ageInput.value);
//   if (firstName.length === 0 || lastName.length === 0 || age === NaN) {
//     const errorContainer = document.createElement("p");
//     errorContainer.textContent = "All fields are required";
//     errorContainer.style.color = "red";
//     body.appendChild(errorContainer);
//     return;
//   }

//   let user = new User(firstName, lastName, age);
//   firstNameInput.value = "";
//   lastNameInput.value = "";
//   ageInput.value = "";
//   users.push(user);
//   let oldList = document.getElementsByTagName("ul")[0];
//   let li = document.createElement("li");
//   li.textContent = `First name: ${user.firstName}, last name: ${user.lastName}, age: ${user.age}`;
//   oldList.appendChild(li);
// });

function User(data) {
  this.address = data.address;
  this.company = data.company;
  this.email = data.email;
  this.id = data.id;
  this.name = data.name;
  this.phone = data.phone;
  this.userName = data.username;
}

$(function () {
  let button = $("#getData");
  button.on("click", function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: function (res) {
        let users = [];
        for (user of res) {
          let userObject = new User(user);
          users.push(userObject);
        }
      },
      error: function (error) {
        console.log(error, "ERRORRRRRRRR");
      },
    });
  });
});
