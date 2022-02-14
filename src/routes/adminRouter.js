let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')
const AdminCheck = require('../middlewares/AdminCheck')
let productFormValidator = require('../middlewares/ProductFormValidator')


//Las rutas llevan /admin/produ... al inicio

router.get('/', controller.dashboard) // Envia los datos


/* Crear productos */
router.get('/products/create', controller.create) // Envia los datos

router.post('/products/store',  upload.single('imagen'), productFormValidator, controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id', AdminCheck, controller.edit);
router.put('/products/detail/:id', controller.update);

 
/* Eliminar productos */

router.delete('/products/detail/:id', AdminCheck, controller.del);


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

