let myInput = document.getElementById("myInput");
let contentDiv = document.getElementById("content");

function checkInput(value, length, element){

    if(value.length < length){
        element.innerText = `You must enter at least ${length} characters`;
    }
    else{
        element.innerText = `The value you entered is: ${value}`;
    }
}

function handler(){
 //code
}

myInput.addEventListener("blur", function(e){
    //code
    checkInput(e.target.value, 5, contentDiv);
});
myInput.addEventListener("blur", handler);

//......

handler();