let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController')


router.get('/', controller.detail)

module.exports = router;