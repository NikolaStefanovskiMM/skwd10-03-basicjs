let mainDiv = document.getElementById("app");
let titleDiv = mainDiv.firstElementChild;
let contentDiv = mainDiv.children[1];

// App to login Student or Teacher
// If student is logged in, show result for student
// If teacher is logged in, show result for teacher

let students = ["John Doe", "Bob Bobsky", "Jill Cool", "James Jany"];
let subjects = ["JavaScript", "Math", "C++", "English"];
let grades = ["A", "B", "A", "C"];


function printGrades(subjectsArray, gradesArray, element){
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for(let i = 0; i < subjects.length; i++){
        element.innerHTML += `<li>${subjectsArray[i]}: ${gradesArray[i]}</li>`;
    }

    element.innerHTML += "</ul>";
};

function printStudents(studentsArray, element){
    element.innerHTML = "";
    element.innerHTML += "<ol>";
    for(let student of studentsArray){
        element.innerHTML += `<li>${student}</li>`
    }
    element.innerHTML += "</ol>"
}

function academyPanel(person, name){
    if(person.toLowerCase() === "student" && name.length >= 2){
        titleDiv.innerHTML = "";
        titleDiv.innerHTML += `<h1>Welcome ${name}</h1>`;
        titleDiv.innerHTML += `<h3>Here is your student page!</h3>`;
        titleDiv.innerHTML += `<p>Your Grades:</p>`;
        printGrades(subjects, grades, contentDiv);
    } else if(person.toLowerCase() === "teacher" && name.length >= 2){
        titleDiv.innerHTML = "";
        titleDiv.innerHTML += `<h1>Welcome ${name}</h1>`;
        titleDiv.innerHTML += `<h3>Here is your Teacher Panel!</h3>`;
        titleDiv.innerHTML += `<p>Your Students:</p>`
        printStudents(students, contentDiv);
    } else {
        titleDiv.innerHTML = "<h1>Your login was unsuccesful!</h1>";
        titleDiv.innerHTML += "<h3>Try Again!</h3>";
    }
}

let personInput = prompt("Are you a Student or Teacher?");
let nameInput = prompt("Enter your name:");
academyPanel(personInput, nameInput);

