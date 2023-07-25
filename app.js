const express = require('express');
const app = express();

const PORT = 3000;

app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/resoure`));

app.get('/', (req, res) => {
    res.render('home/index.ejs');
});

app.get('/privacy', (req, res) => {
    res.render('home/privacy.ejs');
});

app.get('/apocalypse/resoure', (req, res) => {
    res.download('resoure/home/Apocalypse.zip')
});

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});