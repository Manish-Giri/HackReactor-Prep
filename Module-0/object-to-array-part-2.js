//Write a function called "listAllValues" which returns an array of all the input object's values.

function listAllValues(obj) {
  // your code here
  var result = [];
  for(var prop in obj) {
    result.push(obj[prop]);
  }
  return result;
}
