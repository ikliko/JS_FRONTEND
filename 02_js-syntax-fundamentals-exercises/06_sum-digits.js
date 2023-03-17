function sumDigits(num) {
    return `${num}`.split('')
        .reduce((a, n) => a + +n, 0);
}