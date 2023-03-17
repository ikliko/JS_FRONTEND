function factorielDevision(a, b) {
    const factoriel = (n) => Array.from(Array(n)).reduce((a, _) => a * n--, 1);

    return (factoriel(a) / factoriel(b)).toFixed(2)
}