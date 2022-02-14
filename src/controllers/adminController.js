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

        Promise.all([allCategories, allSubcategories])
            .then(([categories, subcategories]) => {
                res.render('admin/createProd', {
                    categories,
                    subcategories,
                    session: req.session
                })
            })

        },
    store: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            const { name, price, subcategory, description, discount } = req.body
            Products.create({
                name,
                price,
                description,
                discount,
                subcategoryId: subcategory,
            })
                .then((product) => {
                    ProductImages.create({
                        image: req.file ? req.file.filename : 'default-image.png',
                        productId: product.id
                    })
                        .then(() => {
                            res.redirect('admin/adminSettings')
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
                        
                        subcategories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session
                    })
                })
        }

    },


    edit: (req, res) => {
        let productId = +req.params.id
        let productToEdit = products.find(product => product.id === productId)

        res.render('admin/editProd', {
            product: productToEdit,
            session: req.session
        })
    },

    update: (req, res) => {
      /*   let productId = +req.params.id

        const { nombre, precio, imagen, descripcion, categoria, marca } = req.body

        products.forEach(product => {

            if (product.id === productId) {
                product.id = product.id,
                    product.nombre = nombre,
                    product.precio = precio,
                    product.descripcion = descripcion,
                    product.categoria = categoria,
                    product.marca = marca,
                    product.imagen = req.file ? req.file.filename : product.imagen
            }

        })

        writeJson(products)

        res.redirect('/') */

    },

    del: (req, res) => {
        /* let productId = +req.params.id;

        products.forEach(product => {
            if (product.id === productId) {
                let productDestroyI = products.indexOf(product)
                productDestroyI !== -1 ?
                    products.splice(productDestroyI, 1)
                    : console.log('No encontre el producto chee')
            }
        })

        writeJson(products)
         res.redirect("/") */
 
    },

    /* Perfil admin */

   

};

module.exports = controller

const express = require('express');
const router = express.Router();
