console.log("LAB 2 part 1 & 2");

//! lab 2 part 1 task 1.
let pTagFinder1 = document.querySelector("p");
console.log("The p tags parent is: ", pTagFinder1.parentElement);

// let pTagFinder = document.getElementById("paragraph1");
// console.log("the p tags parent is: " + pTagFinder.parentElement);

//! lab 2 part 1 task 2.
let span_container = document.getElementsByTagName("span");
console.log(span_container);

//! Lab 2 part 1 task 3
let listSibling = document.querySelector("#list_2");
console.log("second Sibling is: ", listSibling.previousElementSibling);
console.log("first sibling is: ", listSibling.nextElementSibling);

//! Lab 2 part 1 task 4
let childContainer = document.getElementById("childContainer");
console.log(childContainer.childNodes);

//! Lab 2 part 1 task 5
let paragraphElementContainer = document.querySelector(
	"#paragraphElementContainer",
);

console.log(
	paragraphElementContainer.firstElementChild,
	paragraphElementContainer.lastElementChild,
);

//! Lab 2 part 1 task 6
let multipleLevelsContainer = document.querySelector(
	"#multipleLevelsContainer",
);

console.log(multipleLevelsContainer.parentElement.parentElement);

//! Lab 2 part 1 task 7
let ul_7_1 = document.querySelector("#ul_7_1");
let childrenOful_7_1 = ul_7_1.children;

console.log("number of <li> elements: ", childrenOful_7_1.length);

for (let child of childrenOful_7_1) {
	console.log(child.id);
}

//! Lab 2 part 1 task 8
let divTask_8 = document.getElementById("divTask_8");
console.log(divTask_8.parentElement.parentElement);

//! Lab 2 part 1 task 9
let divTask_9 = document.getElementById("divTask_9");
console.log("Second <p>: ", divTask_9.children[1]);

//! Lab 2 part 1 task 10
let ulTask_10 = document.getElementById("ulTask_10");
let liTask_10_1 = document.getElementById("liTask_10_1");

let currentListItem = liTask_10_1;

while (currentListItem) {
	console.log(currentListItem);
	currentListItem = currentListItem.nextElementSibling;
}
