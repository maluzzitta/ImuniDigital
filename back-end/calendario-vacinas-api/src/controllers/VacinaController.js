const Vacina = require('../models/VacinaModel');

const registrarVacina = async (req, res) => {
    const { usuario_id, nome_vacina, data_aplicacao, dose } = req.body;

    if (!usuario_id || !nome_vacina || !data_aplicacao) {
      return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    try {
      const novaVacina = new Vacina({ usuario_id, nome_vacina, data_aplicacao, dose });
      const salva = await novaVacina.save();
      res.status(201).json({ mensagem: 'Vacina registrada com sucesso.', vacina: salva });
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao registrar vacina.', erro });
    }
  }

const consultarVacinas = async (req, res) => {
    const { id_usuario } = req.params;

    try {
      const vacinasUsuario = await Vacina.find({ usuario_id: id_usuario });
      res.status(200).json(vacinasUsuario);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao buscar vacinas.', erro });
    }
  }

const atualizarVacina = async (req, res) => {
    const { id } = req.params;
    const { nome_vacina, data_aplicacao, dose } = req.body;

    try {
      const vacinaAtualizada = await Vacina.findByIdAndUpdate(
        id,
        { nome_vacina, data_aplicacao, dose },
        { new: true }
      );

      if (!vacinaAtualizada) {
        return res.status(404).json({ mensagem: 'Vacina não encontrada.' });
      }

      res.status(200).json({ mensagem: 'Vacina atualizada com sucesso.', vacina: vacinaAtualizada });
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao atualizar vacina.', erro });
    }
  }
  
const deletarVacina = async (req, res) => {
    const { id } = req.params;

    try {
      const vacinaDeletada = await Vacina.findByIdAndDelete(id);

      if (!vacinaDeletada) {
        return res.status(404).json({ mensagem: 'Vacina não encontrada.' });
      }

      res.status(200).json({ mensagem: 'Vacina deletada com sucesso.' });
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao deletar vacina.', erro });
    }
  };

module.exports = {
  registrarVacina,
  consultarVacinas,
  atualizarVacina,
  deletarVacina
};