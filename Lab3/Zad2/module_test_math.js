const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptQuestion = (text) => {
    return new Promise((resolve) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    });
};

(async () => {
    try {
        console.log("Wybierz moduł: 1 - obiekt, 2 - klasa");
        const choice = await promptQuestion("> ");

        const a = parseFloat(await promptQuestion("Podaj pierwszą liczbę: "));
        const b = parseFloat(await promptQuestion("Podaj drugą liczbę: "));

        if (choice === "1") {
            console.log("Dodawanie:", math1.add(a, b));
            console.log("Odejmowanie:", math1.subtract(a, b));
            console.log("Mnożenie:", math1.multiply(a, b));
            console.log("Dzielenie:", math1.divide(a, b));
            console.log("Potęgowanie:", math1.power(a, b));
        } else if (choice === "2") {
            console.log("Dodawanie:", math2.add(a, b));
            console.log("Odejmowanie:", math2.subtract(a, b));
            console.log("Mnożenie:", math2.multiply(a, b));
            console.log("Dzielenie:", math2.divide(a, b));
            console.log("Potęgowanie:", math2.power(a, b));
        } else {
            console.log("Niepoprawny wybór modułu.");
        }
    } catch (err) {
        console.error("Błąd:", err.message);
    } finally {
        rl.close();
    }
})();
