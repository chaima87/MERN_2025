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