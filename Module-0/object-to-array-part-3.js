/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToList(obj) {
  // your code here
  let result = [], temp = [];
  for(var prop in obj) {
    temp = [];
    temp.push(prop);
    temp.push(obj[prop]);
    result.push(temp);
  }
  return result;
}
