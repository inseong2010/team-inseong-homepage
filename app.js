const express = require('express');
const app = express();

const PORT = 80;

app.set('views', "./views");
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index.ejs');
});

app.get('/privacy', (req, res) => {
    res.render('home/privacy.ejs');
});

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});