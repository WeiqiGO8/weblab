// Beginning
console.log("Hello lab");

/*
1. Variables and Data Types
 		Task: Create variables of different data types as well as array, and object and log them to the console
*/

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

/*
2. Loops
		Task: Print all numbers from 1 to 10 usign a for loop and a while loop  
*/

let myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myForLoop() {
	for (let i = 0; i < 10; i++) {
		console.log(myNumberArray[i]);
	}
}

function myWhileLoop() {
	let x = 0;
	while (x < 10) {
		x++;
		console.log(myNumberArray[x]);
	}
}

myForLoop();
myWhileLoop();

/* 
3. Find the largest number in an array
		Task: Write a Javascript function - findLargestNumber (numbers) - that takes an array of numbers and returns the largest number in that array.

Example
const arr = [3,7,2,9,5];
console.log(findLargestNumber(arr));
	Output: 9

*/

const arr = [9, 10, 50, 3, 20];

function findLargestNumber(numbers) {}

console.log(findLargestNumber(arr));
