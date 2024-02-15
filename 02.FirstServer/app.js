const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({ data: "Welcome" });
});

app.get('/2', (req, res) => {
    res.send({ data: [1,2,3,4,5] });
});

app.get('/3/:value/:valuetwo', (req, res) => {
    const value = req.params.value;
    const valueTwo = req.params.valuetwo
    console.log(value, valueTwo);
    console.log(req.params)
    res.send({message: "Hello world"});
});

app.get('/4', (req, res) => {
    res.send('<h1>Hello</h1>');
});

let balance = 100;
app.get('/wallet/:payment', (req, res) => {
    const payment = req.params.payment;
    if (balance < payment) {
        res.send({message: "Not enough money", currentBalance: balance})
    } else {
        balance -= payment;
        res.send({message: `${payment} has been subtracted`, currentBalance: balance})
    }
})

app.listen(8080);