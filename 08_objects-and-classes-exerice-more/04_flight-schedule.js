// You will receive an array with arrays.
// The first array (at index 0) will hold all flights on a specific sector in the airport.
// The second array (at index 1) will contain newly changed statuses of some of the flights
// at this airport. The third array (at index 2) will have a single string, which will be the
// flight status you need to check. When you put all flights into an object and change the
// statuses depends on the new information on the second array. You must print all flights
// with the given status from the last array.
// · If the value of the string obtained from the third array is "Ready to fly":
// o then you must print flights that have not changed their status in the second array
// o and automatically change the status to "Ready to fly"
// · Otherwise, print only flights that have changed their status.

function solve([flights, statuses, [ filterStatus ]]) {
    const db = {
        storage: [],

        addFlight(Id, Destination) {
            this.storage.push({
                Id,
                Destination,
                Status: 'Ready to fly',
            });
        },

        addStatus(Id, Status) {
            const f = this.storage.find(f => f.Id === Id);

            if(!f) {
                return;
            }

            f.Status = Status;
        },

        getAllByStatus(Status) {
            return this.storage.filter(f => f.Status === Status)
                .map(({Destination, Status}) => ({Destination, Status}));
        }
    }

    flights.forEach(f => db.addFlight(...f.split(' ')));
    statuses.forEach(s => db.addStatus(...s.split(' ')));

    db.getAllByStatus(filterStatus)
        .map(f => {
            console.log(f);
        })
}

// console.log(solve([
//     [
//         'WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     [
//         'DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ]));