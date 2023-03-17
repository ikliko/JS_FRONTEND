// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
// · "addMovie {movie name}" – add the movie
// · "{movie name} directedBy {director}" – check if the movie exists and then add the director
// · "{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

function movies(commands) {
    const db = {
        movies: [],
        addMovie(name) {
            const movie = this.movies

            this.movies.push({ name })
        },
        getMovie(name) {
            const movie = this.movies.find(m => m.name === name);

            if(!movie) {
                return null;
            }

            return movie;
        },
        addDirector(movieName, director) {
            const movie = this.getMovie(movieName);

            if(!movie) {
                return;
            }

            movie.director = director;
        },
        addDate(movieName, date) {
            const movie = this.getMovie(movieName);

            if(!movie) {
                return;
            }

            movie.date = date;
        },
        toString() {
            this.movies
                .filter(m => Object.keys(m).length === 3)
                .forEach(m => console.log(JSON.stringify(m)))
        }
    }

    commands.forEach(command => {
        if(command.includes('addMovie ')) {
            db.addMovie(command.replace('addMovie ', ''));

            return;
        }

        if(command.includes(' directedBy ')) {
            db.addDirector(...command.split(' directedBy '));

            return;
        }

        if(command.includes(' onDate ')) {
            db.addDate(...command.split(' onDate '));
        }
    });

    return db.toString();
}

console.log(movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]));