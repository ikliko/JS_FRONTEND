function calcCircleArea(r) {
    if (typeof r !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof r}.`
    }

    return (Math.PI * (r ** 2)).toFixed(2);
}