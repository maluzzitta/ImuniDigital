const express = require('express');
const router = express.Router();
const vacinaController = require('../controllers/VacinaController');

router.post('/', vacinaController.registrarVacina);
router.get('/:id_usuario', vacinaController.consultarVacinas);
router.put('/:id', vacinaController.atualizarVacina);
router.delete('/:id', vacinaController.deletarVacina);

module.exports = router;