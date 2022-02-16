 //Requerimos modulo fs y path
 const fs = require('fs');
 const path = require('path');
 const db = require('../database/models');
 const { Op } = require('sequelize')




 // Para que los miles tengan punto y se pueda entender el precio
 const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


 let controller = {
     home: (req, res) => {
         // Filtrando productos con descuento de 10%
         db.Product.findAll({
             include: [{ association: 'productImages'}],
             where: {
                 cuotes: {
                     [Op.eq]: 12
                 }
             }
         })
             .then((products12cuotas) => {
                 res.render('products/home', {
                    products12cuotas,
                    toThousand,
                    session: req.session
                 })

             })
             .catch(error => console.log(error))

     },


     
         products: (req, res) => {
             res.render('products/allProducts', {
                 Product,
                 toThousand,
                 session: req.session

             })
         },

         

         // Footer views 
         sobreNosotros: (req, res) => {
             res.render('footerViews/sobreNosotros', {
                 session: req.session
             })


         },

         preguntasFrecuentes: (req, res) => {
             res.render('footerViews/preguntasFrecuentes', {
                 session: req.session
             })

         },

         terminosYcondiciones: (req, res) => {
             res.render('footerViews/terminosyCondiciones', { session: req.session })

         },
         trabajaConNosotros: (req, res) => {
             res.render('footerViews/trabajaConNosotros', { session: req.session })

         },
         botonDeArrepentimiento: (req, res) => {
             res.render('footerViews/botonDeArrepentimiento', {
                 session: req.session
             })

         }

      

 };

 module.exports = controller

 const express = require('express');
 const router = express.Router();