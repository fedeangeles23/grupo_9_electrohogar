let express = require('express')
let router = express.Router()
let controller = require('../controllers/perfilController')


router.get('/', controller.perfil)

module.exports = router;