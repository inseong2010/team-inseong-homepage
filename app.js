const express = require('express');
const app = express();

const PORT = 3000;

app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('home/index.ejs');
});

app.get('/privacy', (req, res) => {
    res.render('home/privacy.ejs');
});

app.get('/bug', (req, res) => {
    res.render('home/bug.ejs');
});

app.get('/project', (req, res) => {
    res.render('home/project.ejs');
});

app.get('/project/apocalypse', (req, res) => {
    res.render('home/apocalypse.ejs');
});

app.get('/project/teleporter', (req, res) => {
    res.render('home/teleporter.ejs');
});

app.get('/project/status', (req, res) => {
    res.render('home/status.ejs');
});

app.get('/apocalypse/resoure', (req, res) => {
    res.download('resoure/home/Apocalypse.zip')
});

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
});