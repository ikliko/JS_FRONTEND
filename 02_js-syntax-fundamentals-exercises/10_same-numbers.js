function sameNumbers(num) {
    const numDigits = `${num}`.split('');
    return [
        new Set(numDigits).size === 1,
        numDigits.reduce((a, n) => a + +n, 0)
    ].join('\n');
}
