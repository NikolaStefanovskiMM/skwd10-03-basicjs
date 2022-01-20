var planets = [];
var ul = $("ul");
fetch('https://swapi.dev/api/planets/')
.then(response => response.json())
.then(response => {
    for (let planet of response.results) {
        var planetObj = new Planet(planet.name, planet.climate, planet.gravity, planet.population);
        planets.push(planetObj);
        var previousHtml = ul.html();
        ul.html(previousHtml + `<li>${planet.name}</li>`)
    }
    console.log(planets);
});

function Planet(name, climate, gravity, population) {
    this.name = name;
    this.climate = climate;
    this.gravity = gravity;
    this.population = population;
}