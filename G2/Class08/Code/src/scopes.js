console.log("==== Global scope ======");
function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    console.log(`Size: ${width} ${height}`);
    console.log(this);
}

windowSize(); // -> window.windowSize();, this -> window

let shape = {
    width:40,
    height:30,
    type:"rectangle",
    printArea: function(){
        let area = this.width * this.height; //this -> shape
        console.log(area);
    }
}

shape.printArea();
//shape.windowSize(); ERROR

var width = 500; //window.width = 500;
let square = {
    width: 40
}

function printWidth(){
    console.log(this.width);
}

printWidth(); //window.printWidth(); this -> window

square.gettingWidth = printWidth;
/*
square.gettingWidth = function(){
     console.log(this.width);
}
*/
square.gettingWidth(); //this -> square