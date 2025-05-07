// Problem 1:
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Array Destructuring:
const [ randomCar ] = cars
→ This assigns the first element of the cars array ("Tesla") to randomCar

const [ ,otherRandomCar ] = cars
→ The comma skips the first item, so otherRandomCar is assigned the second element: "Mercedes"

// If applicable, how would you get the index value that did not output?
Only cars[0] and cars[1] were accessed

To get the index value that did not output, which is the third element ("Honda" at index 2), i should do:

const [, , thirdCar] = cars;
console.log(thirdCar)

// Problem2:
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee; //<... This line uses object destructuring with renaming:

It extracts employeeName from the employee object
Then renames it locally to otherName

So now:
otherName → 'Elon'
There is no variable called employeeName in the local scope

//Predict the output
console.log(otherName);
console.log(employeeName);

//...> employeeName is not defined as a variable in this scope; it was renamed to otherName
to solve this problem:

const { employeeName } = employee;
console.log(employeeName);

// Problem3:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// const password = '12345';
This creates a variable password with the value '12345'.

const { password: hashedPassword } = person;
//This uses object destructuring. It attempts to extract the password property from the person object and assign it to a new variable named hashedPassword
//However, the person object does not have a password property, so hashedPassword will be undefined
//To make hashedPassword actually contain a value without changing either console.log, i need to add a password property to the person object

Here’s the updated code:
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'abc$123' // Add this line
}
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword);

// Problem4:
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

//Problem5:
const lastTest = {
    key: 'value', 
    secondKey: [1, 5, 1, 8, 3, 3] 
}
// This defines an object lastTest with:
key = 'value'
secondKey = [1, 5, 1, 8, 3, 3]

const { key } = lastTest; // This destructures key from lastTest. Now, key === 'value'
const { secondKey } = lastTest; // This destructures secondKey from lastTest. Now, secondKey === [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //This destructures the second element (index 1) of the array secondKey and assigns it to willThisWork. So, willThisWork === 5

//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// final output :
value
[ 1, 5, 1, 8, 3, 3 ]
1
5

// to log the last value in the secondkey array:
console.log(secondKey[secondKey.length - 1]);

secondKey.length gives the length of the array (in this case, 6)
secondKey[5] is the last element, which is 3
// output = 3

//Problem6:
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
        var name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//First, how many scopes does the following code block contain? 
JavaScript has function scope (with var) and block scope (with let/const):

1.//Global Scope
Contains the variable beatles
Contains the function printNames

2.// Function Scope: printNames
Scope for the parameter names
Contains the nested function actuallyPrintingNames

3.//Function Scope: actuallyPrintingNames
Scope for the loop and variables index, name
These variables are accessible after the loop because var is function-scoped

// Define each scope and guess what the output will be:

---> The loop iterates through the array:

Iteration 0: Paul was found at index 0
Iteration 1: George was found at index 1
Iteration 2: John was found at index 2
Iteration 3: Ringo was found at index 3

After the loop:
index is 4 (loop ends when index == 4)
name is 'Ringo' (the last element assigned) --->output: name and index after loop is Ringo:4

// Problem7:
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }     
//Why did the code produce that output?

let index and let name are declared with block scope
Each loop iteration creates a new, isolated scope for those variables

console.log() inside the loop works because index and name are both defined inside that block

So this prints:

Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3

console.log('name and index after loop is ' + name + ':' + index);
// This is outside the loop, but both name and index were declared using let inside the loop block

//---> When the code reaches this line, it tries to access name and index
//But they don’t exist in the outer scope
//JavaScript throws a ReferenceError because those variables are not defined in this context.

var is function-scoped → variables remain available after the loop.
let is block-scoped → variables are only available within the loop block, and not after.

//That’s why the code produced the loop output correctly, then crashed with:
//Uncaught ReferenceError: name is not defined

//Problem8:
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. 
// If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Output:
Paul was found at index 0  
George was found at index 1  
John was found at index 2  
Ringo was found at index 3

//Why There Are No Errors:
No variable declared with let or const is accessed outside its scope
we are not  reassigning anything declared with const
we use best practices: minimal, local scoping

//Jusifications:
Variable:	     Keyword:	        Why It's Used Correctly:
beatles	          const	            The array reference doesn’t change
index	          let	            It’s loop-scoped and changes each iteration
Name	          const         	A new constant Name is assigned per iteration and never reassigned

//Problem9:
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// output:
true
false

The first comparison (planet.composition[0] === planetCopy.composition[0]) is true because both planet.composition and planetCopy.composition 
point to the same array in memory, and the first element ("gas") is identical in both places.

The second comparison (planet === planetCopy) is false because planet and planetCopy are two distinct objects 
in memory, even though they contain the same data.