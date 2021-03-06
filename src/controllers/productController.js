const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize')

const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;

let controller = {

    // Detalle de producto

    detail: (req, res) => {
        let productdetail = Products.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                all: true
            }]
        })

        let productRelated = Products.findAll({
            include: [{
                            association: 'productImages'
            }],
       /*      where: {
                categories: product.categories
            } */
        })

        Promise.all([productdetail, productRelated])

            .then(([productdetail, productRelated]) => {
                res.render('products/productDetail', {
                    productdetail,
                    productRelated,
                    Categories,
                    Subcategories,
                    session: req.session
                })
            })

            .catch(error => console.log(error));

    },


    //----------------------- Categorias ---------------------------//


    category: (req, res) => {
        Categories.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    association: 'subcategories',
                    include: [{
                        association: 'products',
                        include: [{
                            association: 'productImages'
                        }]
                    }]
                }]
            })
            .then((category) => {
                let subcategories = category.subcategories;
                let products = [];
                subcategories.forEach((subcategory) => {
                    subcategory.products.forEach((product) => {
                        products.push(product)
                    });
                });
                res.render('products/productsCategorys', {
                    products,
                    category,
                    subcategories,
                    session: req.session
                });
            })
            .catch(error => console.log(error))

    },


    subcategory: (req, res) => {
        Subcategories.findByPk(req.params.subcategory, {
                include: [{
                    association: 'products',
                    include: [{
                        association: 'productImages'
                    }]
                }]
            })
            .then((subcategory) => {
                Categories.findByPk(req.params.categoryId, {
                        include: [{
                            association: 'subcategories'
                        }]
                    })
                    .then((category) => {
                        res.render('products/productsCategorys', {
                            products: subcategory.products,
                            category,
                            subcategories: category.subcategories,
                            session: req.session
                        })

                    })
                    .catch(error => console.log(error))
            })
    },


    gaming: (req, res) => {
        //Filtrando productos que contengan la palabra "Gaming"
        let productsGaming = products.filter(product => product.categoria === "Gaming")

        res.render('products/home', {
            productsGaming,
            session: req.session
        })
    },


    search: (req, res) => {
        //trae los productos DONDE el NOMBRE sea req.query.keywords
        Products.findAll({
                where: {
                    name: {
                        [Op.substring]: req.query.keywords
                    }
                },
                // Y aparte, trae los productos con sus imagenes asociadas
                include: [{
                    association: 'productImages'
                }]
            })
            .then((result) => {
                console.log(req.query.keywords)
                res.render('products/searchResult', {
                    result,
                    search: req.query.keywords,
                    session: req.session
                })
            })

    },

    carrito: (req, res) => {
        res.render('products/carrito', {
            session: req.session
        })
    },

    medioDePago: (req, res) => {
        res.render('products/medioDePago', {
            session: req.session
        })
    },






};

module.exports = controller