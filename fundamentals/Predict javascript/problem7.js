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