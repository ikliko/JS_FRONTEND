function extractHashtags(text) {
    return text.split(' ')
        .filter(w => {
            const match = w.match(/#[a-zA-Z]+/gm);

            return match && match[0].length === w.length;
        })
        .map(e => e.substring(1))
        .filter(e => e)
        .join('\n')
}
