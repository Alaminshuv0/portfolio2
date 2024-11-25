import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.get('/', (req, res) => {
    res.sendFile("index.html", { root : "public" })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})