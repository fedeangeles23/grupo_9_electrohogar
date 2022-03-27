let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/homeController.js') 
let loginValidator = require('../validations/loginValidator');



router.get('/', controller.home) /


/*  Footer vistas  */
router.get('/sobre-nosotros', controller.sobreNosotros) // 
router.get('/preguntas-frecuentes', controller.preguntasFrecuentes) // 
router.get('/terminos-y-condiciones', controller.terminosYcondiciones) // 
router.get('/trabaja-con-nosotros', controller.trabajaConNosotros) // 
router.get('/boton-de-arrepentimiento', controller.botonDeArrepentimiento) //
router.get('/politica-y-privacidad', controller.politicaYprivacidad) //
router.get('/contacto', controller.contacto) //
router.get('/ventana', controller.ventana) //

/* Nodemailer - Email de subscripcion */
router.post('/send-email', loginValidator, controller.emailSubscripcion)



module.exports = router 

