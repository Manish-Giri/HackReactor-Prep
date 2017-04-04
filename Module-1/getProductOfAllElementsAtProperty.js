// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  var value = obj[key];
  
  if(!Array.isArray(value) || !value.length || !value) {
    return 0;
  }
  
  return value.reduce((acc,curr) => acc * curr);
}
