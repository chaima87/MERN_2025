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

