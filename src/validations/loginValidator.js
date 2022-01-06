let { check } = require('express-validator')



module.exports = [ 
    check('email')
    .notEmpty()
    .withMessage("Ingresa un email").bail()
    .isEmail()
    .withMessage("Ingresa un email valido"),

    check('pass1')
    .notEmpty()
    .withMessage("Debes escribir la contraseña")
]
