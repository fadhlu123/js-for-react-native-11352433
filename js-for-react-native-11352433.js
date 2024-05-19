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

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // capitalize if even
        } else {
            return str.toLowerCase(); // convert to lowercase if odd
        }
    });
}

module.exports = { processArray, formatArrayStrings };
