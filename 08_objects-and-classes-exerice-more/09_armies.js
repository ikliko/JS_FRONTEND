// Write a function that stores information about an army leader and his armies. The input will be an array of strings. The strings can be in some of the following formats: "{leader} arrives" – add the leader (no army)
// "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists) "{army name} + {army count}" – if the army exists somewhere add the count "{leader} defeated" – delete the leader and his army (if he exists)
// When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.
//
// Output
// Print in the following format: "{leader one name}: {total army count} >>> {armyOne name} - {army count} >>> {armyTwo name} - {army count} … {leader two name}: {total army count} …"
//
// Constrains
// · The new leaders will always be unique
// · When adding a new army to the leader, the army will be unique

function solve(input) {
    const app = {
        store: {},

        addLeader(name) {
            this.store[name] = {
                name,
                armies: {},
                get totalUnits() {
                    return Object.keys(this.armies)
                        .map(k => this.armies[k])
                        .reduce((t, c) => t + c, 0);
                },
                toString() {
                    return [
                        `${this.name}: ${this.totalUnits}`,
                        Object.keys(this.armies)
                            .map(k => ({
                                name: k,
                                count: this.armies[k],
                            }))
                            .sort((a, b) => b.count - a.count)
                            .map(army => `>>> ${army.name} - ${army.count}`)
                            .join('\n')
                    ].join('\n')
                },
            };
        },

        deleteLeader(name) {
            delete this.store[name];
        },

        addArmyToLeader(leader, name, count) {
            if (!this.store[leader]) {
                return;
            }

            if (!this.store[leader].armies[name]) {
                this.store[leader].armies[name] = 0;
            }

            this.store[leader].armies[name] += +count
        },

        addUnitsToArmy(name, count) {
            Object.keys(this.store)
                .forEach(k => {
                    if (!this.store[k].armies[name]) {
                        return;
                    }

                    this.store[k].armies[name] += +count;
                });
        },

        toString() {
            return Object.keys(this.store)
                .map(k => ({
                    name: this.store[k],
                    count: this.store[k].totalUnits,
                    ...this.store[k]
                }))
                .sort((a, b) => b.count - a.count)
                .map(obj => obj.toString())
                .join('\n');
        }
    }

    input.forEach(r => {
        if (r.includes('arrives')) {
            app.addLeader(r.split('arrives')[0].trim());

            return;
        }

        if (r.includes('defeated')) {
            app.deleteLeader(r.split('defeated')[0].trim());

            return;
        }

        if (r.includes(' + ')) {
            app.addUnitsToArmy(...r.split(' + '));

            return;
        }

        if (r.includes(': ')) {
            const [leader, rest] = r.split(': ');
            const [army, count] = rest.split(', ')
            app.addArmyToLeader(leader, army, +count);

            return;
        }
    });

    return app.toString();
}

// console.log(solve([
//     'Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205'
// ]));