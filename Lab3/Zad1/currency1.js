const rates = {
    USD: 4.20,
    EUR: 4.55,
    GBP: 5.20,
    CHF: 4.70,
        JPY: 0.028
    };

module.exports = {
    convertToPLN(amount, currency) {
        if (!rates[currency]) {
            throw new Error("Nieznana waluta: " + currency);
        }
        return amount * rates[currency];
    },
    getRates() {
        return rates;
    }
};
