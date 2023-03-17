function signCheck(...args) {
    return args.filter(n => n < 0).length % 2 === 0 ? 'Positive': 'Negative';
}

console.log(signCheck(5, 12, -15));