let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/homeController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/', controller.home) // buscamos en el objeto controller el HOME
router.get('/products', controller.products) // Va hacia la ruta /products y consume el controlador products para mostrar todos los productos en la DB
router.get('/products/detail/:id', controller.detail) // 

/* Crear productos */
router.get('/create', controller.create) // Envia los datos
 router.post('/products', controller.store) //  Recibe los datos





// GET - Detalle de productos
/* router.get('/detallproducts/:id', controller.productdetail)
 */


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.