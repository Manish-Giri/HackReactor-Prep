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
