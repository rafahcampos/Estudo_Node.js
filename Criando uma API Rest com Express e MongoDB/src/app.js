import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const app = express();

app.use(express.json());

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro ao conectar ao Banco de Dados", erro);
});

conexao.once("open", ()=>{
    console.log("Conexão com o Banco feita com Sucesso");
});


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
});

app.get("/games", (req, res) => {
    res.status(200).json(games);
});

//Lozalizando um jogo
app.get("/games/:id", (req, res) => {
    const index = buscaGames(req.params.id);
    res.status(200).json(games[index]);
});

//Inserindo mais jogos
app.post("/games", (req, res) => {
    games.push(req.body);
    res.status(201).send("Game cadastrado com sucesso");
});

//Atualizando os jogos
app.put("/games/:id", (req, res) => {
    const index = buscaGames(req.params.id);
    games[index.nome] = req.body.nome;
    res.status(200).json(games);
});

//Deletando games
app.delete("/games/:id", (req, res) => {
    const index = buscaGames(req.params.id);
    games.splice(index, 1);
    res.status(200).send("Jogo alterado com sucesso");
});

export default app;




//Códigos desabilitados devido ao crescimento do desenvolvimento
/* //Não será mais utilizada esta parte
const games = [
    {
        id: 1,
        nome: "Final Fantasy",
        ano: 1989
    },
    {
        id: 2,
        nome: "One Piece",
        ano: 1997
    }
];

function buscaGames(id) {
    return games.findIndex(game => {
        return game.id === Number(id);
    });
};
*/