import game from "../models/Games.js";

class GameController {

    static async listarGames(req, res) {
        try {
            const listaGames = await game.find({});
            res.status(200).json(listaGames);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falhana requisição` });
        }
    }

    static async listarGamePorId(req, res) {
        try {
            const id = req.params.id;
            const gameEncontrado = await game.findById(id);
            res.status(200).json(listaGames);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falhana requisição do game` });
        }
    }

    static async cadastrarGame(req, res) {
        try {
            const novoGame = await game.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", game: novoGame });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar jogo` });
        }
    }

    static async atualizarGame(req, res) {
        try {
            await game.create(req.body);
            res.status(201).json({ message: "Game atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    }
};

export default GameController;