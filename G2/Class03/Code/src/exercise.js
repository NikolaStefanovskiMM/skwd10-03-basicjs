var money = parseInt(prompt("How much money do you have?"));

if (money > 300) {
    alert("You can have a drink");
} else if (money > 200) {
    alert("You can buy a bagpack");
} else if (money > 50) {
    alert("You can have a milk");
}
else if (money > 20) {
    alert("You can have a candy");
}
 else {
    alert("You can't buy anything!");
}
