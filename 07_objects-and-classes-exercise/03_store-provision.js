// You will receive two arrays. The first array represents the current stock of the local store.
// The second array will contain products that the store has ordered for delivery.
// Every even index will hold the name of the product and every odd index will hold the quantity
// of that product. The second array could contain products that are already in the local store.
// If that happens increase the quantity for the given product. You should store them into an object,
// and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.
// Examples
//
// Input
// [ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
// [ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
//
// Output
// Chips -> 5 CocaCola -> 9 Bananas -> 44 Pasta -> 11 Beer -> 2 Flour -> 44 Oil -> 12 Tomatoes -> 70
//
// Input
// [ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ],
// [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]
//
// Output
// Salt -> 2 Fanta -> 4 Apple -> 21 Water -> 4 Juice -> 5 Sugar -> 44 Oil -> 12 Tomatoes -> 7 Bananas -> 30

function storeProvision(products1, products2) {
    const productsBucket = [...products1, ...products2];
    const products = {};

    while(productsBucket.length) {
        const productName = productsBucket.shift();

        if(!products[productName]) {
            products[productName] = 0;
        }

        products[productName] += +productsBucket.shift();
    }

    return Object.entries(products)
        .map(entry => entry.join(' -> '))
        .join('\n');
}