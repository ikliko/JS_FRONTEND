function calcFruitPrice(fruit, g, pricePerKg) {
    const weight = g / 1000;

    return `I need $${(weight * pricePerKg).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}