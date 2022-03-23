let { check, body } = require('express-validator')
const db = require('../database/models')
const Users = db.User 
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

  
    body('custom')
        .custom((value, {req}) => {
           return Users.findOne({
               where: {
                   email: req.body.email
               }
           })
           .then(user => {
               // Que compare la pass del body con la pass del usuario
               if(!bcrypt.compareSync(req.body.pass1, user.dataValues.pass)){
                   return Promise.reject("Credenciales incorrectas")
               }
           })
           .catch(() => {
               return Promise.reject("Credenciales incorrectas")
           })

        }) 
      ]
