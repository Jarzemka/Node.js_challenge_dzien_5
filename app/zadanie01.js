const express = require('express');
const app = express();
var sum = 0;

process.argv.shift();
process.argv.shift();
process.argv.forEach(function summarize(item, index, list) {
	sum += parseInt(item, 10);
})
console.log(sum);

app.get('/', (req, res) => {
    res.send('suma:' +sum);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});