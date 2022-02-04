const fs = require('fs');
const path = require('path');
const db = require('../database/models');


let controller = { 

    // Detalle de producto
    detail: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{association: 'productImages'}]
        })
           .then((product => {
               db.Product.findAll({
                   where: {
                       subcategoryId: product.subcategoryId
                   }
               })
               .then((relatedProducts) => {
                   res.render('products/productDetail', {
                       product,
                       session: req.session
                   })
               })
           }))
       },

    //----------------------- Categorias ---------------------------//

    gaming: (req, res) => {
        //Filtrando productos que contengan la palabra "Electro"
        let productsGaming = products.filter(product => product.categoria === "Gaming")

        res.render('products/home', {
            productsGaming,
            session: req.session
        })
    },
     search: (req, res) => {
        let keywords = req.query.keywords.trim().toLowerCase()

        let result = products.filter(product => product.name.includes(keywords))
        
        res.render('searchResult', {
            result,
            search: keywords,
            session: req.session,
            session: req.session
        }) 

    }
};

module.exports = controller
