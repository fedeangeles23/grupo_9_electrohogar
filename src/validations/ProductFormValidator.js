const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 4, max: 50 })
    .withMessage('El nombre tiene que tener entre 4 y 50 caracteres'),

    check('brand')
    .notEmpty()
    .withMessage('El campo marca es obligatorio').bail()
    .isLength({ min: 1, max: 50 })
    .withMessage('Ingresa una marca'),

    check('category')
    .notEmpty()
    .withMessage('Debes elegir una categoría'),

    check('subcategory')
    .notEmpty()
    .withMessage('Debes elegir una subcategoría'),

    check('price')
    .notEmpty()
    .withMessage('Debes ingresar un precio').bail()
    .isNumeric()
    .withMessage('Sólo números'),

    check('discount')
    .isNumeric()
    .withMessage('Sólo números'),

    check('description')
    .isLength({ max: 5000 })
    .withMessage('El nombre tiene que tener hasta 5000 caracteres')
]