import express from "express";
import DirectorController from "../controllers/directorController.js"; 

const routes = express.Router();

routes.get("/directors", DirectorController.listarDirectors);
routes.get("/directors/:id", DirectorController.listarDirectorPorId);
routes.post("/directors", DirectorController.cadastrarDirector);
routes.put("/directors/:id", DirectorController.atualizarDirector);
routes.delete("/directors/:id", DirectorController.excluirDirector);

export default routes;