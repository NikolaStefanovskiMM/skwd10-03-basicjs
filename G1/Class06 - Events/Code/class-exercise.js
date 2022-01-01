let nameAndSurname = document.getElementById('name-and-surname');
let grade = document.getElementById('grade');
let addButton = document.getElementById('add');
let resultButton = document.getElementById('result');
let list = document.getElementById('list');
let average = document.getElementById('average');
let listOfStudents = [];
let listOfGrades = [];

function addStudent() {
  if (nameAndSurname.value !== "" && (Number(grade.value) >= 5 && Number(grade.value) <= 10)) {
    listOfStudents.push(`${nameAndSurname.value}`);
    listOfGrades.push(`${grade.value}`);
  }
}

function printList() {
  list.innerHTML = "";
  for (let i = 0; i < listOfStudents.length; i++) {
    list.innerHTML += `<li>${listOfStudents[i]}: ${listOfGrades[i]}</li>`  
  }
}

function averageGrade() {
  let total = 0;

  for (const grade of listOfGrades) {
    total += Number(grade);
  }

  average.innerHTML = `Average class grade is ${(total / listOfGrades.length).toFixed(2)}`; 
}

addButton.addEventListener('click', addStudent);
resultButton.addEventListener('click', function() {
  printList();
  averageGrade();
})