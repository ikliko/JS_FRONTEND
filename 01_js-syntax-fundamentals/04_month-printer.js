function monthPrinter(month) {
    if (month < 1 || month > 12) {
        return 'Error!';
    }

    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month - 1];
}