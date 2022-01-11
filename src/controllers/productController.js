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
            product,
            session: req.session

        })
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
