 
 var number = 5; // inline comment
 /*bbbbbbbbbb
 bbbbbbbbbbb
 */ //block comment

 /* Data types: undefined,null boolean, string, symbol,number and object */
 var myName = "Jerome";
 
 let ourName = "Jeri"; // used only in the scope
 const pi = 3.14;// should not be changed 

 //ASSIGNMENT OPERATOR
 var a;
 var b = 2;
 console.log(a)
 a = 7;
 b = a;
 console.log(a)

 var a = 5;
 var b = 10;
 var c = "I am a"

 a = a + 1;
 b = b + 5;
 c = c + "string!";
 console.log(a)
 console.log(c)
 console.log(b)

 //use camelcase when declaring variables
 var properCamelCase = "valid declaration"

//BASIC OPERATIONS
 var sum = 10 + 20;
 var difference = 8 * 15;
 var product= 3 * 6;
 var quotient = 66 / 33
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)

// Incrementing and decrementing
var myVar = 67;
myVar ++;
console.log(myVar)
myVar --;
console.log(myVar)

// decimal/floating point numbers
var decimal = 45.78;
var product_1 = decimal * 2.4;
var division = decimal / 2.0;
console.log(product_1)
console.log(division)
var remainder;
remainder = 11 % 3;
console.log(remainder)

// Compound assignment augmented addition/subtraction/multiplication/division
var a = 3;
var b = 56;
var c = 5;
var d = 26;
a += 12;
b -= 6;
c *= 5;
d /= 2;
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//string variables
var firstName = "John";
var Lastname = "Doe";
var myStr = "I am a \"double quoted\" string inside \" double quotes\"";
console.log(myStr)
var myString = '<a href=http://www.example.com" target="_blank">Link</a>';
/*****
 * CODE OUTPUT
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 *****/
 var str = "Firstline\n\t\\Secondline\nThirdline";
 console.log(str)

 // concatenating strings
 var outstr = "I come first. " + "I come second";
console.log(outstr)
var mStr = "Hello";
mStr += " World";
console.log(mStr)
var ourname = "Freecodecamp";
var output = "Hello, our name is " + ourname + ", how are you?";
console.log(output)
var anAdjective = "awesome";
var my_String= "Freecodecamp is ";
var answer = my_String + anAdjective;
console.log(answer)
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength) 

//Bracket notation
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

// string Immutabilty -  strings are immutable
//var m_string = "Jello World";
//m_string[0] = "H"

var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)

// word blanks/madlibs
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb; 
	return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Arrays
var ourArray = ["John", 23];
var myArray = ["Quincy", 1]; 
console.log(ourArray)
console.log(myArray)

// Nested arrays
var n_Array = [["the universe", 42.67], ["everything", true]];
console.log(n_Array)

var our_Array = [50,60,70,14,45];
var ourData = our_Array[0];
console.log(ourData)
our_Array[1] = 18;
console.log(our_Array)

// multi-dimensional array
var d_Array = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = d_Array[3][0][2];
console.log(myData)

//manipulating arrays
var the_array = ["Stimpson","J", "cat"];
the_array.push(["happy","joy"]);
console.log(the_array)
var new_array = [["john",23], ['cat', 2]]
new_array.pop();
console.log(new_array)
var old_array = [1,2,3,4,5,6];
old_array.shift();
console.log(old_array)
old_array.unshift("Happy");
console.log(old_array)

//shopping list 
var myList = [["cereal", 3], ["milk", 2], ["bannans", 3], ["juice", 2],["eggs", 3]];
console.log(myList)

// Reusable functions
function ourReusableFunction() {
	console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunc() {
	console.log("Hi world");
}
reusableFunc();

//parameters and arguments
function ourFunctionWithArgs(a, b) {
	console.log(a - b);
}
ourFunctionWithArgs(15, 6);

function my_Product(a,b,c) {
	console.log(a*b*c);
}
my_Product(3,4,6);

//Global Scope and functions
var myGlobal = 10;
function fun1() {
	oopsGlobal = 5;
}
function fun2() {
	var output = "";
	if(typeof myGlobal != "undefined"){
		output += "myGlobal: " + myGlobal + "\n";
	}
	if(typeof oopsGlobal != "undefined") {
		output += "oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}
fun1();
fun2();

//Local scope and functions
function myLocalScope() {
	var my_Var = 5;
	console.log(my_Var);
}
myLocalScope();

// Global vs Local scope in functions
var outerwear = "T-shirt";
function myOutfit() {
	var outerwear = "Sweater";
	return outerwear;
}
console.log(myOutfit());
console.log(outerwear);

//return statement
function minus (num) {
	return num - 7;
}
console.log(minus(10));

// undefined value
var sum = 0;
function addFive() {
	sum += 5;
}
console.log(addFive());

// assignment with returned value
var processed = 0;
function processedArg(num) {
	return (num + 5) / 3;
}
proessed = processedArg(10);
console.log(proessed);

// stand in line
function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr))

// Boolean values
function welcomeToBooleans() {
	return false;
}
console.log(welcomeToBooleans());

// conditional logics
function ourTrueOrFalse(isItTrue) {
	if(isItTrue) {
		return "Yes it's true";
	}
	return "No it's false";
}
console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

// equality operator
function testEqual(val) {
	if(val == 12) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(testEqual(10));

// strict equality operator
// 3 === 3(t) and 3 === '3'(f)
function compareEquality(a, b) {
	if(a === b) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(compareEquality(10,"10"));

// Inequality
function testNotEqual(val) {
	if(val != 99) {
		return " Not Equal";
	}
	return "Equal";
}
console.log(testNotEqual(10));

// strict Inequality
function testStrictNotEqual(val) {
	if(val !== 17) {
		return " Not Equal";
	}
	return "Equal";
}
console.log(testStrictNotEqual(10));

// Logical And Operator
function testGreaterThan(val) {
	if(val > 100) {
		return "over 100";
	}
	if (val > 10) {
		return "over 10";
	}
	return "10 or under";
}
console.log(testGreaterThan(10));

//grater than or equal
function testGreaterOrEqual(val) {
	if(val >= 20) {
		return "20 or over";
	}
	if (val >= 10) {
		return "10 or over";
	}
	return "Less than10";
}
console.log(testGreaterOrEqual(10));

// Less than
function testLessThan(val) {
	if(val < 25) {
		return "Under 25";
	}
	if (val < 55) {
		return "under 55";
	}
	return "55 or over";
}
console.log(testLessThan(10));

//Less than or equal
function testLessOrEqual(val) {
	if(val <= 12) {
		return "Smaller Than or Equal to 12";
	}
	if (val <= 24) {
		return "Smaller Than or Equal to 24";
	}
	return "More than 24";
}
console.log(testLessOrEqual(10));

// Logical And Operator
function testLogicalAnd(val) {
	if(val <= 50 && val >= 25) {
		return "Yes";
	}

	return "No";
}

console.log(testLogicalAnd(10));

// Logical Or
function testLogicalOr(val) {
	if(val < 10 || val > 20) {
		return "Outside";
	}
	return "Inside";
}

console.log(testLogicalOr(10));

// Else statements
function testElse(val) {
	if(val > 5) {
		result = "bigger than 5";
	}
	else {
		result = "less than 5";
	}
	return result;
}
console.log(testElse(10));

// Else if statements
function testElseIf(val) {
	if(val > 10) {
		return "Greater than 10";
	}
	else if(val < 5) {
		return "Smaller than 5";
	}
	else {
		return "Between 5 and 10";
	}
}
console.log(testElseIf(7));

// Logical order of if else
function orderMyLogic(val) {
	if(val < 5) {
		return "Less than 5";
	} else if (val < 10) {
		return "Less than 10";
	} else {
		return "Greater than or equal 10";
	}
}
console.log(orderMyLogic(3));

// chaning if else statements
function testSize(num) {
	if(num < 10) {
		return "Small";
	} else if(num < 15) {
		return "Medium";
	} else if(num < 20) {
		return "Large";
	} else if(num >= 20){
		return "Huge";
	} else {
		return "Change Me";
	}
}
console.log(testSize(20));

// Golf Code
var names = ["Holes-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes) {
	if(strokes == 1){
		return names[0];
	} else if(strokes <= par - 2) {
		return names[1];
	} else if(strokes <= par - 1) {
		return names[2];
	} else if(strokes == par) {
		return names[3];
	} else if(strokes == par + 1) {
		return names[4];
	} else if(strokes == par + 2) {
		return names[5];
	} else if(strokes == par + 3) {
		return names[6];
	}
}
console.log(golfScore(5, 8));

// Switch Statements
function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = "alpha";
			break;
		case 2:
			answer = "beta";
			break;
		case 3:
			answer = "Gamma";
			break;
		case 4:
			answer = "delta";
			break;
		/*default:
			return "Invalid choice";*/
	}
	return answer;
}

console.log(caseInSwitch(3));

//default statement
function switchOfStuff(val) {
	var answer = "";
	switch(val) {
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat";
			break;
		default:
			answer = "stuff";
	}
	return answer;
}
console.log(switchOfStuff(5));

//Multiple Identical Options in Switch statements
function sequentialSizes(val) {
	var answer = "";
	switch(val) {
		case 1:
		case 2:
		case 3:
			answer = "low";
			break;
		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}
	return answer;
}

console.log(sequentialSizes(4));

// replacing else if chain with switch
function chainToSwitch(val) {
	var answer = "";
	switch(val) {
		case "bob":
			answer = "Marley";
			break;
		case 42:
			answer = "The answer";
			break;
		case 1:
			answer = "There is no #1";
			break;
		case 99:
			answer = "Missed me by this much";
			break;
		case 7:
			answer = "ate Nine";
			break;
	}
	return answer;
}
console.log(chainToSwitch("bob"));

// returning Booleans from Functions
function isLess(a, b) {
	return a < b;
}

console.log(isLess(20, 15))

// returning early pattern from functions
function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined;
	} else {
		return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
	}
}
console.log(abTest(2, 2));

// counting cards
var count = 0;
function cc(card) {
	switch(card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count ++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;

	}

	var holdbet = 'Hold';
	if(count > 0) {
		holdbet = 'bet';
	}
	return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));


// Build Javascript Projects
var myDog = {
	"name": "Quingsley",
	"legs": 3,
	"tails": 2,
	"friends": [],
};
console.log(myDog)

// accessing object properties with dot notation
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue)
console.log(shirtValue)

// accessing object properties with bracket notation
var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water",
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue)
console.log(drinkValue)

// accessing object properties with variables
var testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas",
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player)

// updating object properties
var myDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"],
};
myDog.name = "Happy Camper";
console.log(myDog)

// adding new properties to objects
var myDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"],
};
myDog.bark = "bow-bow!";
console.log(myDog)

// deleting properties
delete myDog.bark;
console.log(myDog)

// using objects for Lookups
function phoneticLookup(val) {
	var result = "";
	var lookup = {
		"alpha": "Adams",
		'bravo': "Boston",
		"charlie": "Chicago",
		"delta": "denver",
		"echo": "easy",
		"foxtrot": "frank"
	};
	result = lookup[val];
	return result;
}
console.log(phoneticLookup("echo"));

//Testing objects for properties
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {
	if(myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp];
	} else {
		return "Not found";
	}	
}
console.log(checkObj("gift"));

// Manipulating complex objects
var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Beau Carnes",
			"title": "Cereal Man",
			"release_year": 2003,
			"formats": [
				"YouTube video"
			],
	}
];

// accessing Nested Objects
var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"pasenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// accessing nested arrays
var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)

// Record collection
var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let it Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
		]
	},
	"1245": {
		"album": "Robert Palmer",
		"artist": "Bon Jovi",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold",
	},
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if(value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop]  = value;
	}
	return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));

// iterate with while loops
var myArr = [];
var i = 0;
while (i < 5) {
	myArr.push(i);
	i+= 1;
}
console.log(myArr);

// iterate with for loops
var bigArray = [];
for(var i = 0; i < 5; i++) {
	bigArray.push(i);
}
console.log(bigArray);

//Unique numbers
/*
var unique = [];
function uniqueNumbers() {
	var count = 0;
	while (count < 5) {
		n = prompt("enter a number: ");
		for( var i = 0; i < count; i++) {
			if(n === unique[i]) {
				prompt("Number already exists!\nenter a number: ");
				break;
			}
		}
		if(i === count) {
			unique[count] = n;
			count += 1;
		}
	}
	console.log("the unique numbers are: ");
	for(var i = 0; i < 5; i++) {
		console.log(unique[i]);
	}
}
uniqueNumbers(); */

// iterate with odd numbers
var oddArray = [];
for (var i = 1; i < 10; i += 2) {
	oddArray.push(i)
}
console.log(oddArray);

// count backwards
var nthArray = [];
for (var i = 9; i > 0; i -= 2) {
	nthArray.push(i)
}
console.log(nthArray);

// iterate items through an array
var sumArray = [2, 3, 4, 5, 6];
var ourTotal = 0;
for (var i = 0; i < sumArray.length; i++) {
	ourTotal += sumArray[i];
}
console.log(ourTotal);

//nested for loops
function multiplyAll(arr) {
	var product_A= 1;
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr[i].length; j++) {
			product_A *= arr[i][j];
		}
	}
	return product_A;
}

var productTotal = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(productTotal)

// iterate with do while loops
var xArray = [];
var i = 10;
do {
	xArray.push(i);
	i++;
} while (i < 5)
console.log(i, xArray)

// 	look up profile
var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "0742301435",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "0750892678",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0725201273",
		"likes": ["Intruiging cases", "Violin"]
	},
	{
		"firstName": "Kristian",
		"lastName": "Foxes",
		"number": "unknown",
		"likes": ["Javascript", "Gaming", "Foxes"]
	},
];
function lookUpProfile(name, prop) {
	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].firstName === name) {
			return contacts [i][prop] || "No such Property";
		}
		return "No such contact";
	}
}var data = lookUpProfile("Akira", "likes");
console.log(data);

// Generate random Fractions
function randomFraction() {
	return Math.random();
}
console.log(randomFraction());

// genate random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);
function randomWholeNum() {
	return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// random whole numbers within range
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);

//parseInt function
function convertToInteger(str) {
	return parseInt(str);
}
console.log(convertToInteger("56"));

// parseInt function with radix
function convertToInteger_1(str) {
	return parseInt(str, 2);
}
console.log(convertToInteger_1("10011"));

//Ternary Operator
function checkEqual(a, b) {
	return a === b ? true : false;
}
console.log(checkEqual(1, 2));

// multiple ternary Operator
function checkSign(num) {
	return num > 0 ? "positive": num < 0 ? "negative" : "zero";
}

console.log(checkSign(-20));

// diferrence between var and let keywords
let catName = "Quingsley";
let quote;
catName = "Beau";
function catTalk() {
	"use strict";
	catName = "Oliver";
	quote = catName + " says Meow!";
}
console.log(catTalk());

// scope of the var and let keywords
function checkScope() {
	let i = "function scope"; //var i
	if(true) {
		let i = "block scope"; // i
		console.log("Block scope i is : ", i);
	}
	console.log("Block scope i is : ", i);
	return i;
}
checkScope();

// declare a read only keyword with the const keyword
function printManyTimes(str) {
	"use strict";
	const SENTENCE = str + " is cool";
	//sentence = str + " is amazing";

	for(let i = 0; i <str.length; i += 2) {
		console.log(SENTENCE);
	}
}
printManyTimes("Freecodecamp");

// Mutate an Array declared with const
const S = [5, 7, 2];
function editInPlace() {
	"use strict";
	S[0] = 2;
	S[1] = 5;
	S[2] = 7;
}
editInPlace();
console.log(S);

//Prevent object mutation
function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

		Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 99;
	} catch(ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

//Use arrow functions to write concise anonymous function

const magic = () => new Date();
console.log(magic);

//Write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Higher order functions
const increment = (function() {
	return function increment(number, value = 1) {
		return number + value;
	};
})();
console.log(increment(5, 2));
console.log(increment(14));

//Use the Rest Operator with Function Parameters
const SUM = (function() {
	return function SUM(...args) {
		return args.reduce((a, b) => a + b, 0);
	};
}) ();

console.log(SUM(1, 2, 3, 4));

// Use the spread operator to evaluate arrays in-place
const arry1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arry2;
(function() {
	arry2 = [...arry1];
	arry1[0] = "potato";
}) ();
console.log(arry1);
console.log(arry2);

// Using Destructing assignment to assign variables from objects
const AVG_TEMPERATURS = {
	today:77.5,
	tomorrow: 79
};

function getTempOftmrw(avgTemperatures) {
	"use strict";
	const{tomorrow: tempOfTomorrow} = avgTemperatures;
	return tempOfTomorrow;
}
console.log(getTempOftmrw(AVG_TEMPERATURS));

//Destructing Assignment with Nested Objects
const LOCAL_FORECAST = {
	today: {min: 72, max: 83},
	tomorrow: {min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
	"use strict";
	const {tomorrow: {max: maxOfTomorrow}} = forecast;
	return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use destructing assignment to assign variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let u = 8, v = 6;
(() => {
	"use strict";
	[u, v] = [v, u];
})();
console.log(u);
console.log(v);

// Use Destructing assignment with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
	const[ , , ...arr] = list;
	return arr;
}
const array = removeFirstTwo(source);
console.log(source);
console.log(array);

/* Use Destructing Assignment to 
Pass an object as a FUnction's Parameters */
const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};
const half = (function() {
	return function half({max,min}) {
		return (max + min) / 2;
	}
})();
console.log(stats),
console.log(half(stats));

// create strings using template literals
const person = {
	name: "John Doe",
	age: 56
};

const greeting = `Hello , my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

//challenge

const results = {
	sucess: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
	const resultDisplayArray = [];
	for(let i = 0; i <arr.length; i+= 1) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
	}
	return resultDisplayArray;
}
const resultDisplayArray = makeList(results.failure);

console.log(resultDisplayArray);

// Write Concise Object Literal Declarations using simple fields
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// Write Concise Declarative functions
const bicycle = {
	gear: 2,
	setgear(newGear) {
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setgear(3);
console.log(bicycle.gear);

// Use class syntax to define a consturctor function
class SpaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

function makeClass() {
	class Vegetable {
		constructor(name) {
			this.name = name;
		}
	}
	return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// Use getters and setters to control access to an object
function MakeClass() {
	class Thermostat {
		constructor(temp) {
			this._temp = 5/9 * (temp - 32);
		}
		get temperature() {
			return this._temp;
		}
		set temperature(updatTemp) {
			this._temp = updatTemp;
		}
	}
	return Thermostat;
}
const Thermostat = MakeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
/*// understanding the difference between import and require
import {capitalizeString} from "./string_function"
const cap = capitalizeString("hello!");
console.log(cap); */

/*//Use export to reuse code block
const capitalizeString = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString};
export const foo = "bar";
export const bar = "foo"; */

//use * to iport eveything from a file
//import * as capitalizeStrings from "capitalize_strings";

//create an export fallback with export default
/*export  defunction subtract(x,y) {return x - y;}*/

/* // impoting a default export
import subtract form "math_functions"
subtract(7, 4); */
















