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

let mySet = new Set();
mySet.add("1 kr");
mySet.add("2 kr");
mySet.add("3 kr");

let myObject = { firstName: "Hannah", lastName: "Jansson" };

let myFirstArray = ["HTML", "CSS", "Javascript", "Node.js"];

console.log(letter);
console.log(number);
console.log(booleansT);
console.log(booleansF);
console.log(emptyValue);

console.log(mySet);

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
const biggestNumberArray = [9, 10, 50, 3, 20];

// function findLargestNumber(arr) {
// 	return Math.max.apply(null, arr);
// }

function findLargestNumber(arr) {
	let tmpBiggestNumber = 0;
	for (const number of biggestNumberArray) {
		if (number > tmpBiggestNumber) {
			tmpBiggestNumber = number;
		}
	}
	return tmpBiggestNumber;
}

console.log(findLargestNumber(biggestNumberArray));

/*
4. Functions
	Task: Write a function to calculate the factorial of a number
*/

function calculateFactorial(n) {
	let tempN = 1;

	for (let i = 1; i <= n; i++) {
		// n! = n = n * (n-1) * (n-2) * ... * 1

		tempN = tempN * i;
	}
	return tempN;
}

console.log("Factorial of " + 5 + " is " + calculateFactorial(5));

/* 
5. Objects
Task: Create an object to represent a car and log its properties and values.
*/

let carObject = {
	Brand: "Volvo",
	Color: "Black",
	Model: "XC60",
	Wheels: 4,
	Engine: "D4",
	getName: function () {
		return this.Brand + " " + this["Model"];
	},
};

console.log(carObject.getName());

/*
6. forEach with Callback
	Task: Create an array of fruits and print each fruit using a forEach with a callback function 

	ex:
	let fruits = ["appel", "Banana", "Cherry", "Date"] 
*/

let fruits = ["Apple", "Banana", "Orange", "Pear"];

fruits.forEach((element) => {
	console.log(element);
});

/* 
7. Capitalize the First Letter of Each Word
Task: Write a function capitalizeWords(sentence) that takes a sentence as an input andcapitalizes the fi rst letter of each word in the sentence. Return the modifi ed sentence.

Example:
console.log(capitalizeWords("hello world from javascript!"));
Output: "Hello World From Javascript!"
*/

// function upperCaseFirstWord(str) {
// 	let str = " ";
// 	let splitWords = str.split(" ");

// 	splitWords.forEach((word) => {
// 		let sliceWords = str.slice(0, 1);
// 		console.log(sliceWords);
// 	});

// 	console.log(str);
// }

/*
8. Merge Two Objects
	Task: Write a function mergeObjects(obj1, obj2) that merges the properties of obj 2 into obj1. If a property already exists in obj1, it should be overwritten by the corresponding property in obj2. Return the merged object.

	Example:
let person = { name: "Alice", age: 25 };
let jobInfo = { role: "Developer", age: 30 };

const merged = mergeObjects(person, jobInfo);
console.log(merged);

/ Output: {name: "Alice", age: 30, role: "Developer"};

*/

let person = { name: "Alice", age: 25 };
let jobInfo = { role: "Developer", age: 30 };

function mergeObjects() {
	let obj3 = Object.assign(person, jobInfo);
	return obj3;
}

console.log(mergeObjects());

/* 
9. Count Character Frequency in a string
	Task: Write a function charFrequency(str) that takes a string and returns an object where the keys are characters and the values are the frequency of those characters in the string.

	Example:
	console.log(carFrequency("banana"));
	/Output: { b: 1, a: 3, n: 2};


*/

function charFrequency(str) {}

/* 
10. Create a Simple Class (ES6 Classes)
	Task: Use ES6 classes to model a Rectangle. The class should have:
	
	* A constructor taking width and height
	* A method getArea() that returns the area of the rectangle
	* A static method isSquare(rectangle) that returns true if the rectangle is a square, otherwise false.

Example:
const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50
console.log(Rectangle.isSqare(rect)); // false

const square = new Rectangle(4, 4);
console.log(square.getArea()); // 16
console.log(Rectangle.isSquare(square)); // true
*/
