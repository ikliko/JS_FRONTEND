function printAndSum(start, end) {
    const nums = Array.from(Array(end - start + 1))
        .map((e, i) => start + i);

    return [
        nums.join(' '),
        `Sum: ${nums.reduce((s, n) => s + n, 0)}`
    ].join('\n');
}
