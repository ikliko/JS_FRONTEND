// Write a function that receives an array of words and finds occurrences of given words in that sentence.
// The input will come as an array of strings. The first string will contain the words you will be looking
// for separated by a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.

function trackWords([sentence, ...searchIn]) {
    const words = sentence.split(' ');
    const counter = {};

    words.forEach(word => {
        counter[word] = searchIn.filter(_word => _word === word).length
    });

    return Object.entries(counter)
        .sort((b, a) => a[1] - b[1])
        .map(e => e.join(' - '))
        .join('\n')
}