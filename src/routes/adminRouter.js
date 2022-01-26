let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')
const AdminCheck = require('../middlewares/AdminCheck')


//Las rutas llevan /admin/produ... al inicio

/* Crear productos */
router.get('/products/create', AdminCheck , controller.create) // Envia los datos
router.post('/products',  upload.single('imagen'), controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id', AdminCheck, controller.edit);
router.put('/products/detail/:id', controller.update);

 
/* Eliminar productos */

router.delete('/products/detail/:id', AdminCheck, controller.del);


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

