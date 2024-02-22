const express = require('express');
const app = express();

app.use(express.json())

const drinks = [
    { id: 1, name: "Tuborg Classic" }, 
    { id: 2, name: "Heineken" },
    { id: 3, name: "Royal" }
]


app.get('/drinks', (req,res) => {
    res.send(drinks)
});

app.get('/drinks/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const drink = drinks.find(drink => drink.id === id);
    if(!drink) {
        res.status(404).send({ data: `No drink found with id ${id} found` })
    } else {
        res.send(drink)
    }
});

app.post('/drinks', (req,res) => {
    const lastDrink = drinks[drinks.length - 1];
    const newId = parseInt(lastDrink.id + 1);
    const name = req.body.name;
    const newDrink = {
        id: newId,
        name: name
    }
    drinks.push(newDrink);
    res.send(newDrink);
});

app.put('/drinks/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const drink = drinks.find(drink => drink.id === id);
    if(!drink) {
        res.status(404).send({ data: `No drink found with id ${id} found` })
    } else {
        const newName = req.body.name;
        drink.name = newName;
        res.send(drink);
    }
});

app.delete('/drinks/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const drink = drinks.find(drink => drink.id === id);
    if(!drink) {
        res.status(404).send({ data: `No drink found with id ${id} found` })
    } else {
        const index = drinks.indexOf(drink);
        drinks.splice(index, 1);
        res.send(drink);
    }
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is running on port", 8080);
});