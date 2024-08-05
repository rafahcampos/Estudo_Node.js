import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    studio: { type: String },
    preco: { type: Number },
    avaliacoes: { type: Number }
}, { versionKey: false });

const games = mongoose.model("lanhouse", gameSchema);

export default games;