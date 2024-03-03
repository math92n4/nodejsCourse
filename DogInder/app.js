import express from "express";
import path from "path";
import getMatches from "./public/util/matches.js";

const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('public/pages/homepage.html'))
});

app.get('/matches', (req,res) => {
    res.sendFile(path.resolve('public/pages/matches.html'));
});
// make pages folder for html
app.get('/contact', (req,res) => {
    res.sendFile(path.resolve('public/pages/contact.html'));
});

app.get('/api/matches', (req,res) => {
    const matches = getMatches();
    res.send({ data: matches })
})

const PORT = 8080;
app.listen(PORT, () => console.log('Server is running on', PORT));