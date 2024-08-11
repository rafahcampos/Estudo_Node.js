import mongoose from "mongoose"

mongoose.connect(process.env.STRING_CONEXAO_BD);

let db = mongoose.connection;

export default db;

//mongodb+srv://admin:admin2024@cluster0.lv4hvxu.mongodb.net/lanhouse?retryWrites=true&w=majority&appName=Cluster0