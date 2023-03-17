function calc(a, b, o) {
    const operators = {
        multiply: () => a * b,
        divide: () => a / b,
        add: () => a + b,
        subtract: () => a - b,
    }

    return operators[o]();
}