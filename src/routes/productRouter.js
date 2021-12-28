let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController.js')



router.get('/detail/:id', controller.detail)
 // 
router.get('/gaming', controller.gaming) // 



module.exports = router;