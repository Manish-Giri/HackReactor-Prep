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
