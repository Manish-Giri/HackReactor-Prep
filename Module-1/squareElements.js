function squareElements(arr) {
  // your code here
  return arr.map(element => Math.pow(element, 2));
}

function filterOddElements(arr) {
  // your code here
  return arr.filter(number => number % 2);
}

function computeProductOfAllElements(arr) {
  // your code here
  if(!arr.length) {
    return 0;
  }
  else {
    return arr.reduce((a, b) => a *b);
  }
}

function filterEvenElements(arr) {
  // your code here
  return arr.filter(element => element % 2 == 0);
}


function getLengthOfShortestElement(arr) {
  // your code here
  var lengths = arr.map(word => word.length);
  return arr.length ? Math.min(...lengths) : 0;
}

function getLongestElement(arr) {
  // your code here
  if(!arr.length) {
    return "";
  }
   var lengths = arr.map(word => word.length);
   var longestWord =  Math.max(...lengths);
   var pos = lengths.indexOf(longestWord);
   return arr[pos];
}

