let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/homeController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/', controller.home) // buscamos en el objeto controller el HOME


/*  Footer vistas  */
router.get('/sobre-nosotros', controller.sobreNosotros) // 
router.get('/preguntas-frecuentes', controller.preguntasFrecuentes) // 
router.get('/terminos-y-condiciones', controller.terminosYcondiciones) // 
router.get('/trabaja-con-nosotros', controller.trabajaConNosotros) // 
router.get('/boton-de-arrepentimiento', controller.botonDeArrepentimiento) //

 




module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.