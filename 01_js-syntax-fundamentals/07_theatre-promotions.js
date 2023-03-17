function theatrePromotions(day, age){
    if(age < 0 || age > 122) {
        return 'Error!';
    }

    const days = {
        'Weekday': () => {
            if(age < 19) {
                return '12$';
            }

            if(age < 65) {
                return '18$';
            }

            return '12$';
        },

        'Weekend': () => {
            if(age < 19) {
                return '15$';
            }

            if(age < 65) {
                return '20$';
            }

            return '15$';
        },

        'Holiday': () => {
            if(age < 19) {
                return '5$';
            }

            if(age < 65) {
                return '12$';
            }

            return '10$';
        },
    }

    return days[day]();
}