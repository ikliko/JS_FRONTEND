function charsInRange(start, end) {
    let from = start.charCodeAt(0);
    let to = end.charCodeAt(0);

    if (to > from) {
        from++;
        return Array.from(Array(to - from))
            .map((_, i) => String.fromCharCode(i + from))
            .join(' ');
    }

    to++;
    return Array.from(Array(from - to))
        .map((_, i) => String.fromCharCode(i + to))
        .join(' ');
}
