let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController')


router.get('/', controller.detail)

router.get('/products/detail/:id', controller.detail) // 


module.exports = router;