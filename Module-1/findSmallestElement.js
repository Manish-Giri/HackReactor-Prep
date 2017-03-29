// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

function findSmallestElement(arr) {
  // your code here
    // your code here
  if(!arr.length) {
    return 0;
  }
  
  return Math.min(...arr);
}

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

function findShortestElement(arr) {
  // your code here
  if(!arr.length) {
    return "";
  }
  var lengths = arr.map(word => word.length);
  var shortest = Math.min(...lengths);
  var pos = lengths.indexOf(shortest);
  return arr[pos];
}

// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

function getLargestElement(arr) {
  // your code here
  return arr.length ? Math.max(...arr) : 0;
}

function computeSumOfAllElements(arr) {
  // your code here
  return arr.length ? arr.reduce((a, b) => a + b) : 0;
}
