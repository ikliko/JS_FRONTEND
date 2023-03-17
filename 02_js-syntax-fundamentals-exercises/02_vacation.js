function vacation(count, type, day) {
    const dayPricePerPerson = {
        Students: {
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46,
        },

        Business: {
            Friday: 10.9,
            Saturday: 15.6,
            Sunday: 16,
        },

        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.5,
        }
    }

    const pricePerDay = dayPricePerPerson[type][day];
    const total = count * pricePerDay;

    const countStudentDiscount = () => {
        // Students –
        // if the group is bigger than or equal to 30
        if (count >= 30) {
            // people you should reduce the total price by 15%
            return total - total * 0.15;
        }

        return total;
    }

    const countBusinessDiscount = perPerson => {
        // Business –
        // if the group is bigger than or equal to 100 people
        if (count >= 100) {
            // 10 of them can stay for free
            return total - (pricePerDay * 10);
        }

        return total;
    }

    const countRegularDiscount = perPerson => {
        // Regular –
        // if the group is bigger than or equal to 10
        // and less than or equal to 20
        // reduce the total price by 5%
        if (count >= 10 && count <= 20) {
            return total - (total * 0.05);
        }

        return total;
    }

    const calc = {
        Students: countStudentDiscount,
        Business: countBusinessDiscount,
        Regular: countRegularDiscount,
    }

    return `Total price: ${calc[type]().toFixed(2)}`;
}
