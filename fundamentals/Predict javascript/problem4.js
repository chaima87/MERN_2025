const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);


Index:   0  1  2  3  4  5   6   7  8
Value:   8  2  3  5  6  1  67  12  2

Destructuring:

const [, first] = numbers;
Skips index 0 (8) and sets first = 2 (index 1)

const [,,, second] = numbers;
Skips indices 0–2, so second = 5 (index 3)

const [,,,,,,,, third] = numbers;
Skips indices 0–7, so third = 2 (index 8)

console.log(first === second);//..> 2==5 // False 
console.log(first === third);//..> 2==2 // True

// To declare a new variable for the value at the 4th index (which is index 4, since indexing starts at 0):
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const fourthValue = numbers[4];
console.log(fourthValue); // 6