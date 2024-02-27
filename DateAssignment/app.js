const express = require("express");
const ct = require('countries-and-timezones');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/countries', (req, res) => {
    const countries = ct.getAllCountries();
    res.send({ countries })
})

app.get('/countries/:landcode', (req, res) => {
    const landCode = req.params.landcode.toUpperCase();
    const timezones = ct.getTimezonesForCountry(landCode);
    res.send({timezones})
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
