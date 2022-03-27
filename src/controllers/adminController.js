let fs = require('fs')
let { validationResult } = require('express-validator')

const db = require('../database/models');

const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;
const ProductImage = db.ProductImage
const Users = db.User


let controller = {
/* Inicio panel admin */
    indexAdmin: (req, res) => {
        Users.findAll()
            .then(user => {
                res.render('admin/adminSettingsIndex', {
                    user,
                    session: req.session
                })
            })
    },
/* Crud usuarios */
    dashboardUsers: (req, res) => {
        Users.findAll()
            .then(user => {
                res.render('admin/adminUserIndex', {
                    user,
                    session: req.session
                })
            })
    },



    /* End crud usuarios */

    dashboardProducts: (req, res) => {
        Products.findAll({
             order:[ 
                 ['updatedAt', 'DESC']
            ]})
            .then(products => {
                res.render('admin/adminSettings', {
                    products,
                    session: req.session
                })
            })
            .catch(error => console.log(error))

    },

    searchAdmin: (req, res) => {
        Products.findAll({
                where: {
                    name: {
                        [Op.substring]: req.query.keywords
                    }
                },
                include: [{
                    association: 'productImages'
                }]
            })
            .then((result) => {
                res.render('admin/adminSettings', {
                    result,
                    search: req.query.keywords,
                    session: req.session
                })
            })

    },


    
/* Fin panel admin */

/* ---- CRUD --- */

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
        console.log(errors)
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
                            console.log(req.file)
                            return res.redirect('/admin/products')
                        })
                })
                .catch(error => console.log(error))
        } else {
            errors = errors.mapped()
            if(req.fileValidationError) {
                //console.log(req.fileValidationError)
                errors = {
                    ...errors,
                    image : {
                        msg: req.fileValidationError
                    }
                }
            }
            let allCategories = Categories.findAll();
            let allSubcategories = Subcategories.findAll();
            let allProducts = Products.findAll()
            Promise.all([allCategories, allSubcategories, allProducts])
                .then(([categories, subcategories, products]) => {
                    res.render('admin/createProd', {
                        categories,
                        Products,
                        products,
                        subcategories,
                        errors,
                        old: req.body,
                        session: req.session
                    })
                })
        }

    },


    edit: (req, res) => {

        let allCategories = Categories.findAll()
        let allSubcategories = Subcategories.findAll()
        let products = Products.findByPk(req.params.id, {
            include:[{
                association:"subcategories"
            }]
        })
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
        let errors = validationResult(req)
        if(errors.isEmpty()) {
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
                                .catch(error => console.log(error))

                        })
                }
            })


            .catch(error => console.log(error))

        res.redirect('/admin/products')
        }else {
            errors = errors.mapped()
            if(req.fileValidationError) {
                //console.log(req.fileValidationError)
                errors = {
                    ...errors,
                    image : {
                        msg: req.fileValidationError
                    }
                }
            }

            let allCategories = Categories.findAll()
            let allSubcategories = Subcategories.findAll()
            let products = Products.findByPk(req.params.id)
            Promise.all([allCategories, allSubcategories, products])
                .then(([categories, subcategories, product]) => {
                    res.render('admin/editProd', {
                        categories,
                        product,
                        subcategories,
                        old: req.body,
                        errors,
                        session: req.session
                    })
                })
        }
        // No guarda la categoria ni subcategoria, tampoco la imagen a actualizar
        console.log(req.file)
        
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