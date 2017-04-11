function modulo(num1, num2) {
  // your code here
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }

  var remainderIsPositive = num1 >= 0;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 -= num2
  }

  return remainderIsPositive ? num1 : 0 - num1;

}

function multiply(num1, num2) {
  // your code here
  if(!num1 || !num2) {
    return 0;
  }
  var original = num1;
  var times = Math.abs(num2);
  for(var i = 1; i < times; i++) {
    num1 += original;
  }
  
  return num2 > 0 ? num1 : -num1;
}
