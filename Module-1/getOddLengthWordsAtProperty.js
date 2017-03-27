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