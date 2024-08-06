import express from "express";
import DirectorController from "../controllers/directorController.js"; 

const routes = express.Router();

routes.get("/games", GameController.listarGames);

routes.get("/directors", DirectorController.listarDirectors);

routes.get("/games/:id",GameController.listarGamePorId);
routes.get("directors/:id", DirectorController.listarDirectorPorId);

routes.post("/games", GameController.cadastrarGame);
routes.put("games/:id", GameController.atualizarGame);
routes.delete("games/:id", GameController.excluirGame);

export default routes;