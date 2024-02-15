const express = require('express');
const app = express();

const data = [
    {
        id: 1,
        name: "Tuborg Classic"
    }, 
    {
        id: 2,
        name: "Heineken"
    },
    {
        id: 3,
        name: "Royal"
    }
]

app.get('/beers', (req,res) => {
    res.send(data)
});

app.get('/beers/:id', (req,res) => {
    const id = parseInt(req.params.id);
    let beer = data[id - 1];
    res.send(beer)
});

app.listen(8080);