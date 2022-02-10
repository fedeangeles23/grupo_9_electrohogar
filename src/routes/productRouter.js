let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController.js')


// Product detail
router.get('/detail/:id', controller.detail)
 
// Categorias 
router.get('/category/:id', controller.category)

// Subcategorias 
router.get('/subcategory/:subcategory/:categoryId', controller.subcategory)

// Search products
router.get('/search', controller.search)




/* router.get('/gaming', controller.gaming) // 
 */
/* GET - Search products */
/* router.get('/search', controller.search) 
 */
module.exports = router;