//let { products, writeProductsJSON, categories } = require('../database/dataBase')
let fs = require('fs')
//let subcategories = products.map(product => product.subcategory)
// let uniqueSubcategories = subcategories.filter((x, i, a) => a.indexOf(x) == i)
let { validationResult } = require('express-validator')

const db = require('../database/models');

const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;
const ProductImages = db.ProductImage



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
            const { name, price, subcategory, description, discount, brand, cuotes } = req.body
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
        const productPromise = Products.findByPk(req.params.id);
        const categoriesPromise = Categories.findAll();
        const subcategoriesPromise = Subcategories.findAll();

        
        let product = products.find(product => product.id === productId)
        res.render('admin/editProd', {
            Products,
            product,
            categories,
            session: req.session
        })
        .catch(error => console.log(error))

    },

    update: (req, res) => {
        
            const { name, price, category, subcategory, description, discount } = req.body
    
            Products.update({
                name,
                price,
                description,
                discount,
                subcategoryId: subcategory,
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
                        .then((images) => {
                            images.forEach((image) => 
                            fs.existsSyncs('./public/images/productos/', image.image)
                            ? fs.unlinkSync(`'./public/images/productos/${image.image}`)
                            : console.log(' No se encontro el archivo')
                        )})
                        ProductImages.destroy({
                            where: {
                                productId: req.params.id
                            }
                        })
                    }
                })
    
            res.redirect('/admin')

    },

    del: (req, res) => {
        {
            ProductImages.findAll({
                where : {
                    productId: req.params.id,
                }
            })
            .then((image) => {
             images.forEach((image) => {
                 fs.existsSyncs('./public/images/productos/', image.image)
                  ? fs.unlinkSync(`'./public/images/productos/${image.image}`)
                   : console.log(' No se encontro el archivo')
             }
            )}).then()
     
     }
 
    },

    /* Perfil admin */

   

};

module.exports = controller
