console.log("I'm connected");
// let Num1 = parseInt(prompt("Enter first number"));
// let Num2 = parseInt(prompt("Enter second number"));
// let Num3 = parseInt(prompt("Enter third number"));
// let Num4 = parseInt(prompt("Enter fourth number"));
// let Num5 = parseInt(prompt("Enter fifth number"));
// let array5 = [Num1, Num2, Num3, Num4, Num5];
// function sumOfArray5(array5){
//     if (Number.isNaN(Num1) || Number.isNaN(Num2) || Number.isNaN(Num3) || Number.isNaN(Num4) || Number.isNaN(Num5)) {
//         alert("ERROR");
//     } else {
//         let sum = Num1 + Num2 + Num3 + Num4 + Num5;
//         alert(sum);

//     }
// }

//sumOfArray5(array5);

function sumOfNumbers(numbersArray) {
    let isValid = true;
    let sum = 0;
    for (let number of numbersArray) {
        if (Number.isNaN(number)) {
            isValid = false;
            break;
        } else {
            sum += number;
        }
    }

    if (isValid) {
        alert(sum);
    } else {
        alert("ERROR");
    }
}

// let numbers = [];
// let counter = 0;
// while (counter < 5) {
//     let input = prompt(`Enter the ${counter + 1} number`);
//     let parsedNumber = Number.parseInt(input);
//     numbers.push(parsedNumber);
//     counter += 1;
// }

// sumOfNumbers(numbers);


// let someArray = [];
// let inputNewValue = "y";
// do {
//     let input = prompt("Enter some value");
//     someArray.push(input);
//     inputNewValue = prompt("Do you want to continue entering new values. Enter 'y' to continue enter 'n' to finish");
// } while (inputNewValue === 'y');


// console.log(someArray);


function three() {
    return 3;
}

// let result = three();
// console.log(result);

function sum(num, num1) {
    let result = num + num1;
    return result;
}

// let result1 = sum(1321, 2);
// console.log(result1);

function getMonth(monthNumber) {
    let monthName = "";
    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        default:
            break;
    }
    return monthName;
}

function getMonth(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
        case 2:
            return "February";
        default:
            return "";
    }
}

function negate(arr) {
    let result = []
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 0) {
            let positive = arr[i] * -1;
            result.push(positive);
        }
        else {
            let negative = arr[i] * -1;
            result.push(negative);
        }
    }
    // console.log(result);
    return result;
}

// console.log(negate([-1, -2, 2, 1]));

let mixxedArray = ["Trajan", "Nikola", NaN, true, "Hello", 23, 5, "THE END"];

// for (let element of mixxedArray) {
//     if (typeof element === 'string') {
//         console.log(element);
//     }
// }


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let text = "";
// for (let num of numbers) {
//     if (num % 2 === 0) {
//         text += `${num} \n`;
//     } else {
//         text += `${num}`;
//     }
// }
// console.log(text);