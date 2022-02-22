const { check, body } = require('express-validator');
const db = require('../database/models')

const Users = db.User 

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

    body('email').custom((value) => {
        return Users.findOne({
            where: {
                email: value,
            }
        })
        .then((user) => {
            if(user){
                return Promise.reject('Email ya registrado')
            }
        })
    }), 

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 5,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 5 y 12 caracteres'),


    check('pass2')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),



]