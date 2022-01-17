var a = 5;
var b = ++a;
console.log("this is a " + a);
console.log("this is b " + b);

var text = 'It\'s a good day';
var text2 = `This is the value of the variable a: ${a}`;
console.log(text);

var obj = {
    name: "Joe"
}
var obj2 = obj;
obj2.name = "changed";
console.log(obj);

var firstname = "Joe";
var firstName = "Doe";
console.log(firstname);
console.log(firstName);

function print(arg = 2){
    console.log('this is the arg of the func ' + arg);
    var test = "this is a test";
    console.log(a);
    function printChild () {
        console.log(test);
    }
    printChild();
}
print();
// console.log(test); <-- it's not is the global scope

var x = '5';
var y = 'test';
console.log(typeof(x - y));

console.log(5 || "test");
var arr = [];
var firstElement = arr && arr[0];
console.log(firstElement);

if ({}) {
    console.log("execute");
}
console.log('5' === 5);
console.log(0 === '');

var x = 100;
if (x > 0) {

} else if (x > 20) {

}