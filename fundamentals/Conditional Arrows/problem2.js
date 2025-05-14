//Problem 2
//Write an arrow function that checks to see if it is currently raining.

//If it is raining, the output should be:
"Get your rain jacket!"

//If it is not raining, the output should be:
"No rain on today's forecast!"

//The conditional logic should be written with a ternary operator.

const checkraining = isRaining => isRaining 
? "Get your rain jacket!" 
: "No rain on today's forecast!";

console.log(checkraining(true));
console.log(checkraining(false));