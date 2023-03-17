// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function solve(str) {
    return str.split(' ')
        .map(w => w.toLowerCase())
        .filter((word, id, _words) => _words.filter(w => w === word).length % 2 !== 0)
        .filter((word, id, _words) => _words.indexOf(word) === id)
        .join(' ');
}