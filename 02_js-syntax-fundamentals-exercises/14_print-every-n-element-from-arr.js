function printNElm(arr, n) {
    return arr.filter((a, i) => i % n === 0);
}