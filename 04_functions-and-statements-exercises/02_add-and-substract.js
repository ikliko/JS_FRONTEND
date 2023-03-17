function solve(a,b,c) {
    function substract() {
        return sum() - c;
    }

    function sum() {
        return a + b;
    }

    return substract();
}