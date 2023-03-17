function matrix(n) {
    return Array.from(Array(n))
        .map(_ => Array.from(Array(n)).map(_ => n).join(' '))
        .join('\n')
}