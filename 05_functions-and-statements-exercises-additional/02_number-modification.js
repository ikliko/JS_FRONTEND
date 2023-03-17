function numberModification(num) {
    const digits = `${num}`.split('').map(n => +n);

    const sumArr = arr => arr.reduce((a, n) => a + n, 0);

    while (sumArr(digits) / digits.length <= 5) {
        digits.push(9);
    }

    return digits.join('');
}