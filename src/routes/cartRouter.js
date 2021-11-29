let express = require('express')
let router = express.Router()
let controller = require('../controllers/carritoController')

router.get('/', controller.carrito);

module.exports = router
