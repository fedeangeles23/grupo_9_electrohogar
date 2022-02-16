let express = require('express')
let router = express.Router()
let controller = require('../controllers/usersController');
const { single } = require('../middlewares/uploadAvatar');
const uploadFile = require('../middlewares/uploadAvatar');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');




// Muestra el login
router.get('/login', controller.login);
// POST - Recibe datos del login
router.post('/login', loginValidator ,controller.processLogin)


// Muestra el registro
router.get('/registro', controller.registro);
// POST - Recibe datos del registro
router.post('/registro',registerValidator, controller.processRegistro)

router.get('/logout', controller.logout)


router.get('/perfil',controller.perfil)

router.get('/loginGoogle', controller.loginGoogle);



module.exports = router;

