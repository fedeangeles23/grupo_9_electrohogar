let express = require('express')
let router = express.Router()
let controller = require('../controllers/productController.js')
const userSessionCheck = require('../middlewares/userSessionCheck')


// Product detail
router.get('/detail/:id', controller.detail)
 
// Categorias 
router.get('/category/:id', controller.category)

// Subcategorias 
router.get('/subcategory/:subcategory/:categoryId', controller.subcategory)

// Search products
router.get('/search', controller.search)

// Carrito
router.get('/carrito', userSessionCheck, controller.carrito)

// Medio de pago
router.get('/medioDePago', controller.medioDePago)



/* GET - Search products */
router.get('/search', controller.search) 

/* router.get('/gaming', controller.gaming) // 
 */
/* GET - Search products */
/* router.get('/search', controller.search) 
 */

module.exports = router;