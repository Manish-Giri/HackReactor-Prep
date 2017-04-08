// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

function computeFactorialOfN(n) {
  // your code here
  return n === 1 ? 1 : n * computeFactorialOfN(n-1);
}

// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.


function repeatString(string, num) {
  // your code here
  return string.repeat(num);
}

function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
 var args = [...arguments];
  console.log(args);
  var longest = 0, longestWord = "";
  args.forEach((word, index) => {
    if(word.length > longest) {
      longest = word.length;
      longestWord = word;
      
    }
  });
  return longestWord;
  
}
