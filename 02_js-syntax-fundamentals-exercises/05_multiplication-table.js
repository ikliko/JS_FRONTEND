function multiplicationTable(n) {
    return Array.from(Array(10))
        .map((e, i) => `${n} X ${i + 1} = ${n * (i + 1)}`)
        .join('\n');
}
