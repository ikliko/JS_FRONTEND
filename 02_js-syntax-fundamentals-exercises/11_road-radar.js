function roadRadar(speed, area) {
    const areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (speed <= areaLimits[area]) {
        return `Driving ${speed} km/h in a ${areaLimits[area]} zone`;
    }

    const diff = speed - areaLimits[area];

    if (diff <= 20) {
        return `The speed is ${diff} km/h faster than the allowed speed of ${areaLimits[area]} - speeding`
    }

    if (diff <= 40) {
        return `The speed is ${diff} km/h faster than the allowed speed of ${areaLimits[area]} - excessive speeding`
    }

    return `The speed is ${diff} km/h faster than the allowed speed of ${areaLimits[area]} - reckless driving`
}