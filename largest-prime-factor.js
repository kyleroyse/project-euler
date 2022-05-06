function largestPrimeFactor(number) {
    let primeFactors = [];
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = 1; i <= number/2; i++) {
        if (number % i === 0 && isPrime(i)) primeFactors.push(i);
    }
    return primeFactors[primeFactors.length - 1];
}

// to test - console.log(largestPrimeFactor(236))

