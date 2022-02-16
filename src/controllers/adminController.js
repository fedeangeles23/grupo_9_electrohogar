let fs = require('fs')
let {
    validationResult
} = require('express-validator')

const db = require('../database/models');

const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;
const ProductImage = db.ProductImage
const Users = db.User


let controller = {

    indexAdmin: (req, res) => {
        Users.findAll()
            .then(user => {
                res.render('admin/adminSettingsIndex', {
                    user,
                    session: req.session
                })
            })
    },

    dashboard: (req, res) => {
        Products.findAll()
            .then(products => {
                res.render('admin/adminSettings', {
                    products,
                    session: req.session
                })
            })

    },


    create: (req, res) => {
        let allCategories = Categories.findAll()
        let allSubcategories = Subcategories.findAll()
        let products = Products.findAll()
        Promise.all([allCategories, allSubcategories, products])
            .then(([categories, subcategories, products]) => {
                res.render('admin/createProd', {
                    categories,
                    products,
                    subcategories,
                    session: req.session
                })
            })

    },
    store: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const {
                name,
                price,
                subcategory,
                description,
                discount,
                brand,
                cuotes
            } = req.body
            Products.create({
                    name,
                    price,
                    description,
                    discount,
                    brand,
                    cuotes,
                    subcategoryId: subcategory,
                })
                .then((product) => {
                    ProductImage.create({
                            image: req.file ? req.file.filename : 'default-image.png',
                            productId: product.id
                        })
                        .then(() => {
                            res.send('falta la fotito chabon xD')
                        })
                })
                .catch(error => console.log(error))
        } else {
            let allCategories = Categories.findAll();
            let allSubcategories = Subcategories.findAll();
            Promise.all([allCategories, allSubcategories])
                .then(([categories, subcategories]) => {
                    res.render('admin/adminSettings', {
                        categories,
                        Products,
                        products,
                        subcategories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session
                    })
                })
        }

    },


    edit: (req, res) => {

        let allCategories = Categories.findAll()
        let allSubcategories = Subcategories.findAll()
        let products = Products.findByPk(req.params.id)
        Promise.all([allCategories, allSubcategories, products])
            .then(([categories, subcategories, product]) => {
                res.render('admin/editProd', {
                    categories,
                    product,
                    subcategories,
                    session: req.session
                })
            })
    },

    update: (req, res) => {
        // No guarda la categoria ni subcategoria, tampoco la imagen a actualizar

        Products.update({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                discount: req.body.discount,
                brand: req.body.brand,
                cuotes: req.body.cuotes,
                subcategoryId: req.params.subcategory,
            }, {
                where: {
                    id: req.params.id
                }

            })
            .then((result) => {
                res.send(result)
                if (result) {
                    ProductImage.findAll({
                        where: {
                            productId: req.params.id
                        }
                    })
                    ProductImage.destroy({
                            where: {
                                productId: req.params.id
                            }
                        })
                        .then(() => {
                            ProductImage.create({
                                    image: req.file ? req.file.filename : 'default-image.png',
                                    productId: req.params.id
                                })
                                .then(() => res.redirect('/admin/products'))
                        })
                }
            })


            .catch(error => console.log(error))

        res.redirect('/admin/products')

    },

    del: (req, res) => 
        ProductImage.findAll({
            where: {
                productId: req.params.id,
            }
        })
        .then((images) => {
             images.forEach((image) => {
                 fs.existsSync('../../public/images/productsDB/', image.image)
                 ? fs.unlinkSync(`../../public/images/productsDB/${image.image}`)
                 : console.log('No se encontró el archivo')
             })
             ProductImage.destroy({
                 where: {
                     productId: req.params.id
                 }
             })
             .then((result) => {
                 Products.destroy({
                     where: {
                         id: req.params.id
                     }
                 })
                 .then(res.redirect('/admin/products'))
                 .catch(error => console.log(error))
             })
             .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
     
 
};

module.exports = controller