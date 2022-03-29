let express = require('express')
let router = express.Router()
let controller = require('../controllers/usersController');
const { single } = require('../middlewares/uploadAvatar');
const uploadFile = require('../middlewares/uploadAvatar');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let userSessionCheck = require('../middlewares/userSessionCheck')
let cookie = require('../middlewares/cookie')


//Rutas comienzan desde /user

// Muestra el login
router.get('/login', controller.login);
// POST - Recibe datos del login
router.post('/login', loginValidator, cookie , controller.processLogin)


// Muestra el registro
router.get('/registro', controller.registro);
// POST - Recibe datos del registro
router.post('/registro',registerValidator, controller.processRegistro)

router.get('/logout', controller.logout)


/* Seccion perfil CRUD */
//Users/perfil
router.get('/perfil', userSessionCheck ,controller.perfil)

router.get('/perfil/edit', userSessionCheck ,controller.editProfile)

router.post('/perfil/edit', userSessionCheck, controller.editProfilePost)



router.get('/loginGoogle', controller.loginGoogle);


/* Chat */ //Users/chat
router.get('/chat', controller.chat)


module.exports = router;

