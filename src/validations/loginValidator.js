let { check, body } = require('express-validator')
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");

module.exports = [ 
    check('email')
    .notEmpty()
    .withMessage("Ingresa un email").bail()
    .isEmail()
    .withMessage("Ingresa un email valido"),

    check('pass1')
    .notEmpty()
    .withMessage("Debes escribir la contraseña"),

  
    body('pass1')
        .custom((value, {req}) => {
            let user = users.find(user => user.email == req.body.email);
            if(user){
                if(user.pass === req.body.pass1){ 
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }

        }).withMessage('Credenciales inválidas') 

]
