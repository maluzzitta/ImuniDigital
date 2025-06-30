const Dependente = require('../models/DependenteModel');
const DependenteModel = require('../models/DependenteModel');
const PessoaModel = require ('../models/PessoaModel');

module.exports = {
  criar : async (req, res) => { 
    const { nome, data_nascimento, parentesco, pessoa_id } = req.body;

    if (!nome || !data_nascimento || !parentesco || !pessoa_id) {
      return res.status(400).json({ mensagem: 'Nome, data de nascimento e parentesco são obrigatórios.' });
    }

    const pessoa = await PessoaModel.findById(pessoa_id);
    if (!pessoa) {
      return res.status(404).json({ mensagem: 'Pessoa responsável não encontrada.' });
    }

    try {
      const dependente = new DependenteModel({
        nome,
        data_nascimento,
        parentesco,
        pessoa: pessoa._id
      });

      const dependenteSalvo = await dependente.save(); // salva no MongoDB

      return res.status(201).json(dependenteSalvo); // retorna o que foi salvo no banco
    } catch (erro) {
      return res.status(500).json({ mensagem: 'Erro ao salvar dependente', erro });
    }
  },
  consultar : async (req, res) => {
      const dependentes = await DependenteModel.find({})

      return res.status(201).json(dependentes);
  }
};