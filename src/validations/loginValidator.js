let { check, body } = require('express-validator')
const fs = require('fs');
const path = require('path');
let dbroute = path.join(__dirname, '../data/users.json')
let users = JSON.parse(fs.readFileSync(dbroute, 'utf-8'))

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
            console.log(req.body)
            console.log(user)
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
