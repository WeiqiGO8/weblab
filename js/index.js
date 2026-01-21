// Beginning
console.log("Hello lab");

// 1. Variables and Data Types
//  Task: Create variables of different data types as well as array, and object and log them to the console

let letter = "abcde";
let number = "12345";

let booleansT = true;
let booleansF = false;

let emptyValue = null;
emptyValue = undefined;

let myObject = { firstName: "Hannah", lastName: "Jansson" };

let myFirstArray = ["HTML", "CSS", "Javascript", "Node.js"];

console.log(letter);
console.log(number);
console.log(booleansT);
console.log(booleansF);
console.log(emptyValue);

console.log(myObject);
console.log(myFirstArray);

// 2. Loops
// Task: Print all numbers from 1 to 10 usign a for loop and a while loop

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoopArray() {
	for (const number of numbers) {
		console.log(number);
	}
}

forLoopArray;
