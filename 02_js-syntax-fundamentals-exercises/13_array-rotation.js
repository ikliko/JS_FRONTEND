function arrayRotation(arr, c) {
    while (c-- > 0) {
        arr.push(arr.shift());
    }

    return arr.join(' ')
}