const express = require('express');
const app = express();
const port = 3000;

const home = require('./home');
const contact = require('./contact');
const about = require('./about');

app.get('/', home);
app.get('/contact', contact);
app.get('/about', about);

app.use((req, res) => {
    res.status(404).send('<h1>Strona nie znaleziona</h1><a href="/">Powrót do strony głównej</a>');
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});
