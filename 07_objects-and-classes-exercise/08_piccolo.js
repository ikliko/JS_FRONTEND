// Write a function that:
// · Records a car number for every car that enters the parking lot
// · Removes a car number when the car goes out
// · Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function solve(commands) {
    const piccolo = {
        db: [],
        in(number) {
            if(this.db.indexOf(number) > -1) {
                return;
            }

            this.db.push(number)
        },
        out(number) {
            if(this.db.indexOf(number) < 0) {
                return;
            }

            this.db.splice(this.db.indexOf(number), 1)
        },
        toString() {
            if(!this.db.length) {
                return 'Parking Lot is Empty';
            }

            return this.db.sort((a,b) => a.localeCompare(b)).join('\n');
        }
    }

    while (commands.length) {
        const [command, number] = commands.shift().split(', ');
        piccolo[command.toLowerCase()](number);
    }

    return piccolo.toString();
}

// console.log(solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']));