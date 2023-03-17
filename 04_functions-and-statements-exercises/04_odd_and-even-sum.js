function numDigitsSum(n) {
    const sums = `${n}`.split('')
        .reduce((a, d) => {
            if (d % 2 === 0) {
                a.even += +d;

                return a;
            }

            a.odd += +d;
            return a;
        }, {
            odd: 0, even: 0
        });

    return `Odd sum = ${sums.odd}, Even sum = ${sums.even}`
}