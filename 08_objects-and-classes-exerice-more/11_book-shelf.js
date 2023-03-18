// Write a function that stores information about shelves and the books on the shelves.
// Each shelf has an Id and a genre of books that can be on it. Each book has a title,
// an author, and a genre. The input comes as an array of strings. They will be in the
// format: "{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
// "{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add
// the book to the shelf. After finishing reading input, sort the shelves by a count of
// books in it in descending. For each shelf sort the books by title in ascending.
// Then print them in the following format. "{s --> {bookOne title}: {bookOne author} --> {bookTwo title}: {bookTwo author} … {shelfTwo id} {shelf genre}: {books count} …"

function solve(input) {
    class Book {
        constructor(title, author, genre) {
            this.title = title;
            this.author = author;
            this.genre = genre;
        }

        toString() {
            return `--> ${this.title}: ${this.author}`
        }
    }

    class Shelf {
        books = [];

        get count() {
            return this.books.length;
        }

        constructor(id, genre) {
            this.id = id;
            this.genre = genre;
        }

        addBook(title, author, genre) {
            this.books.push(new Book(title, author, genre))
        }

        toString() {
            return [
                `${this.id} ${this.genre}: ${this.count}`,
                this.books
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map(b => b.toString())
                    .join('\n')
            ].join('\n')
        }
    }

    const app = {
        shelves: {},

        createShelf(id, genre) {
            if (this.shelves[id]) {
                return;
            }

            this.shelves[id] = new Shelf(id, genre);
        },

        addBookToShelf(title, author, genre) {
            const shelf = Object.keys(this.shelves)
                .map(k => this.shelves[k])
                .find(s => s.genre === genre);

            if (!shelf) {
                return;
            }

            shelf.addBook(title, author, genre);
        },

        toString() {
            return Object.keys(this.shelves)
                .map(k => this.shelves[k])
                .sort((a, b) => b.count - a.count)
                .map(s => s.toString())
                .join('\n');
        }
    }

    input.forEach(r => {
        if (r.includes(' -> ')) {
            app.createShelf(...r.split(' -> '));

            return;
        }

        if (r.includes(': ')) {
            const [bookTitle, rest] = r.split(': ');
            const [author, genre] = rest.split(', ');

            app.addBookToShelf(bookTitle, author, genre);

            return;
        }
    });

    return app.toString();
}

// console.log(solve([
//     '1 -> history',
//     '1 -> action',
//     'Death in Time: Criss Bell, mystery',
//     '2 -> mystery',
//     '3 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Hurting Secrets: Dustin Bolt, action',
//     'Future of Dawn: Aiden Rose, sci-fi',
//     'Lions and Rats: Gabe Roads, history',
//     '2 -> romance',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi',
//     'Pilots of Stone: Brook Jay, history'
// ]));