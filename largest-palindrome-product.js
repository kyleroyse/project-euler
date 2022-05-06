function largestPalindromeProduct() {
    let palindromeProducts = [];
    const isPalindrome = (num) => {
        var a, b, temp = 0;
        b = num;
        while (num > 0) {
            a = num % 10;
            num = parseInt(num / 10);
            temp = temp * 10 + a;
        }
        if (temp == b) {
            return true;
        }
        else {
            return false;
        }
    }
    for (i = 900; i <= 999; i++) {
        for (k = 999; k >= 900; k--) {
            if (isPalindrome(i * k)) {
                palindromeProducts.push(i * k);
            }
        }
    }
    const largestPalindromeProduct = palindromeProducts.reduce((largest, current) => largest > current ? largest : current, 0);
    return largestPalindromeProduct;
}

// to test - console.log(largestPalindromeProduct())
