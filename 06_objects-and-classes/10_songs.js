// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in
// the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter).
// If the value of the last element is "all", print the names of all the songs.

function searchSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    input.shift();
    const query = input.pop();

    return input.map(song => new Song(...song.split('_')))
        .filter(song => {
            if (query === 'all') {
                return true;
            }

            return song.typeList === query
        })
        .map(song => song.name)
        .join('\n')
}
