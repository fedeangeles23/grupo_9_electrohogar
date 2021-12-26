let express = require('express')
let router = express.Router()
let controller = require('../controllers/usersController')


router.get('/perfil', controller.perfil)
router.get('/login', controller.login);
router.get('/registro', controller.registro);

module.exports = router;