import mongoose from "mongoose";
import { directorSchema } from "./Director.js";

const gameSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    studio: { type: String },
    preco: { type: Number },
    avaliacoes: { type: Number },
    director: directorSchema
}, { versionKey: false });

const games = mongoose.model("games", gameSchema);

export default games;