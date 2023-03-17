// You will receive an array with strings in the form of JSON's.
// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

// https://judge.softuni.org/Contests/Practice/Index/3791#8
// Write a function that stores information about a person’s name and his address.
// The input comes as an array of strings. Each string contains the name and the address
// separated by a colon. If you receive the same name twice just replace the address.
// In the end, print the full list, sorted alphabetically by the person’s name.

function printDictionary(dictionary) {
    const termToString = function () {
        const {term, definition} = this;
        return `Term: ${term} => Definition: ${definition}`
    }

    return dictionary.map(d => JSON.parse(d))
        .reduce((_dictionary, termData, id) => {
            const [term, definition] = Object.entries(termData)[0];
            const termId = _dictionary.findIndex(_termData => _termData.term === term);

            if (termId === -1) {
                _dictionary.push({
                    term, definition,
                    toString: termToString
                });

                return _dictionary;
            }

            if (id !== termId) {
                _dictionary[termId] = ({
                    term, definition,
                    toString: termToString
                });

                return _dictionary;
            }
        }, [])
        .sort((a, b) => a.term.localeCompare(b.term))
        .map(r => r.toString())
        .join('\n');
}

// console.log(printDictionary([
//     '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//     '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
//     '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//     '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//     '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
// ]));