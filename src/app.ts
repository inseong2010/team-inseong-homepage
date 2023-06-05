import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('home/index.ejs');
});

app.get('/privacy', (req: Request, res: Response, next: NextFunction) => {
    res.render('home/privacy.ejs');
});

app.listen('80', () => {
    console.log('listening on http://localhost');
});