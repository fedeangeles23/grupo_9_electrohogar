let fs = require('fs')
let {
    validationResult
} = require('express-validator')

const db = require('../database/models');

const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;
const ProductImage = db.ProductImage



let controller = {

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
            let products = Products.findAll
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
                        ProductImages.create({
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
                    }
                })
                .catch(error => console.log(error))
            res.redirect('/admin/products')

               

                    },

                    del: (req, res) => {
/* 
                        Products.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                        ProductImage.findAll({
                            where : {
                                productId: req.params.id,
                            }
                        })
                        .then((image) => {
                         images.forEach((image) => {
                             fs.existsSyncs('./public/images/productsDB/', image.image)
                              ? fs.unlinkSync(`'./public/images/productsDB/${image.image}`)
                               : console.log(' No se encontro el archivo')
                         }
                        )}).then()
                        .catch(error => console.log(error)) */

                    }
                };

                module.exports = controller