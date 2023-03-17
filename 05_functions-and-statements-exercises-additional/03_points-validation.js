function pointsValidation([x1, y1, x2, y2]) {
    const calcDistance = (dx1, dy1, dx2, dy2) =>
        Math.sqrt(((dx2 - dx1) ** 2) + ((dy2 - dy1) ** 2));
    const isInt = n => n % 1 === 0;
    const print = (res, p1, p2) =>
        `{${p1.x}, ${p1.y}} to {${p2.x}, ${p2.y}} is ${isInt(res) ? 'valid' : 'invalid'}`

    const r1 = calcDistance(x1, y1, 0, 0);
    const r2 = calcDistance(x2, y2, 0, 0);
    const r3 = calcDistance(x1, y1, x2, y2);


    return [
        print(r1, {x: x1, y: y1}, {x: 0, y: 0}),
        print(r2, {x: x2, y: y2}, {x: 0, y: 0}),
        print(r3, {x: x1, y: y1}, {x: x2, y: y2})
    ].join('\n')
}
