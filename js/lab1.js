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

console.log("Lab 1, part 1, task 1");
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
console.log("Lab 1, part 1, task 2");
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

console.log("Lab 1, part 1, task 3");
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
console.log("Lab 1, part 1, task 4");

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

console.log("Lab 1, part 1, task 5");
console.log(carObject.getName());

// ! 6. forEach with Callback
console.log("Lab 1, part 1, task 6");
let fruits = ["Apple", "Banana", "Orange", "Pear"];

fruits.forEach((element) => {
	console.log(element);
});

console.log(fruits);

// ! 7. Capitalize the First Letter of Each Word
function upperCaseFirstWord(fullSentence) {
	let string = fullSentence.split(" ");
	let splitWords = string.map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1);
	});

	let slicedSentence = splitWords.join(" ");
	return slicedSentence;
}

console.log("Lab 1, part 1, task 7");
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

console.log("Lab 1, part 1, task 8");
console.log(mergeObjects());

// ! 9. Count Character Frequency in a string
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

console.log("Lab 1, part 1, task 9");
console.log(characterFrequency("banana"));

// ! 10. Create a Simple Class (ES6 Classes)

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}

	isSquare() {
		return this.width === this.height;
		// if () {
		// 	return true;
		// } else {
		// 	return false;
		// };
	}
}

console.log("Lab 1, part 1, task 10");
let rect1 = new Rectangle(3, 5);
console.log("The area is: ", rect1.getArea());
console.log("Is it a square? ", rect1.isSquare());

let rect2 = new Rectangle(3.5, 3.5);
console.log("The area is: ", rect2.getArea());
console.log("Is it a square? ", rect2.isSquare());

// ! Part 2

// ! 1. Convert a Regular Function to Arrow Function
// function add(a, b) {
// 	return a + b;
// 	let result = 5 + 3;
// return result;
// }

let additionFunction = (a, b) => {
	return 5 + 3;
};

console.log("Lab 1, part 2, task 1");

console.log(additionFunction());

// ! 2. Single Parameter Arrow Function
let greet = (personName) => {
	return "Hello" + personName;
};

let greeting = greet(" Alice");

console.log("Lab 1, part 2, task 2");
console.log(greeting);

// ! 3. Basic Callback Function
let callback = (num1) => {
	return num1 * 2;
};

function process(number, callbackFunction) {
	return callbackFunction(number);
}

let result = process(5, callback);

console.log("Lab 1, part 2, task 3");
console.log(result);

// ! 4. Arrow function in map
function myFirstMapArray() {
	let myArray = [1, 2, 3, 4];
	let mapArray1 = myArray.map((num) => {
		return num * 2;
	});
	return mapArray1;
}

console.log("Lab 1, part 2, task 4");
console.log(myFirstMapArray());

// ! 5. Pass an Anonymous Function to filter
function filterArray1() {
	let myFilterArray = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50];
	let result = myFilterArray.filter((number) => {
		return number > 10;
	});
	return result;
}

console.log("Lab 1, part 2, task 5");
console.log(filterArray1());

// ! 6. Extract User Names
function extractUserNames(user) {
	const users = [
		{ id: 1, user: "Alice" },
		{ id: 2, user: "Bob" },
		{ id: 3, user: "Charlie" },
	];

	let newUserNames = users.map((name) => {
		return name.user;
	});
	return newUserNames;
}

console.log("Lab 1, part 2, task 6");
console.log(extractUserNames());

// ! 7. Count Occurences
function myFruitArray() {
	let array1 = ["apple", "banana", "apple", "cherry", "banana", "apple"];

	let fruitCounter = array1.reduce((accumulator, currentValue) => {
		if (accumulator[currentValue]) {
			accumulator[currentValue] += 1;
		} else {
			accumulator[currentValue] = 1;
		}
		return accumulator;
	}, {});
	console.log(fruitCounter);
}

console.log("Lab 1, part 2, task 7");
console.log(myFruitArray());

//!8 Sum of Numbers
function sumOfNumbers() {
	let array1 = [10, 20, 30, 40];
	let array2 = array1.map((x) => {
		return x * 2;
	});

	let array3 = array1.map((x) => x * x);
	let sum = array1.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	// console.log(array2, array3, sum);
	return { array2, array3, sum };
}

// sumOfNumbers();
console.log("Lab 1, part 2, task 8");
console.log(sumOfNumbers());
