function getNthElement(array, n) {
    // your code here
    return array.length ? array[n] : undefined;
}

function getFirstElement(array) {
    // your code here
    return array.length ? array[0] : undefined;
}

function getLastElement(array) {
    // your code here
    return array.length ? array[array.length - 1] : undefined;
}

function addToFront(arr, element) {
    // your code here
    arr.unshift(element);
    return arr;
}


function addToBack(arr, element) {
    // your code here
    arr.push(element);
    return arr;
}