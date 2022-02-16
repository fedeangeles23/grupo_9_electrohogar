let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')
let productFormValidator = require('../middlewares/ProductFormValidator')
const userSessionCheck = require('../middlewares/userSessionCheck')


//Las rutas llevan /admin/produ... al inicio

router.get('/',  controller.indexAdmin) // Envia los datos


router.get('/products',  controller.dashboard) // Envia los datos


/* Crear productos */
router.get('/products/create',  controller.create) // Envia los datos

router.post('/products/create',  upload.array('image'), productFormValidator, controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id', controller.edit);

router.put('/products/edit/:id', upload.array('image'), controller.update);

 
/* Eliminar productos */

router.delete('/products/:id', controller.del);

/* AdminCheck NO TE OLVIDES JOAQUIN AAAAAAAAAAAAAAAAAA 
Pasar userSessionCheck
*/


module.exports = router 
// Esta es la estructura principal del routes en nuestro proyecto, con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

