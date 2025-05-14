//Write an arrow function that takes in two parameters and checks whether one number is greater than another.

//If the number is greater, the output should be:
"<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"

//If the number is less than the other number, the output should be:
"<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"

//The conditional logic should be written with a ternary operator.

const compareNumbers = (a, b) => a > b 
? `${a} is more than ${b}!` 
: `${a} is less than ${b}!`;

console.log(compareNumbers(10, 5)); 
console.log(compareNumbers(3, 8));
