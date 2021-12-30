let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1]; // myApp.lastElementChild

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects1 = ["Math", "English", "Science", "Sport"];
let grades1 = ["A", "B", "A", "C"];

// Math : A
// Englisch : B
// Sciense: A
// Sport: C

// <ul> <li> Math : A </li> <li> Englisch : B </li> <li>Sciense:A </li> <li>Sport: C </li>
function printGrades(subjects, grades, htmlElement) {
  htmlElement.innerHTML = "<ul>";
  for (let i = 0; i < subjects.length; i++) {
    htmlElement.innerHTML += `<li>${subjects[i]} : ${grades[i]} </li>`;
  }
  htmlElement.innerHTML += "</ul>";
}

function printStudents(students, element) {
  element.innerHTML = "<ol>";
  for (let i = 0; i < students.length; i++) {
    element.innerHTML += `<li>${students[i]}</li>`;
  }
  element.innerHTML += "</ol>";
}

// more complex but better approach
function printStudents1(students, element) {
  let ol = document.createElement("ol");
  for (let i = 0; i < students.length; i++) {
    let li = document.createElement("li");
    li.innerText = students[i];
    ol.appendChild(li);
  }
  element.appendChild(ol);
}

// printGrades(subjects1, grades1, titleDiv);
// printStudents1(students, contentDiv);

function academyPanel(person, name) {
  if (person === "student" && name.length >= 2) {
    // if its student and has name longer than 1 letter
    titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
    titleDiv.innerHTML += "<p>Welcome to your student page</p>";
    contentDiv.innerHTML += "<h3>Your grades:</h3>";
    console.log(contentDiv);
    printGrades(subjects1, grades1, contentDiv);
  } else if (person === "teacher" && name.length >= 2) {
    titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
      <p>Welcome to your teachers page</p>`;
    contentDiv.innerHTML += "<h3>Your students:</h3>";
    printStudents(students, contentDiv);
  } else {
    titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
    titleDiv.innerHTML += "<p>Please try again!</p>";
  }
}

titleDiv.style.color = "red";
titleDiv.style.border = "1px solid green";
contentDiv.style.color = "blue";

let person = prompt("Please insert role (student or teacher)");
let name = prompt("Please insert your name");

academyPanel(person, name);
