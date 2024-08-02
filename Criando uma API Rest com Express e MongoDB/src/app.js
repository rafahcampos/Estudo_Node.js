import express from "express";

const app = express();

const games = {
    1: {
        "nome": "Final Fantasy",
        "ano": 1989
    },
    2: {
        "nome": "One Piece",
        "ano": "1997"
    }
};

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
});

app.get("/games", (req, res) =>{
    res.status(200).json(games);
});

export default app;