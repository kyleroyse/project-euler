function sumOfEvenFibonacciNumbers(maxTermValue) {
    let sum = 0;
    const evenNumber = (number) => number % 2 === 0;
    const fibonacciSequence = () => {
        let sequence = [], n1 = 0, n2 = 1, nextTerm = n1 + n2;
        while (nextTerm <= maxTermValue) {
            sequence.push(nextTerm);
            n1 = n2;
            n2 = nextTerm;
            nextTerm = n1 + n2;
        }
        return sequence;
    }
    for (num of fibonacciSequence()) {
        if (evenNumber(num)) sum += num;
    }
    return sum;
}

// to test - console.log(sumOfEvenFibonacciNumbers(4000000))
