const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let controller = { 

    // Detalle de producto
    detail: (req, res) => {


        let productId = +req.params.id;
        let product = products.find(product => product.id === productId)

        res.render('products/productDetail', {
            product

        })
    },

    //----------------------- Categorias ---------------------------//

    gaming: (req, res) => {
        //Filtrando productos que contengan la palabra "Electro"
        let productsGaming = products.filter(product => product.categoria === "Gaming")

        res.render('products/home', {
            productsGaming,
        })
    }

  
};

module.exports = controller
