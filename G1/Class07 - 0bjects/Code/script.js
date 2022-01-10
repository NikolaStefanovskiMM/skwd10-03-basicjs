console.log("connected");

var player = new Object();
console.log(player);
player.name = "Jon";
player.score = 1000;
player.rank = 1;
console.log(player);

var player = {
    name: "Jon",
    score: 1000,
    rank: 1
}
console.log(player);

// literal notion
var hotel = {
    name: "Hilton",
    rooms: 45,
    booked: 25,
    gym: true,
    roomTypes: ["twin", "double", "suite"],
    checkAvailability:  function() {
        return this.rooms - this.booked;
    }
};
console.log(hotel.name);
console.log(hotel.checkAvailability());
console.log(hotel["booked"]);

const keys = Object.keys(hotel);
console.log(keys);
const values = Object.values(hotel);
console.log(values);
const hasName = hotel.hasOwnProperty("name1");
console.log(hasName);

// constructor notation
var user = new Object(); // {}
console.log(user);
user.name = "Jon";
user.surname = "Doe";
user.age = 25;
console.log(user);
user.name = "Change";
console.log(user);
user.printName = function () {
    console.log(this.name + " " + this.surname);
}
user.printName();
console.log(user);
delete user.age;
console.log(user);
console.log(user.age);

var userLiteral = {};
console.log(userLiteral)

if (userLiteral) {
    console.log("{} is true?");
}
if (Object.keys(userLiteral).length > 0) {
    console.log("object has keys");
}

// reference types
console.log("this is the first user name " + user.name);
const user2 = user;
console.log("this is the second user name " + user2.name);
user2.name = "Andrea";
console.log("this is the first user name " + user.name);
console.log("this is the second user name " + user2.name);

let firstNum = 5;
let secondNum = firstNum;
secondNum = 10;
console.log(firstNum);
console.log(secondNum);

// change object properties
let person = {
    name: 'Bob',
    lastName: 'Barker'
 };
 Object.keys(person).forEach((key) => {
    person[key] += " changed";
 });
 console.log(person);

 // constructor function
 function Hotel(name, rooms, booked) {
     this.name = name;
     this.rooms = rooms;
     this.booked = booked;
     this.hasParking = true;
     this.checkAvailability = function () {
         return this.rooms - this.booked;
     }
 }

 const hotel1 = new Hotel("Hilton", 45, 12);
 const hotel2 = new Hotel("Rusia", 40, 10);
 console.log(hotel1);
 console.log(hotel2);