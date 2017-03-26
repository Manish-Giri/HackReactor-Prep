function removeOddValues(obj) {
    // your code here
    for (var prop in obj) {
        if (typeof obj[prop] === "number") {
            if (obj[prop] % 2 !== 0) {
                delete obj[prop];
            }
        }
    }
    return obj;
}


// /Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.

function removeArrayValues(obj) {
    // your code here
    for (var prop in obj) {
        if (Array.isArray(obj[prop])) {
            delete obj[prop];
        }
    }
    return obj;
}

function removeNumberValues(obj) {
    // your code here
    for (var prop in obj) {
        if (typeof obj[prop] === 'number') {
            delete obj[prop];
        }
    }
    return obj;
}

function removeStringValues(obj) {
    // your code here
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            delete obj[prop];
        }
    }
    return obj;
}



function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.replace(/\s+/g, ' ');
}