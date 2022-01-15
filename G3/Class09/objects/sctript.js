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

delete objLiteral.name;
console.log(objLiteral);
