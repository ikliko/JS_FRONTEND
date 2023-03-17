// https://judge.softuni.org/Contests/Practice/Index/3791#6
// Write a function that manages meeting appointments. The input comes as an array of strings.
// Each string contains a weekday and person’s name. For each successful meeting, print a message.
// If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message.
// In the end, print a list of all successful meetings.
function scheduleMeeting(meetings) {
    const result = meetings.reduce((storage, meeting, id) => {
        const [day, person] = meeting.split(' ');

        if (storage.meetings[day]) {
            storage.console.push(`Conflict on ${day}!`);

            return storage;
        }

        storage.meetings[day] = {
            person, id
        };
        storage.console.push(`Scheduled for ${day}`);

        return storage;
    }, {
        console: [],
        meetings: {
            Monday: null,
            Tuesday: null,
            Wednesday: null,
            Thursday: null,
            Friday: null,
            Saturday: null,
            Sunday: null
        }
    });

    return [
        ...result.console,
        ...Object.entries(result.meetings)
            .filter(entry => entry[1])
            .sort((a,b) => a[1].id - b[1].id)
            .map(entry => (`${entry[0]} -> ${entry[1].person}`))
    ].join('\n');
}