//Write a function called "getAllKeys" which returns an array of all the input object's keys.

function getAllKeys(obj) {
  // your code here
  var objectKeys = [];
  for(let prop in obj) {
    objectKeys.push(prop);
  }
  return objectKeys;
}
