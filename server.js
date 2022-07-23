const express = require('express');
const app = express();
const port = '3000';
const path = require('path');
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.listen(port, () => {
    console.log('App on http://localhost:' + port);
});
