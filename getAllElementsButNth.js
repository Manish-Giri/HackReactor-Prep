// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

function getAllElementsButNth(array, n) {
    // your code here
    var result = [];

    if (n >= array.length) {
        return array;
    }
    if (array.length === 1) {
        return [];
    } else {
        for (var i = 0; i < array.length; i++) {
            if (i !== n) {
                result.push(array[i]);
            }
        }

    }

    return result;
}


function areValidCredentials(name, password) {
    // your code here
    return name.length > 3 && password.length > 8
}