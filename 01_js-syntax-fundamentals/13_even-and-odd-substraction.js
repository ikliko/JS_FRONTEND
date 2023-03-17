function evenOddSubstraction(arr) {
    return arr.reduce((a, n) => {
        if (n % 2) {
            return a -= n;
        }

        return a += n;
    }, 0)
}
