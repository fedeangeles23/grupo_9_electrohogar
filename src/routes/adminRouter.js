let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')

router.get('/', controller.editprod);

module.exports = router