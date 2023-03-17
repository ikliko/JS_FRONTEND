function convertToObject(json) {
    return Object.entries(JSON.parse(json))
        .map(r => r.join(': '))
        .join('\n');
}