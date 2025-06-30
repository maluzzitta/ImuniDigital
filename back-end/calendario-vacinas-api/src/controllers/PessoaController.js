const pessoas = [];
const PessoaModel = require('../models/PessoaModel');

const cadastrarPessoa = async (req, res) => { 
  const pessoa = new PessoaModel({
    nome: "Maria Luisa Moscardo",
    data_nascimento: new Date (),
    email: "malu.moscardo@gmail.com",
    senha:"250609"
  })
  await pessoa.save()
  const { nome, email, senha } = req.body;
 
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Nome, email e senha são obrigatórios' });
  }
 
  const novaPessoa = {
    id: Date.now (),
    nome,
    email,
    senha, // não salvar senha em texto
  };


  pessoas.push(novaPessoa);
 
  res.status(201).json({
    mensagem: 'Pessoa cadastrada com sucesso',
    pessoa: novaPessoa
  });
};  
module.exports = {
  cadastrarPessoa
};