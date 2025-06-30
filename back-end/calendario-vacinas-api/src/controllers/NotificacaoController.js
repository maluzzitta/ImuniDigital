const dependentes = require('../routes/dependente.routes'); //precisa de banco de dados para funcionar


const consultarProximaVacina = (req, res) => {
  const { usuario_id } = req.params;


  const dependente = dependentes.find(dep => dep.id == usuario_id);


  if (!dependente) {
    return res.status(404).json({ mensagem: 'Dependente não encontrado.' });
  }


  const proxima = verificarProximaVacina(dependente.data_nascimento);


  if (!proxima) {
    return res.status(200).json({ mensagem: 'Não há mais vacinas previstas.' });
  }


  res.status(200).json({
    mensagem: `Próxima(s) vacina(s) prevista(s) para ${dependente.nome} aos ${proxima.idade} mês(es):`,
    vacinas: proxima.vacinas
  });
};


module.exports = {
  consultarProximaVacina
};