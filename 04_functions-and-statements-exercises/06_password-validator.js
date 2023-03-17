function passValidator(pass) {
    const errorBag = [];

    const digitsRequired = (n) => {
        return pass.split('')
            .filter(c => !isNaN(c))
            .length === n;
    }

    if (pass.length < 6 || pass.length > 10) {
        errorBag.push(`Password must be between 6 and 10 characters`);
    }

    if (!pass.match(/^[A-Za-z0-9]+$/g)) {
        errorBag.push( `Password must consist only of letters and digits`);
    }

    if (!pass.match(/^.+?([0-9]{2,}).+?$/g) && !digitsRequired(2)) {
        errorBag.push( 'Password must have at least 2 digits');
    }

    if(errorBag.length) {
        return errorBag.join('\n')
    }

    return 'Password is valid';
}

