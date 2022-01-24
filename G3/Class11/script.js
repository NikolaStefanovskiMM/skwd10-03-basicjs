let data = {
    "trainer": "Trainer Name",
    "assistant": "Assistant Name",
    "students": [
        "Bob",
        "Samantha",
        "Chris",
        "Jill",
        "Greg"
    ],
    "academy": "Code",
    "age": 3
};

console.log(data);

let jsonString = JSON.stringify(data);

console.log(jsonString);

let jsonObj = JSON.parse(jsonString);

console.log(jsonObj)

console.log(jsonObj.academy);


function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.showInfo = function () {
        console.log(`Hello my name is ${this.name} im ${this.age} years old and i work at ${this.job}`);
    }
}

let person = new Person("Trajan", 33, "Seavus");

console.log(person);
person.showInfo();

let personString = JSON.stringify(person);

console.log(personString);

let personObj = JSON.parse(personString);

console.log(personObj);

let person1 = new Person(personObj.name, personObj.age, personObj.job);

console.log(person1);