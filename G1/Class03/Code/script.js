console.log("script connected");

// example what day is it
//var userInput = prompt("Please enter a number between 1 and 7");
var userInput = 2;
var day = parseInt(userInput);

switch(day) {
    case 1:
        console.log("You have class today");
        break;
    case 2:
        console.log("You are free");
        break;
    case 3:
        console.log("You have class today");
        break;
    case 4:
        console.log("You are free");
        break;
    case 5:
        console.log("It's FRIDAY!");
        break;     
    case 6:
        console.log("You have class today");
        break;
    case 7:
        console.log("RELAX");
        break;
    default:
        console.log("Please enter a valid number between 1 and 7");
        break;
}

// switch example with logical operators
//var userMoney = prompt("Please enter your budget:");
var userMoney = 60;
var fridayCash = parseInt(userMoney);
switch(true) {
    case fridayCash >= 50: // 60 === (60 >= 50) => 60 === true
        console.log("You should go out to a dinner and a movie");
        break;
    case fridayCash >= 35:
        console.log("You should go out to a fine meal");
        break;
    case fridayCash >= 12:
        console.log("You should go see a movie");
        break;
    default:
        console.log("Looks like you'll be watching TV");
        break;
}
// this is not a good example to use switch

// example what day is it refactored
var userInput = prompt("Please enter a number between 1 and 7");
var day = parseInt(userInput);

switch(day) {
    case 1:
    case 3:
    case 6:
        console.log("You have class today");
        break;
    case 2:
    case 4:
        console.log("You are free");
        break;
    case 5:
        console.log("It's FRIDAY!");
        break;
    case 7:
        console.log("RELAX");
        break;
    default:
        console.log("Please enter a valid number between 1 and 7");
        break;
}
