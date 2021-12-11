let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/homeController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/', controller.home) // buscamos en el objeto controller el HOME



// GET - Detalle de productos
/* router.get('/detallproducts/:id', controller.productdetail)
 */


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.