const express = require("express");
const ct = require('countries-and-timezones');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/timezones', (req, res) => {
    const timezones = ct.getAllTimezones();
    res.send({ timezones })
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
