const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my first server...!!!');
});

app.get('/data', (req, res) => {
    res.send('Server data are coming soon...');
})

app.listen(port, () => {
    console.log(`My first server running which one created by me! & port on : ${port}`);
})