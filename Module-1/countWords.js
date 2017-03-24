// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

// Notes:
// * If given an empty string, it should return an empty object.

function countWords(str) {
    // your code here
    if (str === '') {
        return {};
    }
    var result = {};
    var words = str.split(' ');
    words.forEach((word) => {
        if (result.hasOwnProperty(word)) {
            result[word] = ++result[word];
        } else {
            result[word] = 1;
        }
    });
    return result;
}

function removeFromBack(arr) {
    // your code here
    arr.pop();
    return arr;
}