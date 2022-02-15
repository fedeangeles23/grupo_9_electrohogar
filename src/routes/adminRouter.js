let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')
let productFormValidator = require('../middlewares/ProductFormValidator')
const userSessionCheck = require('../middlewares/userSessionCheck')


//Las rutas llevan /admin/produ... al inicio

router.get('/', userSessionCheck , controller.dashboard) // Envia los datos


/* Crear productos */
router.get('/products/create', userSessionCheck, controller.create) // Envia los datos

router.post('/products/create',  upload.single('image'), productFormValidator, controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id', userSessionCheck,  controller.edit);

router.put('/products/detail/:id', userSessionCheck, controller.update);

 
/* Eliminar productos */

router.delete('/products/detail/:id', userSessionCheck, controller.del);

/* AdminCheck NO TE OLVIDES JOAQUIN AAAAAAAAAAAAAAAAAA */


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

