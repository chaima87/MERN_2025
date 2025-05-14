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

