class Currency {
    constructor(rates) {
        this.rates = rates;
    }
    convertToPLN(amount, currency) {
        if (!this.rates[currency]) {
            throw new Error("Nieznana waluta: " + currency);
        }
        return amount * this.rates[currency];
    }
    getRates() {
        return this.rates;
    }
}

module.exports = Currency;


