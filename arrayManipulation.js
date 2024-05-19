// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // square even numbers
        } else {
            return num * 3; // triple odd numbers
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]
