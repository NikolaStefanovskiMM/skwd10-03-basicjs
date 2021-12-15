//alert("Hello");

// declaration and inicialization
console.log(number1);
var number1;
console.log(number1);
number1 = 5;
console.log(number1);

// local and global declaration
var name = "testing Name";
function test() {
    var name = "Andrea";
    console.log(name);
}
test();
console.log(name);

// nulls
var nullExample;
console.log(nullExample);
console.log(typeof nullExample);
nullExample = null;
console.log(nullExample);
console.log(typeof nullExample);

console.log(null === undefined);
console.log(null == undefined);
console.log(null === undefined);

// primitive values
console.log(typeof 5.5);
console.log("hello\nfrom\nSEDC");
var isActive = true;
console.log("is Active " + isActive);

// single line comment
/*this 
is 
multiple
line
comment*/