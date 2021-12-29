// getting all the elements on global level that we will work with
let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1];

// setting up in memory data
let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];


function printGrades(subjects, grades, element) {
    console.log(element);
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ul>";
    for (let i = 0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
    }
    element.innerHTML += "</ul>";
}

function printStudents(students, element) {
    element.innerHTML = ""; // clearing element
    element.innerHTML += "<ol>";
    for (let student of students) {
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += "</ol>";
}

function academyPanel(person, name) {
    if (person === "student" && name.length >= 2) { // if its student and has name longer than 1 letter
        titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
        titleDiv.innerHTML += "<p>Welcome to your student page</p>";
        contentDiv.innerHTML += "<h3>Your grades:</h3>";
        console.log(contentDiv);
        printGrades(subjects, grades, contentDiv);
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


// let input = prompt("Are you a student or a teacher?");
// let name = prompt("What is your name?");
// academyPanel(input, name);

// myApp.style.backgroundColor = "blue";
// myApp.style.color = "green";
// myApp.style.border = "solid 2px black";

// if (input.length >= 10) {
//     myApp.className = "myCoolStyle";
// }

// let numberOfInputs = prompt("Number");

// let parsedNum = parseInt(numberOfInputs);
// let memory = [];
// while (parsedNum > 0) {
//     let input = prompt("wnter something");
//     memory.push(input);
//     parsedNum -= 1;
// }
// console.log(memory);

// let validInput = null;

// do {
//     let input1 = prompt("");
//     // validate input
//     validInput = input1;
//     console.log(validInput);
// } while (validInput);
// console.log(validInput)

function getValues(numberOfItterations, outputArr) {
    while (numberOfItterations > 0) {
        let input = prompt("wnter something");
        let parsedNumber = parseInt(input);
        if (typeof parsedNumber !== "number") {
            continue;
        }
        outputArr.push(input);
        numberOfItterations -= 1;
    }
    return outputArr;
}

let numberOfInputs = prompt("Number");

let parsedNum = parseInt(numberOfInputs);
let memory = [];

let values = getValues(parsedNum, memory);
console.log(values);