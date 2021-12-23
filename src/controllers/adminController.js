//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');

// Mete la ruta del JSON en una var para poder acceder a el 
const productsFilePath = path.join(__dirname, '../data/products.json');
// parsea y lee el JSON productsfilepath
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// Para que los miles tengan punto y se pueda entender el precio
/* const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 */
const writeJson = (database) => fs.writeFileSync(productsFilePath, JSON.stringify(database), 'utf-8')

let controller = {

    create: (req, res) => {
        res.render('admin/createProd')
    },

    store: (req, res) => {

        const { nombre, precio, imagen, descripcion, categoria, marca } = req.body

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
        res.redirect('/products')
    },


    edit: (req, res) => {
        let productId = +req.params.id
        let productToEdit = products.find(product => product.id === productId)

        res.render('admin/editProd', {
            product: productToEdit
        })
    },

    update: (req, res) => {
        let productId = +req.params.id

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

        res.redirect('/')

    },

    del: (req, res) => {
        let productId = +req.params.id;

        products.forEach(product => {
            if (product.id === productId) {
                let productDestroyI = products.indexOf(product)
                productDestroyI !== -1 ?
                    products.splice(productDestroyI, 1)
                    : console.log('No encontre el producto chee')
            }
        })

        writeJson(products)
         res.redirect("products/allProducts")
 
    }

};

module.exports = controller

const express = require('express');
const router = express.Router();
