// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.


function sumDigits(num) {
  // your code here
  if(!num) {
    return 0;
  }

  //var stringNum = num >= 0 ? num.toString().split('') : num.toString().split("").slice(0,2).concat(num.slice(2));
  
  var stringNum = [];
  //if number is negative, split the array, get the first digit, turn it into negative, place it back in the array
  if(num < 0) {
    var arr = num.toString().split("");
    var firstDigit = arr[1];
    console.log(arr);
    arr.splice(0, 2, -firstDigit);
    console.log(arr);
    stringNum = arr;
  }
  else {
    //if number is positive, simply split it into an array of strings which would be parsed as integers next
    stringNum = num.toString().split('');
  }
  console.log(stringNum);
  return stringNum.reduce(function(acc, curr) {
    //get the integers parsed from strings
    let accI = parseInt(acc);
    let currI = parseInt(curr);
    return accI + currI;
  })
}

var output = sumDigits(-316);
console.log(output); // --> 14
