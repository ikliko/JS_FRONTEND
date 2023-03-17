// Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the
// following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

function solution(rawHeroes) {
    const db = {
        heroes: [],

        addHero(name, level, items) {
            this.heroes.push({
                name, level, items,
                toString() {
                    return [
                        `Hero: ${this.name}`,
                        `level => ${this.level}`,
                        items ? `items => ${this.items}` : null
                    ]
                        .filter(r => r)
                        .join('\n')
                }
            })
        },

        toString() {
            return this.heroes.sort((a, b) => a.level - b.level)
                .map(h => h.toString()).join('\n');
        }
    }

    rawHeroes.forEach(hero => {
        db.addHero(...hero.split(' / '));
    });

    return db.toString();
}

// console.log(solution([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]));