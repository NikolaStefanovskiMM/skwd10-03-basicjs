// for lopp

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days);
for(let i = 0; i < days.length; i++){
// for(let i = 0; i <= 4; i++){
// for(let i = 0; i < days.length-3; i++){
// for(let i = 0; i <= days.length-1; i++){
    console.log(`Counter value: ${i}`);
    console.log(days[i]);
    console.log('End of circle');
    console.log('=======');
}
console.log('End to start array');
//naopacki
for(let i = days.length - 1; i >= 0; i--){
    console.log(days[i]);
}

console.log('For-of loop')
// for-of loop
// list ALL the elements in an array
for(let element of days){
    console.log(element);
}


// Task 01 
// Write a function that will have an array as an argument and will determine the largest and smallest number.
// It will return a string that says: The largest number is ?? and the smallest is ??

let numbersArray = [-6, 456, 10000000000, -999999, 13, 67, 6, 354];

function findMinAndMax(array){
    let min = Infinity;
    let max = -Infinity;

    for(let number of array){
        console.log(`Number to check: ${number}`);
        console.log(`Minimum before check: ${min}`);
        console.log(`Maximum before check: ${max}`);
        console.log('Checking................');

        if(number > max){
            max = number;
        }
        if(number < min){
            min = number;
        }

        console.log(`Minimum after check: ${min}`);
        console.log(`Maximum after check: ${max}`);
        console.log(' ================== END OF CYCLE');
    }
    return `The largest number is ${max} and the smallest is ${min}`;
}

console.log(findMinAndMax(numbersArray));

// Task 02
// Write a function that will have an array of student names as an argument. It will ask the user to enter a name and the function should check if there is such a student in the array. It should return a string that says: 'Student ?? is in the list' or 'There is no such student'

function checkStudentName(names, username){
    let isInList = false;
    for(let i = 0; i < names.length; i++){
        if(names[i] === username){
            isInList = true;
        }
    }
    // if(isInList){
    //     return `Student ${username} is in the list`;
    // } else{
    //     return 'There is no such student';
    // }
    // if(!isInList){
    //     return 'There is no such student';       
    // } else{
    //     return `Student ${username} is in the list`;
    // }

    if(!isInList){
        return 'There is no such student';  
    }
    return `Student ${username} is in the list`;

}


//NOT the best solution
// function checkStudentName2(names, username){
//     let isInList = false;
//     for(let i = 0; i < names.length; i++){
//         if(names[i] === username){
//             console.log(`Student ${username} is in the list`)
//         } else{
//             console.log('There is no such student');
//         }
//     }

// }

let students = ['Aleksandar', 'Marjan', 'Milena', 'Katerina', 'Viktor', 'Andrej'];
let blaArray = ['bla', 'bla-bla'];
let studentName = prompt('Enter student name:');

console.log(checkStudentName(students, studentName));
// checkStudentName2(students, studentName);


// Task 03
// Write a JavaScript function to remove 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Return new array with valid results.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let sampleArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function validateArray(array){
    let newArray = [];
    for(let element of array){
        // if(element !== null && element !== 0 && element !== '' && element !== false && element !== undefined && !isNaN(element)){
        //     newArray.push(element);
        // }

        //THE BEST
        if(element){
            newArray.push(element);
        }
    }
    return newArray;
}

// function validateArray2(array){
//     let newArray = [];
//     for(let element of array){
//         if(element == null || element == 0 || element == '' || element == false || element == undefined || isNaN(element)){
//             continue;
//         }
//         newArray.push(element);
//     }
//     return newArray;
// }

let validArray = validateArray(sampleArray);
console.log(validArray);
// console.log(validateArray2(sampleArray));

function unluckyStudent(){
    let number = Math.floor((Math.random() * 24) + 1);
    return number;
}
console.log(unluckyStudent());
