// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

function countAllCharacters(str) {
    // your code here
    var result = {};
    for (var i = 0; i < str.length; i++) {
        let letter = str[i];
        if (result.hasOwnProperty(letter)) {
            result[letter] = ++result[letter];
        } else {
            result[letter] = 1;
        }
    }
    return result;
}

function getElementsGreaterThan10AtProperty(obj, key) {
    // your code here
    function isLessThan100(numbers) {
        return numbers.some(number => number > 10);
    }
    var result = [];
    var values = obj[key];
    if (!Array.isArray(values) || !values || !isLessThan100(values)) {
        return [];
    } else {
        values.forEach(element => {
            if (element > 10) {
                result.push(element);
            }
        });
    }
    return result;
}