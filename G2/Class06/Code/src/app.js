let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

let titleDiv = document.getElementById("title");
let contentDiv = document.getElementById("content");

//the print function. firstName will get the value of fName, role the value of userRole etc..
function print(firstName, role, titleElement, contentElement){
    //we check the negative scenarios
    //if a negative scenario is true we use return to stop the execution of the function
    if(firstName == "" || firstName == null){
        console.log("Name must not be empty!");
        return;
    }
    if(role.toLowerCase() != "teacher" && role.toLowerCase() != "student"){
        console.log(`Invalid role: ${role}`);
        return;
    }
    //we add html to the title div
    titleElement.innerHTML = `<h2>Hello ${firstName}</h2>`;
    contentElement.innerHTML = "";

    //we use toLowerCase because role holds the input of the user for role. It can be TeAcher 
    //for example. If we compare it with teacher it will be false. TeAcher.toLowerCase() -> teacher
    if(role.toLowerCase() == "teacher"){
        //students
        //this is the scenario for teachers
        printStudents(contentElement, students);
    }
    else{
        //subjects
         //this is the scenario for students
        printSubjects(contentElement, subjects,grades);
    }
}

function printStudents(contentElement, studentsArray){
    contentElement.innerHTML += "<h3>Your students:</h3>";
    contentElement.innerHTML += "<ol>";
    //for each element in the studentsArray we add a li to the list
    for(let student of studentsArray){
        contentElement.innerHTML += `<li>${student}</li>`;
    }
    contentElement.innerHTML += "</ol>";
}

function printSubjects(contentElement, subjectsArray, gradesArray){
    if(subjectsArray.length != gradesArray.length){
        console.log("Invalid input");
        return;
    }
    contentElement.innerHTML += "<h3>Your subjects and grades:</h3>";
    contentElement.innerHTML += "<ul>";
    //the arrays subjectsArray and gradesArray have the same number of elements
    //and we use the same index for getting the items
    for(let index in subjectsArray){
        contentElement.innerHTML += `<li>${subjectsArray[index]} : ${gradesArray[index]}</li>`;
    }
    contentElement.innerHTML += "</ul>";
}


// first, we ask for input
let fName = prompt("Enter your name:");
let userRole = prompt('Enter your role: student/teacher');

//we call the main function print and pass values to it.
print(fName, userRole, titleDiv, contentDiv);