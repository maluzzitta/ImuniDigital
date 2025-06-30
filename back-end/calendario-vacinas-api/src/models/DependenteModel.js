const mongoose = require ('mongoose');
const { Schema } = mongoose;

const dependenteSchema = new Schema({
  nome: String, 
  data_nascimento: { type: Date, default: Date.now },
  parentesco: String,
  pessoa: {type: mongoose.Schema.Types.ObjectId, ref: "Pessoa"}
});

const Dependente = mongoose.model('Dependente', dependenteSchema);
module.exports = Dependente