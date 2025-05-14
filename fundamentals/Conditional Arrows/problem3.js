//Write an arrow function that checks to see if a number is even.

//If it is even, the output should be:
"That's an even number!"

//If it is not even, the output should be:
"That's an odd number!"

//The conditional logic should be written with a ternary operator.

const checkEven = num => num % 2 === 0
? "That's an even number!!" 
: "That's an odd number!";

console.log(checkEven(11));
console.log(checkEven(8));