console.log("Connected");

//prettier-ignore
// SEKOJ NOV ELEMENT/ITEM GO ODELUVAME SO ZAPIRKE
// ZA DA NAPRAVIME NIZA POTREBNI SE KOCKASTI ZAGRADI
// JA ZACUVUVAME VREDNOSTA VO VARIJABLA
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];

console.log(daysOfWeek);

let emptyArray = [];
console.log("Empty array", emptyArray);

//prettier-ignore    //0index      1index   2index 3i   4i  5i      6index      7index
//prettier-ignore
let randomValue = ['Hello world', false, undefined, 2, 4+5, true, 'George', 'Aleksandar'];
console.log("Random value array:", randomValue);

// ARRAYS SE ZERO-INDEXED

// SO array[index] pristapuvame do toj element vo nizata na soodvetniot index
// vo nasiot slucaj daysOfWeek[index]
console.log("Day with index 2 is: ", daysOfWeek[2]);
console.log("Friday:", daysOfWeek[4]);

let favouriteDays = `My favourite days of the week are ${daysOfWeek[5]} ${daysOfWeek[6]} `;
console.log(favouriteDays);

// ARRAYS IMAAT PROPERTY LENGTH KOESTO KAZUVA KOLKU ELEMENTI IMA VO NIZATA

console.log(`There are ${daysOfWeek.length} days in the week`);

// SEKOGASH GO ZIMAME POSLEDEN INDEX
// array.length - 1
let indexOfLastItemInArray = daysOfWeek.length - 1;
console.log("Last index of the days week array is: ", indexOfLastItemInArray);

console.log(
  "Last item of the days array is: ",
  daysOfWeek[indexOfLastItemInArray]
);

//prettier-ignore
let todoList = [
    "1. Walk the dog",
    "2. Go to gym",
    "3. Study"
]

console.log(todoList);

let lastIndexOfTodoList = todoList.length - 1;

todoList[lastIndexOfTodoList] = "3. Drink coffee";
console.log("Modified todo list: ", todoList);

// ADD ITEM TO THE TODO ARRAY
todoList[todoList.length] = "4. Sleep";
console.log(todoList);

// *** PUSH *** DODAVA ELEMENT NA KRAJOT OD NIZATA

console.log("*** PUSH ***");

let movies = ["Harry Potter and the half blood Prince", "Fight Club"];
console.log("Movies: ", movies);

// array.push(elements)
movies.push("Spider-Man No Way Home");

console.log("New movie added: ", movies);

movies.push("Lord of the rings", "American Sniper");

console.log("Even more movies added: ", movies);

// *** UNSHIFT *** DODAVA NA POCETOKOT OD NIZATA
console.log("*** UNSHIFT ***");
movies.unshift("The Witcher");
console.log("Added item at the beginning of the array: ", movies);

movies.unshift("Venom", "Forest Gump");

console.log("Even more: ", movies);

// *** POP *** GO BRISHI POSLEDNIOT ITEM OD NIZATA NO ISTO TAKA MOZE DA JA VRATI NEGOVATA VREDNOST

let lastRemovedItemOfArray = movies.pop();
console.log(`Last item that was removed is: ${lastRemovedItemOfArray}`);
console.log("Oops, last item is deleted", movies);

// *** SHIFT *** GO BRISHI PRVIOT ITEM OD NIZATA NO ISTO TAKA MOZE DA JA VRATI NEGOVATA VREDNOST

let firstRemovedItemOfArray = movies.shift();

console.log(`First item that was removed is ${firstRemovedItemOfArray}`);
console.log("Oops, fist item is deleted", movies);

let indexOfMovie = movies.indexOf("Fight Club");

console.log("Movie: ", movies[indexOfMovie]);

movies[indexOfMovie] = null;

console.log("Movies modified", movies);

// ["George", "happy", "coding"]
// [1,2,3, "3", null , false]
// [1,2,3,4,5] => Zbirot na ovie broevi,
// REDUCE
