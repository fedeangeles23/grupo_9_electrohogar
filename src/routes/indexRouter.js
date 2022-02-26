let express = require('express') //Llamamos express y enrutador
let router = express.Router() //Ejecutamos el metodo router de express
let controller = require('../controllers/indexController.js') // Requerimos el controlador para utilizarlo con router.get


// GET - Listado de productos
router.get('/index', controller.index) // buscamos en el objeto controller el HOME


module.exports = router