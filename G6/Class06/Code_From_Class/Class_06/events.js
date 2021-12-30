function onButtonClick() {
  alert("Button was clicked");
}

function onFocus() {
  console.log("The mouse is over me");
}

function onLeave() {
  console.log("The mouse is not over me anymore");
}

let button = document.getElementById("clickme");

button.onclick = onButtonClick;
button.onmouseover = onFocus;
button.onmouseleave = onLeave;
