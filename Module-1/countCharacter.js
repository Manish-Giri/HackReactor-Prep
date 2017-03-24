// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

function countCharacter(str, char) {
    // your code here
    var count = 0;
    str.split(" ").forEach((word) => {
        word.split("").forEach((letter) => {
            if (letter === char) {
                count++;
            }
        });
    });
    return count;
}

//TODO - try out other ways

function getAllLetters(str) {
    // your code here
    return str.split('');
}

function getAllWords(str) {
    // your code here
    return str.length ? str.split(' ') : [];
}