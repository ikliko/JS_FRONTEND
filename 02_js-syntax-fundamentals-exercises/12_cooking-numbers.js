function cookingNumbers(...args) {
    let [num, ...commands] = args;

    const commandsList = {
        // chop - divide the number by two
        chop: n => n / 2,
        // · dice - square root of a number
        dice: n => Math.sqrt(n),
        // · spice - add 1 to the number
        spice: n => n + 1,
        // · bake - multiply number by 3
        bake: n => n * 3,
        // · fillet - subtract 20% from the number
        fillet: n => n - n * 0.2,
    }

    commands.forEach(command => {
        num = commandsList[command](num);
        console.log(num);
    });
}