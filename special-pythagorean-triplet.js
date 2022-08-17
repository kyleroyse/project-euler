function specialPythagoreanTriplet(sum) {
    for (a = 0; a <= sum; a++) {
        for (b = 0; b <= sum; b++) {
            for (c = 0; c <= sum; c++) {
                if ((a < b) && (b < c) && (c*c == (a*a + b*b)) && (a+b+c === sum)) {
                    return a * b * c;
                }
            }
        }
    }
}

// console.log(specialPythagoreanTriplet(1000));
