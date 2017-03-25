// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (var prop in obj) {
        if (obj[prop] > num) {
            delete obj[prop];
        }
    }
    return obj;
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (var prop in obj) {
        if (obj[prop] < num) {
            delete obj[prop];
        }
    }
    return obj;
}

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            if (obj[prop].length > num) {
                delete obj[prop];
            }
        }
    }
    return obj;
}