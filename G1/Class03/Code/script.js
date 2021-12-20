console.log("script connected");

// example what day is it
var userInput = prompt("Please enter a number between 1 and 7");
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