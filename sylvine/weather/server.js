const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hiiii there</h1>');
});

app.listen(3000, () => console.log('server started on port 3000'));