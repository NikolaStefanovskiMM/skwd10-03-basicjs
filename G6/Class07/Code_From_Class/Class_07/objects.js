function personWalk() {
  console.log(`${this.firstName} ${this.lastName}`);
}
let person2 = {};
// let person = {
//   firstName: "Goce",
//   lastName: "Kabov",
//   age: 29,
//   sleep: function () {
//     console.log("Go to sleep");
//   },
//   walk: personWalk,
//   introduce: function () {
//     alert(`Hi my name is ${this.firstName} ${this.lastName}`);
//   },
// };
// person.walk();

// console.log(person.firstName);
let key = "firstName";
// console.log(person[key]);

// person.walk();
// let person1 = new Object();

// let person = {
//   firstName: "goce",
//   lastName: "kabov",
//   age: 29,
//   isCoronaPositive: false,
//   subjects: ["Css", "Html", "JS", "C#"],
//   address: {
//     street: "Street Name",
//     number: 123,
//     city: "Kocani",
//   },
// };

// console.log(person.address.city);

let hotel = new Object();
hotel.name = "My Hotel";
hotel.rooms = 24;
hotel["availableRooms"] = 15;

hotel.getReservedRooms = function () {
  return this.rooms - this.availableRooms;
};

hotel.reserveRooms = function (numberOfRooms) {
  this.availableRooms = this.availableRooms - numberOfRooms;
};

// let availableRooms = hotel.getReservedRooms();

// hotel.reserveRooms(3);
// hotel.reserveRooms(2);
// hotel.reserveRooms(4);

hotel.name = "Different name";
// hotel["name"] = "Diferent name";
delete hotel["name"];
console.log(hotel.name);

let person = new Object();
person.firstName = "Goce";
person.lastName = "Kabov";
person.age = 29;
person.changeInfo = function (
  newFirstName = "Bob",
  newLastName = "Bobsky",
  newAge = 0
) {
  this.firstName = newFirstName;
  this.lastName = newLastName;
  this.age = newAge;
};

person.changeInfo("Angel", "Mitrov", 22);

console.log(person);

// Constructor functions

function Person(fullName, year, job) {
  this.name = fullName;
  this.yearOfBirth = year;
  this.job = job;

  this.calculateAge = function () {
    // how we can get current year
    let currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  };
}
// new => creates {}
let person1 = new Person("Goce Kabov", 1992, "Web Developer");
// let person2 = new Person("John Doe", 1992, "Web Developer");
// let person3 = new Person("Bob Bobsky", 1995, "Dentist");
// let person4 = new Person("Jane Doe", 1991, "Designer");
// console.log(person1);
// console.log(yearOfBirth);
// console.log(calculateAge());
// person1.calculateAge();
// person2.calculateAge();
// person3.calculateAge();
// person4.calculateAge();

function windowSize() {
  let width = this.innerWidth;
  let height = this.innerHeight;
  return [height, width];
}

// console.log(windowSize());
console.log(window);

var fullName = "Goce Kabov";
function printFullName() {
  console.log(this.fullName);
}

let person10 = {
  fullName: "Angel Mitrov",
  printName: printFullName,
};

printFullName();

console.log("--------------------------------------------");
person10.printName();
