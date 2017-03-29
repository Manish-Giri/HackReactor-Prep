/*
Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.
*/

function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  var taxAmount = preTaxAndTipAmount * (9.5 / 100);
  var tipAmount = preTaxAndTipAmount * (15 / 100);
  return preTaxAndTipAmount + taxAmount + tipAmount;
}

/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.
*/
function getStringLength(string) {
  // your code here
  return string.split(' ').reduce(function(acc, curr){
    return acc + 1;
  }, 0);
}
