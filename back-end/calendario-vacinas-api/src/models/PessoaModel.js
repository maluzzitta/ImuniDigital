const mongoose = require ('mongoose');
const { Schema } = mongoose;

const pessoaSchema = new Schema({
  nome: String, 
  data_nascimento: { type: Date, default: Date.now },
  email: String,
  senha: String
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);
module.exports = Pessoa