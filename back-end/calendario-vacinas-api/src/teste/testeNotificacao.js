const mongoose = require('mongoose');
const NotificacaoModel = require('../models/NotificacaoModel');
const MONGO_URI = 'mongodb+srv://malumoscardo:malumsc090625@cluster0.znoywdy.mongodb.net/ImuniDigital?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro ao conectar:', err));

async function testarNotificacao() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const notificacao = new NotificacaoModel ({
      person: '685015f5cbfc17e5f29ba47c', //id do banco
      dependent: null, // objectId de dependente
      vaccine: '6860954361e1b83666ca7b58', //id do banco
      email: 'malu.moscardo@gmail.com',
      subject: 'Vacina próxima!',
      message: 'Olá! Sua próxima vacina está agendada.',
      scheduledFor: new Date('2025-06-30T01:00:00Z')
    });

    await notificacao.save();
    console.log('Notificação criada com sucesso!');
    console.log(notificacao);

    // consulta as notificações
    const notificacoes = await NotificacaoModel.find();
    console.log('Todas as notificações:', notificacoes);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Erro ao testar notificação:', error);
    mongoose.disconnect();
  }
}

testarNotificacao();