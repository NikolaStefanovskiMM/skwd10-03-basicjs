let groceries = ["Milk","Bread", "Juice", "Bananas"];

// let newList = [];
// let count = 1;
// while(count <= 5){
//     newList.push(prompt('Enter an item'));
//     counter++;
// }

// let input ="";
// newList = [];
// alert('Enter items until you enter end');
// input = prompt('Enter an item');
// while(input != 'end'){
//     newList.push(input);
//     input = prompt('Enter an item');
// }


function printGroceriesList(groceriesList){
    console.log('You need to buy:');

    for(let i in groceriesList){
        let position = +i + 1; // parseInt(i) + 1
        console.log(`${position}. ${groceriesList[i]}`);
    }
}

function checkItem(item, groceriesList){
    let found = false;

    for(let listItem of groceriesList){
        if(listItem.toLowerCase() == item.toLowerCase()){
            found = true;
            break;
        }
    }
   if(found == true){
       console.log(`You have ${item} in the list`);
   }
   else{
    console.log(`You don't have ${item} in the list`);
   }

}

function addItem(item, groceriesList){
    if(typeof(item) != "string" || item == ""){
        console.log("Invalid input");
        return;
    }

    groceriesList.push(item);
    console.log(groceriesList);
}

function deleteItem(item, groceriesList){
    //finds the index of the item in groceriesList. If it doesn't find item, returns -1.
    let index = groceriesList.indexOf(item); 
    /*
    deleteItem("Bread", groceries); ->>>>>
    ["Milk","Bread", "Juice", "Bananas"].indexOf('Bread'); -> 1


    deleteItem("Joghurt", groceries); ->>>>>
    ["Milk","Bread", "Juice", "Bananas"].indexOf('Joghurt'); -> -1
    */
    console.log(`Index: ${index}`);
    if(index < 0){
        console.log(`${item} does not exist in the list`);
    }
    else{
        groceriesList.splice(index, 1);
        console.log(groceriesList);
    }
}

printGroceriesList(groceries);
checkItem("Juice", groceries);
checkItem("Oranges", groceries);

addItem("Chocolate", groceries);
addItem(6, groceries);

deleteItem("Bread", groceries);
deleteItem("Joghurt", groceries);
