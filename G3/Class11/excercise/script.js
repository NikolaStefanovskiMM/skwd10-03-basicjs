function Band(name, albums, members, tags, active) {
    this.name = name;
    this.albums = albums;
    this.members = members;
    this.tags = tags;
    this.active = active;

    this.showMembers = function () {
        let membersString = '';
        for (let member of this.members) {
            membersString += member.name + ", "; 
        }
        return membersString;
    }
}

function mapBands(data) {
    let bands = [];
    for (let band of data) {
        let bandObj = new Band(band.name, band.albums, band.members, band.tags, band.active);
        bands.push(bandObj);
    }
    return bands;
}

function showBandsInfo(bands) {
    let resultDiv = document.getElementById("result");
    let resultHtml = '';
    for (let band of bands) {
        let active = band.active ? "Active" : "Not Active";
        let result = `The band ${band.name} has ${band.albums.length} albums is currently an ${active} band.\n
        The members of the band are ${band.showMembers()}`;
        resultHtml += `<h3>${result}</h3>`
    }
    resultDiv.innerHTML = resultHtml;
}

document.getElementById("btn").addEventListener('click', function () {
    fetch("https://raw.githubusercontent.com/trajanstevkovski/sedc6-frontend-exam/master/band-data.json")
        .then(response => response.json()) // this will patrse the response
        .then(data => {
            let bands = mapBands(data);
            console.log(data);
            console.log(bands);
            showBandsInfo(bands);
        }); // this part will show the data in console
});
