const currency1 = require('./currency1');
const Currency = require('./currency2');

const rates = {
    USD: 4.20,
    EUR: 4.55,
    GBP: 5.20,
    CHF: 4.70,
    JPY: 0.028
};

const currency2 = new Currency(rates);

console.log("=== Test: currency1.js (export obiektu) ===");
console.log("100 USD w PLN:", currency1.convertToPLN(100, 'USD'));
console.log("100 EUR w PLN:", currency1.convertToPLN(100, 'EUR'));

console.log("\n=== Test: currency2.js (klasa Currency) ===");
console.log("100 GBP w PLN:", currency2.convertToPLN(100, 'GBP'));
console.log("100 CHF w PLN:", currency2.convertToPLN(100, 'CHF'));
console.log("100 JPY w PLN:", currency2.convertToPLN(100, 'JPY'));
