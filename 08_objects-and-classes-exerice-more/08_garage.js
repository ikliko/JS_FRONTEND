function garage(input) {
    return input.reduce((a, r) => {
        const [garage, rest] = r.split(' - ');
        const garageId = a.findIndex(g => +g.id === +garage);
        let obj = {
            id: garage,
            data: [],
            toString() {
                return [
                    `Garage № ${this.id}`,
                    this.data.join('\n')
                ].join('\n')
            }
        };

        if (garageId > -1) {
            obj = a[garageId];
        }

        obj.data.push(`--- ${rest.split(': ').join(' - ')}`);

        if (garageId < 0) {
            a.push(obj);
        }

        return a;
    }, [])
        .filter(r => r)
        .map(g => g.toString())
        .join('\n');
}

// console.log(garage([
//     '1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ]));