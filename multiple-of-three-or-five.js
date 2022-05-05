function sumOfMultiplesOfThreeOrFive(limit) {
    let sum = 0;
    const multipleOfThreeOrFive = (number) => number % 3 === 0 || number % 5 === 0;
    for (i = 0; i < limit; i++) {
        if (multipleOfThreeOrFive(i)) sum += i;
    }
    return sum;
}


// for testing - console.log(sumOfMultiplesOfThreeOrFive(1000))
