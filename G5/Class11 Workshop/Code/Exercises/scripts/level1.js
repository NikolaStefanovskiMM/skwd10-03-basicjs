let someArray = [10, 15, false, null, undefined, NaN, "Yes", 100, "Array Element", 200, ""];

function checkArray(array){
    let helperArray = [];
    for(let i = 0; i < array.length ; i++){
        if(!!array[i]){
            helperArray.push(array[i])
        } else {
            console.log(`Item ${i}. ${array[i]} is a falsy value.`);
        }
    }
    return helperArray;
};

let filtredArray = checkArray(someArray);
console.log(filtredArray);