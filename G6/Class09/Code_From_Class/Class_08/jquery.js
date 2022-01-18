// let allElements = $("*");
// console.log(allElements);

// let wrappers = $(".innerWrapper");
// console.log(wrappers);

// let mainTitle = $("#mainTitle");
// console.log(mainTitle);

// let p = $(".innerWrapper > p");
// console.log(p.first());
// console.log(p.last());

// let lastP = wrappers.find(".innerWrapper").last().find("p").last().get(0);
// console.log(lastP);

// let h3 = wrappers.find("h3").get();
// let h3 = wrappers.find("h3").last().next();
// console.log(h3);

// $(document).on("ready", function () {
//   let div = $("div").first();
//   console.log(div, " DIV");
//   let p = $("#first > p").last();
//   console.log(p, " P");
//   let h1 = div.find("h1").first();
//   console.log(h1, " H1");
//   let h3 = h1.next();
//   console.log(h3, " H3");
//   let button = $("button").first();
//   console.log(button, " BUTTON");
//   button.get(0).addEventListener("click", function () {
//     console.log($("input").first().val(), "INPUT VALUE");
//   });
// });

$(function () {
  let newDiv = $("<div>");
  newDiv.text("I AM NEWEST!");
  newDiv.css("color", "yellow");

  //   $("body").append(newDiv);
  newDiv.prependTo($("body"));

  console.log(newDiv);
  let div = $("div").first();
  // newDiv.appendTo(div);
  console.log(div.html());
  console.log(div, " DIV");
  let p = $("#first > p").last();
  console.log(p.text(), "TEXT");
  console.log(p, " P");
  let h1 = div.find("h1").first();
  console.log(h1, " H1");
  let h3 = h1.next();
  console.log(h3, " H3");
  let button = $("button").first();
  let button1 = $("button").last();
  console.log(button, " BUTTON");
  //   button.get(0).addEventListener("click", function () {
  //     console.log($("input").first().val(), "INPUT VALUE");
  //     // h1.hide();
  //     p.text("I AM CHANGED");
  //   });

  //   button.on("click", function () {
  //     // do some magic...
  //   });

  button.click(function (e) {
    console.log(e.target);
    h1.hide();
    p.text("I AM CHANGED");
  });

  $("input")
    .first()
    .keypress(function (event) {
      console.log(event.target.value);
    });

  button1.get(0).addEventListener("click", function () {
    h1.show();
    // div.html(`<span>I AM NEW ELEMENT</span>`);
    // p.after("<span>I AM NEW SPAN</span>");
    p.before("<span>I AM NEW SPAN</span>");
    h1.css("color", "blue");
  });
});
