function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return 'yes';
    }

    if(year % 400 === 0) {
        return "yes";
    }

    return 'no';
}

console.log(isLeapYear(2000));