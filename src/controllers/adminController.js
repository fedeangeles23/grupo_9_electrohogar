//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');
const db = require('../database/models');



// Para que los miles tengan punto y se pueda entender el precio
/* const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 */


let controller = {

    create: (req, res) => {
        res.render('admin/createProd', {
            session: req.session
        })
    },

    store: (req, res) => {

       /*  const { nombre, precio, imagen, descripcion, categoria, marca } = req.body

        let lastId = 0

        products.forEach(product => {
            if (product.id > lastId) {
                lastId = product.id
            }
        });

        let newProduct = {
            id: lastId + 1,
            nombre,
            precio,
            descripcion,
            categoria,
            marca,
            imagen: req.file ? req.file.filename : ("default-imagen.png")
        }

        products.push(newProduct)

        writeJson(products)
        res.redirect('/products') */
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

    dashboard: (req, res) => {
        res.render('admin/adminsettings', {
            session: req.session
        })
    }

};

module.exports = controller

const express = require('express');
const router = express.Router();
