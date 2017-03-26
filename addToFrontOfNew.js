// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

function addToFrontOfNew(arr, element) {
    // your code here
    var newArr = arr.slice();
    newArr.unshift(element);
    return newArr;

}

function addToBackOfNew(arr, element) {
    // your code here
    var newArr = arr.slice();
    newArr.push(element);
    return newArr;
}