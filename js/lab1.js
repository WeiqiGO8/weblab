// Beginning
console.log("Hello lab");

// ! 1. Variables and Data Types
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

// ! 2. Loops
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

// ! 3. Find the largest number in an array
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

// ! 4. Functions
function calculateFactorial(n) {
	let tempN = 1;

	for (let i = 1; i <= n; i++) {
		// n! = n = n * (n-1) * (n-2) * ... * 1

		tempN = tempN * i;
	}
	return tempN;
}

console.log("Factorial of " + 5 + " is " + calculateFactorial(5));

// ! 5. Objects
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

// ! 6. forEach with Callback
let fruits = ["Apple", "Banana", "Orange", "Pear"];

fruits.forEach((element) => {
	console.log(element);
});

// ! 7. Capitalize the First Letter of Each Word
function upperCaseFirstWord(fullSentence) {
	let string = fullSentence.split(" ");
	let splitWords = string.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1);
	});

	let slicedSentence = splitWords.join(" ");
	return slicedSentence;
}
console.log(upperCaseFirstWord("hello world from javascript"));

// function upperCaseFirstWord(sentence) {
// 	let newWords = sentence.split(" ").map((word) => {
// 		return word.slice(0, 1).toUpperCase() + word.slice(1);
// 	});

// 	let newSentence = newWords.join(" ");
// 	return newSentence;
// }
// console.log(upperCaseFirstWord("hello world from javascript"));

// function capitalizeWords(sentence) {
// 	let words = sentence.split(" ");

// 	let newWords = words.map((word) => {
// 		return word.slice(0, 1).toUpperCase() + word.slice(1);
// 	});

// 	let newSentence = newWords.join(" ");

// 	return newSentence;
// }

// console.log(capitalizeWords("hello world from javascript!"));

// ! 8. Merge Two Objects
let person = { name: "Alice", age: 25 };
let jobInfo = { role: "Developer", age: 30 };

function mergeObjects() {
	let obj3 = Object.assign(person, jobInfo);
	return obj3;
}

console.log(mergeObjects());

/* 
! 9. Count Character Frequency in a string
	Task: Write a function charFrequency(str) that takes a string and returns an object where the keys are characters and the values are the frequency of those characters in the string.

	Example:
	console.log(carFrequency("banana"));
	/Output: { b: 1, a: 3, n: 2};
*/

// value = frequency/number of times the key/character appear in the string
// key = characters

// new Set(["a", "b", "c"]).forEach((value, key) => {
// 	console.log(key + ": " + value);
// });

function characterFrequency(string) {
	let objectSentence = {};
	let keyCharacters = new Set(string);

	keyCharacters.forEach((character) => {
		objectSentence[character] = 0;

		for (let keystroke of string) {
			if (keystroke === character) {
				objectSentence[character]++;
			}
		}
	});
	return objectSentence;
}

console.log(characterFrequency("banana"));

/* 
! 10. Create a Simple Class (ES6 Classes)
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

// ! Part 2

// ! 1.
// function add(a, b) {
// 	return a + b;
// 	let result = 5 + 3;
// return result;
// }

let additionFunction = (a, b) => {
	return 5 + 3;
};

console.log(additionFunction());

// ! 2.
let greet = (personName) => {
	return "Hello" + personName;
};

let greeting = greet(" Alice");

console.log(greeting);

// ! 3.

function process() {}

process(5, callback);
