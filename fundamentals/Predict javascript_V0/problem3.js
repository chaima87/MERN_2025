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
