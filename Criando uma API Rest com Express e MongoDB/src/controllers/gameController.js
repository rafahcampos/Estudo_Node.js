import { director } from "../models/Director.js";
import game from "../models/Games.js";

class GameController {

    static async listarGames(req, res) {
        try {
            const listaGames = await game.find({});
            res.status(200).json(listaGames);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async listarGamePorId(req, res) {
        try {
            const id = req.params.id;
            const gameEncontrado = await game.findById(id);
            res.status(200).json(listaGames);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do game` });
        }
    }

    static async cadastrarGame(req, res) { //relacionamento o banco
        const novoGame = req.body;
        try {
            const directorEncontrado = await director.findById(novoGame.director);
            const gameCompleto = { ...novoGame, director: { ...directorEncontrado._doc } };
            const gameCriado = await game.create(gameCompleto);
            res.status(201).json({ message: "Criado com sucesso", game: novoGame });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar o game` });
        }
    }

    static async atualizarGame(req, res) {
        try {
            const id = req.params.id;
            const gameAtualizado = await game.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Game atualizado", game: gameAtualizado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    }

    static async excluirGame(req, res) {
        try {
            const id = req.params.id;
            await game.findByIdAndDelete(id);
            res.status(200).json({ message: "Game excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o game` });
        }
    }

    static async listarGamesPorStudio(req, res) {
        const studio = req.query.studio;
        try {
            const gamesPorStudio = await game.find({ studio: studio });
            res.status(200).json(gamesPorStudio);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    }
};

export default GameController;