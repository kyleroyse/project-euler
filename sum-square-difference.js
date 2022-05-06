function sumSquareDifference() {
    let sumOfSquares = 0;
    let squareOfTheSum = 0;
    for (let i = 1; i <= 100; i++) {
        sumOfSquares += Math.pow(i, 2);
    }
    for (let k = 1; k <= 100; k++) {
        squareOfTheSum += k;
    }
    squareOfTheSum = Math.pow(squareOfTheSum, 2)
    return squareOfTheSum - sumOfSquares;
}

// to test - console.log(sumSquareDifference());
