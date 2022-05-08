function tenThousandthAndFirstPrime() {
    let count = 0;
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (i = 1; count <= 10001; i++) {
        if (isPrime(i)) count++;
        if (count === 10001) return i;
    }
}

// to test - console.log(tenThousandthAndFirstPrime());
