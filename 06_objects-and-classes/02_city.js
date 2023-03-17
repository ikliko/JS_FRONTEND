function printCity(city) {
    return Object.entries(city)
        .map(r => r.join(' -> '))
        .join('\n');
}