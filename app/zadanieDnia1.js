const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/yes', (req, res) => { 
    res.send('Dziękujemy za głos!');
});

app.get('/vote/no', (req, res) => { 
    res.send('Dziękujemy za głos!');
});

app.get('/votes/check', (req, res) => { 
    res.send();
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});