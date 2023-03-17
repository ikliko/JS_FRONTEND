function censoredWords(sentence, word) {
    String.prototype.replaceAll = function (replace, w) {
        const res = this.replace(replace, w);

        if(!res.includes(replace)) {
            return res;
        }

        return res.replaceAll(replace, w);
    }

    return sentence.replaceAll(word, '*'.repeat(word.length))
}
