const myMathModule1 = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) throw new Error("Dzielenie przez zero");
        return a / b;
    },
    power(a, b) {
        return Math.pow(a, b);
    }
};

module.exports = myMathModule1;
