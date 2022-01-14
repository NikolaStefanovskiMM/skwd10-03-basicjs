let allElements = $("*");
// console.log(allElements);

let wrappers = $(".wrapper");
// // console.log(wrappers);

let mainTitle = $("#mainTitle");
// console.log(mainTitle);

let p = $(".innerWrapper > p");
// console.log(p.first());
// console.log(p.last());

let lastP = wrappers.find(".innerWrapper").last().find("p").last().get(0);
console.log(lastP);
