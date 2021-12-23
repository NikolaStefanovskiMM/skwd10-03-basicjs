//global variable across all scripts
var a = 5;
console.log(a);

//global variable across all scripts and can not be overwritten
let b = 8;
console.log(b);


function example(){
    var variable = 9;
    //var exists between the {} brackets of the function
    console.log("inside example");
    if(1 == 1)
    {
        console.log("inside if");
       //let exists only in the block {} it is defined in
       let c = 6;
       var cc = 6;
       console.log(c);
       console.log(cc);
    }
    //console.log(c); - c is now out of the block and is not recognized
    console.log(cc);
}
example();
//!!!VARIABLES DEFINED IN A FUNCTION ARE NOT KNOWN OUTSIDE!!!
console.log(variable); 
console.log(cc);