//Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

function fromListToObject(array) {
  // your code here
  var result = {};
  for(let i = 0; i < array.length; i++) {
    let tempKey = array[i][0], tempValue = array[i][1];
    result[tempKey] = tempValue;
  }
  return result;
}
