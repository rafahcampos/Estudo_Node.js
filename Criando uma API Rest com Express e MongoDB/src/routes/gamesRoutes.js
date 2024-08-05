import express from "express";
import GameController from "../controllers/gameController.js";

const routes = express.Router();

routes.get("/games", GameController.listarGames);
routes.get("/games/:id",GameController.listarGamePorId);
routes.post("/games", GameController.cadastrarGame);
routes.put("games/:id", GameController.atualizarGame);

export default routes;