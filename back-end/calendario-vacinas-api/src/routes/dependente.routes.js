const express = require('express');
const router = express.Router();
const DependenteController = require('../controllers/DependenteController');

router.post('/', DependenteController.criar);
router.get('/', DependenteController.consultar);

module.exports = router;