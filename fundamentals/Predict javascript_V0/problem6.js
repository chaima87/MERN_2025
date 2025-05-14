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