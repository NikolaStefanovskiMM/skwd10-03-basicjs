let cityExample = ["Skopje", 1000, "Macedonia", "2M", 3];
console.log(cityExample[0]);

let cityName = "Skopje";
let cityZip = 1000;
let cityCountry = "Macedonia";

// Objects

let city = {
    name: "Skopje",
    zip: 1000,
    country: "Macedonia",
    isInEu: false,
    numberOfHospitals: 3,
    hospitalNames: ["Majka Tereza", "Bukurech", "Filip Vtori"]
}

console.log(city.name);
console.log(city.hospitalNames[0]);

// Objects are collection of properties
// Properties are a key-value pair/s
// Rather than accessing data using an index, we use custom keys

let hotel = {
    name: "Hilton",
    rooms: 50,
    booked: 22,
    gym: true,
    roomTypes: ["Twin", "Double", "Presidental"],

    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

console.log(`Hotel name is: ${hotel.name}`);
console.log(`Rooms available: ${hotel.checkAvailability()}`);
console.log(hotel['name']);

let hotelName = hotel.name;
console.log(hotelName);

// Creating emtpy object, adding properties, updating property values

let hotelNew = new Object();
let emptyObject = {};
console.log(hotelNew);
console.log(emptyObject);

hotelNew.name = "Transilvania";
console.log(hotelNew);
hotelNew.rooms = 15;
console.log(hotelNew);
hotel.location = "Macedonia";
console.log(hotel);
emptyObject.randomString = "Some value";
console.log(emptyObject);

hotelNew.writeName = function(){
    return this.name;
}
console.log(hotelNew.writeName());

hotelNew.name = "Meriot";
console.log(hotelNew);

delete emptyObject.randomString;
delete(emptyObject.randomString);
console.log(emptyObject);

// Constructor Functions

function Person(firstN, lastN, birthYear, job){
    this.firstName = firstN,
    this.lastName = lastN,
    this.birthYear = birthYear,
    this.job = job,
    this.fullName = `${this.firstName} ${this.lastName}`;

    this.sayHello = function(name){
        return `Hello from ${name}`;
    }
};

console.log(Person);
let aleksandar = new Person("Aleksandar", "Manasiev", 1993, "SEDC");
console.log(aleksandar);
console.log(aleksandar.sayHello("Martin"));
let george = new Person("George", "Dimitrov", 1993, "SEDC");
console.log(george);

// keyword 'this' example
function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [height, width];
}
console.log(windowSize());
// end of this example


function Car(brand, model, yearOfProduction){
    this.brand = brand,
    this.carModel = model,
    this.yearOfProduction = yearOfProduction;

    this.printCarInfo = function(){
        return `${this.brand} is created in ${this.yearOfProduction}`;
    }
};

let audi = new Car("Audi", "A5", 2015);
let mercedes = new Car("Mercedes", "E250", 2005);
let vw = new Car("VW", "Polo", 2020);

console.log(audi);
console.log(audi.printCarInfo());
console.log(mercedes);
console.log(vw);

console.log("--------- Exercise 5 ----------")
// Exercise 5 Example

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let submitBtn = document.getElementById("submitBtn");
let studentsElement = document.getElementById("list");

function Student(first, last, age){
    this.firstName = first,
    this.lastName = last,
    this.age = age
}

let studentsArray = [];

function addContentInDiv(students, element){
    element.innerHTML = "";
    element.innerHTML += `<ul>`;
    for(let i = 0; i < students.length; i++){
        element.innerHTML += `<li> Student ${i}: ${students[i].firstName} </li>`;
    }
    element.innerHTML += `</ul>`;
}

submitBtn.addEventListener("click", function(){
    let student = new Student(firstNameInput.value, lastNameInput.value, ageInput.value);
    console.log(student);
    studentsArray.push(student);
    console.log(studentsArray);
    addContentInDiv(studentsArray, studentsElement);
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
});
