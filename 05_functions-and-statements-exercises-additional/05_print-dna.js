function printDna(n) {
    const symbols = 'ATCGTTAGGG'.split('');
    const items = {
        stars: {
            count: 2,
            step: -1,
        },

        dashes: {
            count: 0,
            step: 2,
        }
    }

    const operations = {
        updateStars: () => {
            if (items.stars.count === 2) {
                items.stars.step = -1;
            }

            if (items.stars.count === 0) {
                items.stars.step = 1;
            }

            items.stars.count += items.stars.step;
        },

        updateDashes: () => {
            if (items.dashes.count === 4) {
                items.dashes.step = -2;
            }

            if (items.dashes.count === 0) {
                items.dashes.step = 2;
            }

            items.dashes.count += items.dashes.step;
        },

        getLetters: () => {
            const letters = [];
            letters.push(symbols.shift());
            letters.push(symbols.shift());
            symbols.push(...letters);

            return letters;
        },
    }

    while (n > 0) {
        const printStars = '*'.repeat(items.stars.count);
        const [a, b] = operations.getLetters();
        console.log(`${printStars}${a}${'-'.repeat(items.dashes.count)}${b}${printStars}`)

        n--;
        operations.updateStars();
        operations.updateDashes();
    }
}

printDna(20)