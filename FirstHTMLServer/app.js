import express, { response } from "express";

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/proxy', (req, res) => {
    fetch('https://www.google.com')
        .then((response) => response.text())
        .then((result) => res.send(result));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));