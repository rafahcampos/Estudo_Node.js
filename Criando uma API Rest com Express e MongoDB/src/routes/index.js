import express from "express";
import games from "./gamesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), games);
};

export default routes;
