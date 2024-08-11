import mongoose from "mongoose";


mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "",
    message: ({path})=> `O campos ${path} foi fornecido em branco.`
});

//definir propriedade para todos os campos string no modelo
//path : define o nome do campo a ser validado