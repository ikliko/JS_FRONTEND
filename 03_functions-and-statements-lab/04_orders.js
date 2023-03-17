function orders(prod, n) {
    const products = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    return (products[prod] * n ).toFixed(2)
}