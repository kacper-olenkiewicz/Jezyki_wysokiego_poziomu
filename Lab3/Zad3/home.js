module.exports = (req, res) => {
    res.send(`
        <h1>Strona główna</h1>
        <p>Witamy na naszej stronie głównej.</p>
        <a href="/about">O nas</a> | <a href="/contact">Kontakt</a>
    `);
};
