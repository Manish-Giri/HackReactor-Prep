// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

function computeSummationToN(n) {
  // your code here
  return n === 0 ? 0 : n + computeSummationToN(n-1);
}

// Write a function called "convertScoreToGrade".

// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'

function convertScoreToGrade(score) {
  // your code here
  if(score >= 90 && score <= 100) {
    return "A";
  }
  else if(score >= 80 && score <= 89) {
    return "B";
  }
  else if(score >= 70 && score <= 79) {
    return "C";
  }
  else if(score >= 60 && score <= 69) {
    return "D";
  }
  else if(score >= 0 && score <= 59) {
    return "F";
  }
  else {
    return "INVALID SCORE";
  }
}

// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
    if(score >= 90 && score <= 100) {
      if(score >= 98 && score <= 100) {
        return "A+"
      }
      else if(score >= 90 && score <= 92) {
        return "A-"
      }
    return "A";
  }
  else if(score >= 80 && score <= 89) {
      if(score >= 88 && score <= 89) {
        return "B+"
      }
      else if(score >= 80 && score <= 82) {
        return "B-"
      }
    return "B";
  }
  else if(score >= 70 && score <= 79) {
    if(score >= 78 && score <= 79) {
        return "C+"
      }
      else if(score >= 70 && score <= 72) {
        return "C-"
      }
    return "C";
  }
  else if(score >= 60 && score <= 69) {
    if(score >= 68 && score <= 69) {
        return "D+"
      }
      else if(score >= 60 && score <= 62) {
        return "D-"
      }
    return "D";
  }
  else if(score >= 0 && score <= 59) {
    return "F";
  }
  else {
    return "INVALID SCORE";
  }
}