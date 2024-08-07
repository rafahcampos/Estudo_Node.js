import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro ao conectar ao Banco de Dados", erro);
});

conexao.once("open", ()=>{
    console.log("Conexão com o Banco feita com Sucesso");
});

export default app;
