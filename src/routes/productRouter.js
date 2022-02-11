let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController.js')



router.get('/detail/:id', controller.detail)
 // 
router.get('/gaming', controller.gaming) // 

/* GET - Search products */
router.get('/search', controller.search) 

module.exports = router;