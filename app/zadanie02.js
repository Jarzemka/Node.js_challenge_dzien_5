const express = require('express');
const app = express();

app.get('/name/set/:imie', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const name = req.params.imie;
    res.send(name);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});