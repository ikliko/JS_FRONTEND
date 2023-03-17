function revealWords(wordsList, sentence) {
    String.prototype.replaceAll = function (replace, w) {
        const res = this.replace(replace, w);

        if (!res.includes(replace)) {
            return res;
        }

        return res.replaceAll(replace, w);
    }

    wordsList.split(', ')
        .sort((a, b) => b.length - a.length)
        .forEach(w => {
            const replace = '*'.repeat(w.length);

            sentence = sentence.replaceAll(replace, w)
        })

    return sentence
}
