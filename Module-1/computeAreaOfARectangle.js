function computeAreaOfARectangle(length, width) {
    // your code here
    return length * width;
}

function computePerimeterOfARectangle(length, width) {
    // your code here
    return 2 * (length + width);
}

function computePerimeterOfATriangle(side1, side2, side3) {
    // your code here
    //uses ES6 array destructuring and reduce function to sum arguments
    var args = [...arguments];
    return args.reduce((a, b) => { return a + b; })
}

function computePerimeterOfACircle(radius) {
    // your code here
    return 2 * Math.PI * radius;
}

function computeAreaOfACircle(radius) {
    // your code here
    return Math.PI * radius * radius;
}

function computePower(num, exponent) {
    // your code here
    return num ** exponent;
}

function computeSquareRoot(num) {
    // your code here
    return Math.sqrt(num);
}

function doubleSquareRootOf(num) {
    // your code here
    return 2 * Math.sqrt(num);
}

function doubleSquareRootOf(num) {
    // your code here
    return 2 * Math.sqrt(num);
}