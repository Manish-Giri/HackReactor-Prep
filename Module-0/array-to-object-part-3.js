//Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
function transformEmployeeData(array) {
  // your code here
  var result = [];
  for(var i = 0; i < array.length; i++) {
    let tempObj = {};
    let currValue = '';
    for(var j = 0; j < array[i].length; j++) {
      tempObj[array[i][j][0]] = array[i][j][1];
     
    }
     result.push(tempObj);
  }
  return result;
}

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

console.log(transformEmployeeData(input));
