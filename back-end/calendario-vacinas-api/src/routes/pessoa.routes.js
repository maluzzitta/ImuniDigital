const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController');

// Rota para cadastrar pessoa
router.post('/', PessoaController.cadastrarPessoa);

module.exports = router;