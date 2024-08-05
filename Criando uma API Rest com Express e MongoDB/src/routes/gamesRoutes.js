import express from "express";
import GameController from "../controllers/gameController.js";

const routes = express.Router();

routes.get("/games", GameController.listarGames);

export default routes;