function ages(age) {
    if(age < 0) {
        return 'out of bounds'
    }

    if(age < 3) {
        return 'baby';
    }

    if(age < 14) {
        return 'child';
    }

    if(age < 20) {
        return 'teenager';
    }

    if(age < 66) {
        return 'adult';
    }

    return 'elder';
}