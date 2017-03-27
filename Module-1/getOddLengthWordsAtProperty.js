// Write a function called "getOddLengthWordsAtProperty".

// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

function getOddLengthWordsAtProperty(obj, key) {
    // your code here
    // your code here
    var values = obj[key];

    function hasOddLengthElements(words) {
        var lengths = words.map(word => word.length);

        return lengths.some(length => length % 2 !== 0);
    }

    if (!Array.isArray(values) || !hasOddLengthElements(values) || !values) {
        return [];
    } else {
        return values.filter(value => value.length % 2 !== 0);
    }
}

// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average. 

// Notes:
// * If given an empty array, it should return 0.

function computeAverageOfNumbers(nums) {
    // your code here
    return nums.length ? nums.reduce((a, b) => a + b) / nums.length : 0;
}


function getAverageOfElementsAtProperty(obj, key) {
    // your code here

    var values = obj[key];

    if (!Array.isArray(values) || !values.length) {
        return 0;
    } else {
        return values.reduce((a, b) => a + b) / values.length;
    }
}

// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    var values = obj[key];

    function hasEvenLengthElements(words) {
        var lengths = words.map(word => word.length);

        return lengths.some(length => length % 2 === 0);
    }

    if (!Array.isArray(values) || !hasEvenLengthElements(values) || !values) {
        return [];
    } else {
        return values.filter(value => value.length % 2 === 0);
    }
}

function filterOddLengthWords(words) {
    // your code here
    return words.filter(word => word.length % 2 !== 0);
}