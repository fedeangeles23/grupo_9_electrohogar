let express = require('express')
let router = express.Router()
let controller = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');



// Muestra el login
router.get('/login', controller.login);
// POST - Recibe datos del login
router.post('/login', loginValidator ,controller.processLogin)


// Muestra el registro
router.get('/registro', controller.registro);
// POST - Recibe datos del registro
router.post('/registro', controller.processLogin)



router.get('/perfil', controller.perfil)


module.exports = router;

