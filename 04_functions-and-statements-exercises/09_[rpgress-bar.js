function progressBar(num) {
    if (num === 100) {
        return [
            '100% Complete!',
            '[%%%%%%%%%%]'
        ].join('\n')
    }

    const percents = num / 10;
    const dot = 10 - percents;
    return [
        `${num}% [${'%'.repeat(percents)}${'.'.repeat(dot)}]`,
        'Still loading...'
    ].join('\n')
}