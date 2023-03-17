function solve(text) {
    return text.split('')
        .reduce((a, l, i) => {
            if(l.charCodeAt(0) >=65 && l.charCodeAt(0) <= 90) {
                return `${a} ${l}`;
            }

            return `${a}${l}`;
        }, '')
        .trim()
        .split(' ')
        .filter(w => w)
        .join(', ')
}

console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));