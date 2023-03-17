function substring(word, str) {
    const hasFound = str.toLowerCase()
        .split(' ')
        .includes(word);

    if (hasFound) {
        return word;
    }

    return `${word} not found!`
}

console.log(substring(
    'javascript',
    'JavaScript is the best programming language'
));