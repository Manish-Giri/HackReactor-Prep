// Write a function called "getFirstElementOfProperty".

// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

function getFirstElementOfProperty(obj, key) {
    // your code here
    var values = obj[key];

    if (!Array.isArray(values) || !values) {
        return undefined;
    } else {
        return obj[key][0];
    }
}

// Write a function called "getNthElementOfProperty".

// Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

function getNthElementOfProperty(obj, key, n) {
    // your code here
    var values = obj[key];

    if (!Array.isArray(values) || n >= values.length || !values) {
        return undefined;
    } else {
        return obj[key][n];
    }
}

function getLastElementOfProperty(obj, key) {
    // your code here
    var values = obj[key];

    if (!Array.isArray(values) || !values) {
        return undefined;
    } else {
        return obj[key][values.length - 1];
    }
}

function keep(array, keeper) {
    // your code here
    return array.filter(element => element === keeper);
}