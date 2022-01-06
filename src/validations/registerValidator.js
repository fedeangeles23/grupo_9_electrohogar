const { check, body } = require('express-validator');
const { users } = require('../data/users.json')
 
/* 
const fs = require('fs');
const path = require('path');
let dbroute = path.join(__dirname, '../data/users.json')
let users = JSON.parse(fs.readFileSync(dbroute, 'utf-8')) */

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

   /*  body('email').custom((value) => {
       let user = users.find(user=>{ 
            return user.email == value 
        })
        if(user){
            return false
        }else{
            return true
        }
    }).withMessage('Email ya registrado'), */

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

]