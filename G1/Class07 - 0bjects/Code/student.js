console.log("connected");
var students = [];

function Student(firstName, lastName, age){
    this.name = firstName;
    this.surname = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.age = age;
}

var button = document.getElementsByTagName("button")[0];
var inputs = document.querySelectorAll("input");
button.addEventListener("click", function() {
    var student = new Student(inputs[0].value, inputs[1].value, inputs[2].value);
    students.push(student);
    for(let input of inputs)
        input.value = "";
    
    const ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML += `<li>${student.fullName}</li>`;
    console.log(students);
});