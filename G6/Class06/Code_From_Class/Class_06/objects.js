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
let person1 = new Object();

let person = {
  firstName: "goce",
  lastName: "kabov",
  age: 29,
  isCoronaPositive: false,
  subjects: ["Css", "Html", "JS", "C#"],
  address: {
    street: "Street Name",
    number: 123,
    city: "Kocani",
  },
};

console.log(person.address.city);
