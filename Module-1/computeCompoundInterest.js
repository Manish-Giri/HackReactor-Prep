// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var i1 = Math.pow((1 + interestRate/compoundingFrequency), (compoundingFrequency * timeInYears));
  return (principal * i1) - principal ;
}
