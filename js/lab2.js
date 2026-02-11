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

//! Lab 2 part 2 task 1
let findParagraph_2_2_1 = document.getElementById("findParagraph_2_2_1");

findParagraph_2_2_1.innerText = "DOM Manipulation is fun!";

//! Lab 2 part 2 task 2
let article_2_2 = document.getElementById("article_2_2");
let colorDiv_2_2 = document.getElementById("colorDiv_2_2");
let changeColorButton_2_2 = document.getElementById("changeColorButton_2_2");

function changeColorFunction() {
	colorDiv_2_2.style.color = "red";
}

changeColorButton_2_2.addEventListener("click", changeColorFunction);

//! Lab 2 part 2 task 3
let changeDivDynamically_2_2_3 = document.getElementById(
	"changeDivDynamically_2_2_3",
);

for (let i = 0; i < 5; i++) {
	let createNewListItems_2_2_3 = document.createElement("li");
	createNewListItems_2_2_3.innerText = "list item number" + (i + 1);
	changeDivDynamically_2_2_3.appendChild(createNewListItems_2_2_3);
}

//! Lab 2 part 2 task 4
let removeMe = document.getElementById("removeMe");
let removeButton_2_2_4 = document.getElementById("removeButton_2_2_4");

function removeItem() {
	removeMe.remove();
}

removeButton_2_2_4.addEventListener("click", removeItem);

//! Lab 2 part 2 task 5
let inputBar_2_2_5 = document.getElementById("inputBar_2_2_5");
let inputBarText = inputBar_2_2_5.previousElementSibling;
console.log(inputBarText);

inputBar_2_2_5.addEventListener("input", (e) => {
	inputBarText.innerText = inputBar_2_2_5.value;
});

//! Lab 2 part 2 task 6
let visibilityButton = document.getElementById("visibilityButton");
let visibilityParagraph = document.getElementById("visibilityParagraph");

function visibilityFunction() {
	if (visibilityParagraph.style.display === "none") {
		visibilityParagraph.style.display = "block";
	} else {
		visibilityParagraph.style.display = "none";
	}
}

console.log(visibilityParagraph);

visibilityButton.addEventListener("click", visibilityFunction);

//! Lab 2 part 2 task 7
let box = document.getElementsByClassName("boxButton");
let boxButton = document.getElementById("boxButton");

//addEventListener
