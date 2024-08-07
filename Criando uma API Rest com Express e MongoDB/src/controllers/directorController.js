import {director} from "../models/Director.js";

class DirectorController {

    static async listarDirectors(req, res) {
        try {
            const listaDirectors = await director.find({});
            res.status(200).json(listaDirectors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }
    }

    static async listarDirectorPorId(req, res) {
        try {
            const id = req.params.id;
            const directorEncontrado = await game.findById(id);
            res.status(200).json(listaDirectors);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do diretor` });
        }
    }

    static async cadastrarDirector(req, res) {
        try {
            const novoDirector = await director.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", director: novoDirector });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar o diretor` });
        }
    }

    static async atualizarDirector(req, res) {
        try {
            const id = req.params.id;
            const directorAtualizado = await director.findByIdAndUpdate(id, req.body);
            res.status(201).json({ message: "Diretor atualizado", directorAtualizado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na atualização` });
        }
    }

    static async excluirDirector(req, res) {
        try {
            const id = req.params.id;
            const directorEncontrado = await director.findOneAndDelete(id);
            res.status(200).json({ message: "Director excluido" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o diretor` });
        }
    }
};

export default DirectorController;