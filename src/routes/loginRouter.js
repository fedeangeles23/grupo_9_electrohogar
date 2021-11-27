let express = require('express')
let router = express.Router()

let controller = require('../controllers/usersController')
router.get('/', controller.login);

module.exports = router