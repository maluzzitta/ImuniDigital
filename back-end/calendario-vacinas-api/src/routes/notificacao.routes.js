const express = require('express');
const router = express.Router();
const NotificacaoController = require('../controllers/NotificacaoController');


router.get('/proxima/:id_dependente', NotificacaoController.consultarProximaVacina);


module.exports = router;