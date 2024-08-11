import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: [true, "O título do livro é obrigtório"] },
    autor: {
      type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, "O autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora do livro é obrigtória"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor per,mitido"
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido:{VALUE}."
      }
    }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;







//enum -> indica valores especificos
/* numeroPaginas: {
      type: Number,
      min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido{VALUE}"], max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}"]
    }*/ 
   //Podemos até chamar uma biblioteca dentro deste objeto para passar as regras de validação, como a de cpf