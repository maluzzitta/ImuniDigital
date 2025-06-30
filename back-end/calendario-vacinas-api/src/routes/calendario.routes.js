const express = require('express');
const router = express.Router();
const calendarioVacinal = require('../utils/calendarioVacinal');

router.get('/', (req, res) => {
  res.status(200).json(calendarioVacinal);
});

module.exports = router;