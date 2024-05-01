// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Aladdin"));

//********************************************************************************************** */
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(15, 5));

/********************************************************************************************** */
// Q3) Write a simple arrow function that squares a number.
let squrnum = (num1, num2) => {
  return num1 ** num2;
};
console.log(squrnum(2, 3));

/************************************************************************************************ */
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.map((num) => {
  return num ** 2;
});
console.log(result);
