function sortingNumbers(arr) {
    const res = [];

    while (arr.length) {
        const min = Math.min(...arr);
        arr.splice(arr.indexOf(min), 1);
        res.push(min);

        if(!arr.length) {
            continue;
        }

        const max = Math.max(...arr);
        arr.splice(arr.indexOf(max), 1);
        res.push(max);
    }

    return res;
}
