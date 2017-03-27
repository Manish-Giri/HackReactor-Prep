// Write a function called "getSquaredElementsAtProperty".

// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key. 

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    var values = obj[key];

    if (!Array.isArray(values) || !values.length) {
        return [];
    } else {
        return values.map(element => Math.pow(element, 2));
    }

}

function getOddElementsAtProperty(obj, key) {
    // your code here
    var values = obj[key];

    function hasOddElements(numbers) {
        return numbers.some(number => number.length % 2 !== 0);
    }
    if (!Array.isArray(values) || !hasOddElements(values) || !values.length) {
        return [];
    } else {
        return values.filter(element => element % 2 !== 0);
    }
}

function getEvenElementsAtProperty(obj, key) {
    // your code here
    var values = obj[key];

    function hasOddElements(numbers) {
        return numbers.some(number => number % 2 === 0);
    }
    if (!Array.isArray(values) || !hasOddElements(values) || !values.length || !values) {
        return [];
    } else {
        return values.filter(element => element % 2 === 0);
    }
}


function filterEvenLengthWords(words) {
    // your code here
    return words.filter(word => !(word.length % 2));
}

// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

function getLengthOfLongestElement(arr) {
    // your code here
    if (!arr.length) {
        return 0;
    }
    var longest = 0;
    arr.forEach(word => {
        if (word.length > longest) {
            longest = word.length;
        }
    });
    return longest;
}

function getSmallestElementAtProperty(obj, key) {
    // your code here
    var values = obj[key];

    if (!Array.isArray(values) || !values.length || !values) {
        return undefined;
    } else {
        return Math.min(...values);
    }
}