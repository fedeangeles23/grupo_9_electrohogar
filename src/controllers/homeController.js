//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');

// Mete la ruta del JSON en una var para poder acceder a el 
const productsFilePath = path.join(__dirname, '../data/products.json');
// parsea y lee el JSON productsfilepath
const products = JSON.parse(fs.readFileSync(producstFilePath, 'utf-8'));

let controller = {

    
    home: (req,res) => {
        let producsInSale =
            res.render('products/home')
}


}

module.exports = controller