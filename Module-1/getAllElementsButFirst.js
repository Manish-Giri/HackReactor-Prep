function getAllElementsButFirst(array) {
    // your code here
    return array.slice(1);
}

function getAllElementsButLast(array) {
    // your code here
    return array.slice(0, array.length - 1);
}

function removeFromFront(arr) {
    // your code here
    arr.shift();
    return arr;

}