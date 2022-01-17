let playerName = "Trajan";
let playerScore = 1000;
let playerRank = 34;
let playerAge = 33;
let playerActivity = false;

let playerTwoName = "Nikola";
let playerTwoScore = 1500;
let playerTwoRank = 3;
let playerTwoAge = 22;
let playerTwoActivity = true;

let playerOne = new Object();
playerOne.name = "Trajan";
playerOne.score = 1000;
playerOne.rank = 34;
playerOne.age = 33;
playerOne.isActive = false;

let playerTwo = new Object();
playerTwo.name = "Nikola";
playerTwo.score = 1500;
playerTwo.rank = 22;
playerTwo.age = 3;
playerTwo.isActive = true;

// console.log(playerOne);
// console.log(playerTwo);

// Literal notation
let hotel = {
  //key  : value -- colon
    name: "Quay",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

// dot notation
console.log(hotel.name);
// square bracket syntax
console.log(hotel['name']);

// for (let room of hotel.roomTypes) {
//     console.log(room);
// }

function show (propertyName){
    console.log(hotel[propertyName]);
}

// show('name');
// show('rooms');
// show('roomTypes');

let obj = new Object();
let objLiteral = {
    name: "Tajan"
};
obj.name = "Trajan";
obj['age'] = 33;

objLiteral.lastName = "Stevkovski";
objLiteral["age"] = 33;

console.log(obj);

// delete objLiteral.name;
// console.log(objLiteral);

function getFullName() {
    return `${objLiteral.name} ${objLiteral.lastName}`;
}

objLiteral.getFullName = getFullName;

objLiteral.getName = function () {
    return objLiteral.name;
}

// console.log(objLiteral);

function Person(name, dob, job) {
    this.name = name;
    this.yearOfBirth = dob;
    this.job = job;

    this.calculateAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    this.getNameWithTitle = function () {
        return `mr. ${this.name}`;
    }

    this.greet = function () {
        return `Hello ${this.name}, how are you?`;
    }
}

let trajan = new Person("Trajan", 1987, "Trainer");
let nikola = new Person("Nikola", 1990, "Assistant");

// console.log(trajan);
// console.log(nikola);

// console.log(trajan.calculateAge());
// console.log(nikola.calculateAge());

let bob = new Person("Bob", 1999, "Support");

let p1 = {
    name: "",
    lastName: "",
    age: "",
    calculateAge: function () {
        return "";
    },
    getFullName: function () {
        
    }
};

let p2 = {
    name: "",
    lastName: "",
    age: "",
    calculateAge: function () {
        return "";
    }
};

let p3 = {
    name: "",
    lastName: "",
    age: "",
    calculateAge: function () {
        return "";
    }
};


window.sayHello = function () {
    console.log(this);
}

function sayHello1() {
    console.log(this);
}

// sayHello();
// sayHello1();

function Car(name) {
    this.name = name;

    this.getCarName = function () {
        console.log(this);
    }
}

let car = new Car("Mazda");

car.getCarName();
car.sayHello = sayHello1;

car.sayHello();




let p3 = {
    name: "", // proprerty
    lastName: "",
    age: "",
    calculateAge: function () { // method
        return "";
    }
};

let p18 = new Person("Trajan", 1111, "Job");
