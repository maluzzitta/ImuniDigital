const mongoose = require('mongoose');

const NotificacaoSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  },
  dependent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dependent',
    default: null
  },
  vaccine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vaccine',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pendente', 'enviada', 'erro'],
    default: 'pendente'
  },
  scheduledFor: { //próxima vacina
    type: Date,
    required: true
  },
  sentAt: { //quando vai ser enviada
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notificacao', NotificacaoSchema);