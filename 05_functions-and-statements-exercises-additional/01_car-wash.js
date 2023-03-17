function carWash(commands) {
    let cleaned = 0;

    const actions = {
        // · soap – add 10 to the value
        soap: () => cleaned += 10,
        // · water – increase the value by 20%
        water: () => cleaned += (cleaned * 0.2),
        // · vacuum cleaner – increase the value by 25%
        'vacuum cleaner': () => cleaned += cleaned * 0.25,
        // · mud – decrease the value by 10%
        mud: () => cleaned -= cleaned * 0.1
    }

    commands.forEach(com => actions[com]());

    return `The car is ${cleaned.toFixed(2)}% clean.`;
}
