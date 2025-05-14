//Problem 1
//Write an arrow function that checks to see if a user is older than 18.

//If they are older than 18, the output should be:
"You are good to go!"

//If they are not older than 18, the output should be:
"Sorry! You must be 18 or older!"
//The conditional logic should be written with a ternary operator.

const checkAge = age => age > 18 
? "You are good to go!" 
: "Sorry! You must be 18 or older!";

console.log(checkAge(20));
console.log(checkAge(16));