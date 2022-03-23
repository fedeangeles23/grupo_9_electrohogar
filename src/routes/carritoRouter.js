const express = require('express');
const router = express.Router();

const {show, add} = require('../controllers/carritoController')

// '/carrito
router.get('/', show)
      .post('/:id', add)

      module.exports = router;