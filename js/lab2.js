console.log("LAB 2 part 1 & 2");

// ! lab 2 part 1 task 1.
let pTagFinder1 = document.querySelector("p");
console.log("The p tags parent is: " + pTagFinder1.parentElement);

// let pTagFinder = document.getElementById("paragraph1");
// console.log("the p tags parent is: " + pTagFinder.parentElement);

// ! lab 2 part 1 task 2.
let span_container = document.getElementsByTagName("span");
console.log(span_container);

// ! Lab 2 part 1 task 3
let listSibling = document.getElementById("list_2");
console.log("second Sibling is: " + listSibling.previousElementSibling);
console.log("first sibling is: " + listSibling.nextElementSibling);

// ! Lab 2 part 1 task 4
let childContainer = document.getElementById("childContainer");
console.log(childContainer.childNodes);

// ! Lab 2 part 1 task 5
let paragraphElementContainer = document.getElementById(
	"paragraphElementContainer",
);

console.log(
	"firstElementChild: " + paragraphElementContainer.firstElementChild,
);

console.log("lastElementChild: " + paragraphElementContainer.lastElementChild);

// ! Lab 2 part 1 task 6
let multipleLevelsContainer = document.getElementById(
	"multipleLevelsContainer",
);
