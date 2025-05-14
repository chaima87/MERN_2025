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
