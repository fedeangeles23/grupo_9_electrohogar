let express = require('express')
let router = express.Router()
let controller = require('../controllers/cartController.js')

router.get('/', controller.carrito);

module.exports = router