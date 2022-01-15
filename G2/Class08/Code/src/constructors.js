function Person(fName, lName, birthYear){
     this.firstName = fName;
     this.lastName = lName;
     this.yearOfBirth = birthYear;
     this.country = "Macedonia";
     this.printFullName = function(){
         console.log(`Full name: ${this.firstName} ${this.lastName}`);
     }
}
//no Person objects created

let personTanja = new Person("Tanja", "Stojanovska", 1994);
let personPetko = new Person("Petko", "Petkovski", 1995);

console.log(personTanja);
console.log(personPetko);

console.log(personTanja.firstName);
console.log(personPetko.firstName);

console.log(personTanja.country);
console.log(personPetko.country);

personTanja.printFullName();

personTanja.email = "stojanovskatanja@hotmail.com";

console.log(personTanja.hasOwnProperty("email"));
console.log(personPetko.hasOwnProperty("email"));

let thirdPerson = new Person("Third", "Person", 1960);
console.log(thirdPerson);
console.log(thirdPerson.hasOwnProperty("email"));
