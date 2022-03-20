let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')
let productFormValidator = require('../validations/ProductFormValidator')
const userSessionCheck = require('../middlewares/userSessionCheck')
const userAdminCheck = require('../middlewares/userAdminCheck')


//Las rutas llevan /admin/produ... al inicio

router.get('/', userAdminCheck, controller.indexAdmin) // Envia los datos


router.get('/products',  userAdminCheck, controller.dashboardProducts) 

/* Usuarios CRUD */
router.get('/users', userAdminCheck, controller.dashboardUsers) // 



/* Crear productos */
router.get('/products/create',  userAdminCheck, controller.create) // Envia los datos

router.post('/products/create',  userAdminCheck, upload.array('image'), productFormValidator, controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id',userAdminCheck, controller.edit);

router.put('/products/edit/:id', userAdminCheck, upload.array('image'), controller.update);

 
/* Eliminar productos */

router.delete('/products/:id', controller.del);

// Pasar userSessionCheck



module.exports = router 
// Esta es la estructura principal del routes en nuestro proyecto, con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

