// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

//basic version - 
function findShortestWordAmongMixedElements(arr) {
  // your code here
  if(!arr.length) {
    return "";
  }
  
  function hasString(arr) {
    return arr.some(element => typeof element === "string");
  }
  //var strings = arr.filter(element => typeof element === "string");
  //var shortestPos = Math.min(...strings.map(string => return string.length));
    if(!arr.length || !hasString(arr)) {
    return "";
  }
  var strings = arr.filter(element => typeof element === "string");
  var stringLengths = strings.map(string => string.length);
  console.log(stringLengths);
  var pos = Math.min(...stringLengths);
  var shortest = stringLengths.indexOf(pos);
  console.log(shortest);
  var ans = strings[shortest];
  return ans;
}

// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  function hasNumbers(arr) {
    return arr.some(function(e){
      return typeof e === "number";
    });
  }
  
  if(!arr.length || !hasNumbers(arr)) {
    return 0;
  }
  var numbers = arr.filter(e => typeof e === "number");
  return Math.min(...numbers);
}


// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string (""). 
// * If the array contains no strings; it should return an empty string.

function getLongestWordOfMixedElements(arr) {
  // your code here
   function hasStrings(arr) {
    return arr.some(function(e){
      return typeof e === "string";
    });
  }
  
  if(!arr.length || !hasStrings(arr)) {
    return "";
  }
  
  var strings = arr.filter(e => typeof e === "string");
  var stringLengths = strings.map(e => e.length);
  
  var longestStringLength = Math.max(...stringLengths);
  var longestStringPos = stringLengths.indexOf(longestStringLength);
  return strings[longestStringPos];
  
}


// Write a function called "getLargestNumberAmongMixedElements". 

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function getLargestNumberAmongMixedElements(arr) { 
  // your code here
  function hasNumbers(arr) {
    return arr.some(function(e){
      return typeof e === "number";
    });
  }
  
  if(!arr.length || !hasNumbers(arr)) {
    return 0;
  }
  var numbers = arr.filter(e => typeof e === "number");
  return Math.max(...numbers);
}

