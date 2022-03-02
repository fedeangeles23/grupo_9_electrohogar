 //Requerimos modulo fs y path
 const fs = require('fs');
 const path = require('path');
 const db = require('../database/models');
 const { Op } = require('sequelize')




 // Para que los miles tengan punto y se pueda entender el precio
 const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


 let controller = {
     home: (req, res) => {
         // Filtrando productos con cuotas de 12
        let products12cuotas = db.Product.findAll({
             include: [{ association: 'productImages'}],
             where: {
                 cuotes: {
                     [Op.eq]: 12
                 }
             }
         })
         let productscomputacion = db.Product.findAll({
            include: [{ association: 'productImages'}],
            where: {
                subcategoryId: {
                    [Op.eq]: 10
                }
            }
        })
        Promise.all([products12cuotas, productscomputacion])
             .then(([products12cuotas, productscomputacion]) => {
                 res.render('products/home', {
                    products12cuotas,
                    productscomputacion,
                    toThousand,
                    session: req.session
                 })

             })
             .catch(error => console.log(error))

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

         },
         politicaYprivacidad: (req, res) => {
            res.render('footerViews/politicaYprivacidad', { session: req.session })
         }

      

 };

 module.exports = controller

 const express = require('express');
 const router = express.Router();