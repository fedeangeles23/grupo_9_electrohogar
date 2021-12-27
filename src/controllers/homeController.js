//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');

// Mete la ruta del JSON en una var para poder acceder a el 
const productsFilePath = path.join(__dirname, '../data/products.json');
// parsea y lee el JSON productsfilepath
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Para que los miles tengan punto y se pueda entender el precio
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 
const writeJson = (database) => fs.writeFileSync(productsFilePath, JSON.stringify(database), 'utf-8')

let controller = {
    home: (req, res) => {
        //Filtrando productos que contengan la palabra "Electro"
        let products12cuotas = products.filter(product => product.cuotas == "12")

        res.render('products/home', {
            products12cuotas,
             toThousand 
        })
    },

    products: (req, res) => {
        res.render('products/allProducts', {
            products,
            toThousand 
        })
    },

   
// Footer views 
    sobreNosotros: (req,res) => {
        res.render('footerViews/sobreNosotros')
    },

    preguntasFrecuentes: (req,res) => {
        res.render('footerViews/preguntasFrecuentes')
    },

    terminosYcondiciones: (req,res) => {
        res.render('footerViews/terminosyCondiciones')
    },
    trabajaConNosotros: (req,res) => {
        res.render('footerViews/trabajaConNosotros')
    },

    



};

module.exports = controller

const express = require('express');
const router = express.Router();


/* 

sobreNosotros: (req,res) => {
        
} 

*/