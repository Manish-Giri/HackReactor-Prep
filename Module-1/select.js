// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them. 
// * It does not modify the passed in object.

function select(arr, obj) {
    // your code here
    var result = {};
    for (var prop in obj) {
        if (arr.includes(prop)) {
            result[prop] = obj[prop];
        }
    }
    return result;
}