let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')
const upload = require('../middlewares/uploadProductFiles')


//se requiere el middleware
let userAdminCheck = require('../middlewares/userAdminCheck')


/* Crear productos */
router.get('/products/create', userAdminCheck , controller.create) // Envia los datos
router.post('/products',  upload.single('imagen'), controller.store) //  Recibe los datos


/* Editar productos */

router.get('/products/edit/:id', controller.edit);
router.put('/products/detail/:id', controller.update);

 
/* Eliminar productos */

router.delete('/products/delete/:id', controller.del);


module.exports = router // Exportamos el let router

// Esta es la estructura principal del routes en nuestro proyecto

// Con esto creamos el enrutador, 1 para detalle de prod, otra para carrito, etc.

