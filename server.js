const express = require("express")
const path = require('path');

let app = express()
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))
console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

app.listen(3000, () => console.log("We're LIVE BOIS!!!"));