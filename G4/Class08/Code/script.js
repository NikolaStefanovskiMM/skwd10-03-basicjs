console.log('We are live!');

//-------------------------OBJECTS------------------------

//------------------------- Literal Notation ------------------------

let petre = {
    firstName: 'Petre',
    lastName: 'Arsovski',
    age: 28,
    job: 'developer',
    canSing: false,
    sayDomething: function(text){
        return `${this.firstName} says ${text}`; // keyword THIS refers to the object that it is a part of
    }
}

// accessing a property in object
console.log(petre.firstName);
console.log(petre.age);
let wiseThoughtPt1 = petre.sayDomething('JS is really easy');
console.log(wiseThoughtPt1);

//change value of property
petre.job = 'software developer';
console.log(petre.job);
//adding new property
petre.hobby = "gym";
console.log(petre.hobby);
//creating empty object
let pane = {};
pane.firstName = "Panche";
console.log(pane.firstName);


//------------------------- Constructor Notation (1) ------------------------
let dog = new Object();
dog.name = "Rex";
// 20 lines code
dog.breed = "german shepherd";
dog.bark = function(){
    return `WOOF WOOF`;
}
console.log(dog.breed);
console.log(dog.bark());

//accessing property with ['propertyName']
console.log(dog['name']);
//deleting a property
delete dog.breed;
console.log('Dog object after delete', dog);
delete dog.bark;
console.log(dog)


// Exercise 3
// delete the lecture property from the following object. Add a property age to the object. Add a method getFullName that returns the full name ( First Name and Last name )
let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
};

console.log(trainer.lecture);
delete trainer.lecture;
console.log(trainer.lecture);
trainer.age = 25;
console.log(trainer);
trainer.getFullName = function(){
    return `${this.name} ${this.lastName}`;
};
let trainerFullName = trainer.getFullName();
console.log(trainerFullName);

//------------------------- Constructor Notation (2) ------------------------
//Using Constructor Functions

function Dog(nameFromUser, breedFromUser, ageFromUser, favFoodFromUser, isLazyFromUser){
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = ageFromUser;
    this.myThis = this;
    this.favFood = favFoodFromUser;
    this.isLazy = isLazyFromUser;

    this.bark = function(){
        return 'WOOF WOOF WOOF';
    }
}

let myDog = new Dog('Alice', 'Belgian Shepperd', 7, 'chicken', false);
console.log(myDog);
myDog.age = 8;
console.log(myDog.age);
console.log(myDog);
console.log(myDog.myThis);

let myNeighboursDog = new Dog('Otto', 'Golden Retriever', 1);
console.log(myNeighboursDog);
delete myNeighboursDog.favFood;
delete myNeighboursDog.isLazy;
console.log(myNeighboursDog);
console.log(myNeighboursDog.myThis);

function checkingWhatIsThis(){
    console.log(`What is this from regular function: ${this}`)
}

console.log('----THIS----')
checkingWhatIsThis();
console.log(myDog.bark());

console.log('------------ Exercise 04 -----------');
/* Create a car object with some properties
model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance. */

function Car(inputModel, inputColor, inputYear, inputFuel, inputConsuption){
    this.model = inputModel;
    this.color = inputColor;
    this.year = inputYear;
    this.fuel = inputFuel;
    this.fuelConsuption = inputConsuption;

    this.calculateDistance = function(inputDistance){
        let fuelWeNeed = inputDistance * (this.fuelConsuption / 100);

        // if(fuelWeNeed > this.fuel){
        //     return `Sorry, you cannot go on holiday with this car!`;
        // }
        // else{
        //     return `You can go on holiday! Hooray!`;
        // }
        return fuelWeNeed > this.fuel ? `Sorry, you cannot go on holiday with this car!` : `You can go on holiday! Hooray!`;
    };
}

let car01 = new Car('Yugo', 'red', 1970, 10, 15);
let car02 = new Car("BMW", "white", "2018", 60, 4);
// let car100
let cars = [];
cars.push(car01);
cars.push(car02);

console.log(car01.model);
console.log(car01.calculateDistance(1000));
console.log(car02.calculateDistance(1000));
console.log(car01);
console.log(car02);
console.log(cars);
