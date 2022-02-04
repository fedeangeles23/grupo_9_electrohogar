 //Requerimos modulo fs y path
 const fs = require('fs');
 const path = require('path');

/*  const db = require('../database/models');
 */

const db = require('../database/models');



 // Para que los miles tengan punto y se pueda entender el precio
 const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


 let controller = {
     home: (req, res) => {
         db.Product.findAll()
             .then((products) => {
                 res.send(products)
             })

     }


     //Filtrando productos que contengan la palabra "Electro"
     /*   let products12cuotas = products.filter(product => product.cuotas == "12")

       res.render('products/home', {
           products12cuotas,
           toThousand,
           session: req.session
       }) */


     /* 
         products: (req, res) => {
             res.render('products/allProducts', {
                 products,
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

      */

 };

 module.exports = controller

 const express = require('express');
 const router = express.Router();