const express = require('express');
const cors = require('cors');
const dependenteRoutes = require('./routes/dependente.routes');
const pessoaRoutes = require('./routes/pessoa.routes');
const calendarioRoutes = require('./routes/calendario.routes');
const vacinaRoutes = require('./routes/vacina.routes');
const notificacaoRoutes = require('./routes/notificacao.routes');
const connetcDataBase = require('./database/db')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/dependentes', dependenteRoutes);
app.use('/pessoas', pessoaRoutes);
app.use('/calendario', calendarioRoutes);
app.use('/vacinas', vacinaRoutes);
app.use('/notificacao', notificacaoRoutes);


connetcDataBase()

app.get('/', (req, res) => {
  res.send('API do Calendário de Vacinas funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});