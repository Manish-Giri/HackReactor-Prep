function transformFirstAndLast(array) {
  // your code here
  var objKey = array[0];
  var objValue = array[array.length-1];
  var obj = {};
  obj[objKey] = objValue;
  return obj;
}
