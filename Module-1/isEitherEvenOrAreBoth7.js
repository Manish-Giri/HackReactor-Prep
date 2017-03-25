function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7) ? true : false;
}

function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9) ? true : false;
}

function extend(obj1, obj2) {
    // your code here
    for (var prop in obj2) {
        if (!obj1.hasOwnProperty(prop)) {
            obj1[prop] = obj2[prop];
        }
    }
    return obj1;
}