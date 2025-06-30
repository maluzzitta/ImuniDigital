const mongoose = require ('mongoose');
const { Schema } = mongoose;

const vacinaSchema = new Schema({
  usuario_id: { type: Schema.Types.ObjectId, ref: 'Pessoa', required: true },
  usuario_id: { type: Schema.Types.ObjectId, ref: 'Dependente', required: true },
  nome_vacina: String, 
  data_aplicação: { type: Date, default: Date.now },
  dose: String
});

const Vacina = mongoose.model('Vacina', vacinaSchema);
module.exports = Vacina