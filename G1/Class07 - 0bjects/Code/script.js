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