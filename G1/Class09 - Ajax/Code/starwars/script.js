var p = $("p");
$.ajax({
    url: "https://swapi.dev/api/people/1/",
    success: function(result) {
        console.log(result);
        var people = new People(result.name, result.height, result.mass);
        console.log(people);
        p.text(people.printInfo());
    }
})

function People(name, height, mass) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.printInfo = function() {
        return `Name: ${this.name}, Height: ${this.height}, Mass: ${this.mass}`;
    }
}