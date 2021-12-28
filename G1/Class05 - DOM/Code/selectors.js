// Selecting an element by id
let servicesElement = document.getElementById("services");
console.log(servicesElement);

// Selecting elements by class
let headers = document.getElementsByClassName("header");
console.log(headers);

// Selecting specific header from the items that have header class
let firstHeader = headers[0]; // The first
console.log(firstHeader);
let secondHeader = headers[1]; // The second
console.log(secondHeader);

// Selecting an element by tag
let listItems = document.getElementsByTagName("li");
console.log(listItems);

// Selecting an element parent 
let parentOfHeader = secondHeader.parentElement;
console.log(parentOfHeader);

// Selecting child elements
let servicesList = document.getElementById("services-list");
console.log(servicesList);
let childElements = servicesList.children;
console.log(childElements);

// Selecting one item with querySelector
let servicesListQuery = document.querySelector("#services-list");
console.log(servicesListQuery);

// Selecting multiple items with querySelectorAll
let allHeaders = document.querySelectorAll(".header");
console.log(allHeaders);

// Selecting sibling elements
let headerNextSibling = firstHeader.nextElementSibling;
console.log(headerNextSibling);
let headerPreviousSibling = firstHeader.previousElementSibling; // Will return null since it wont find any siblings that are before the header
console.log(headerPreviousSibling);