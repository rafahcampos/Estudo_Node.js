import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    idade: { type: Number },
    nacionalidade: { type: String },
}, { versionKey: false });

const director = mongoose.model("directors", directorSchema);

export {director, directorSchema};