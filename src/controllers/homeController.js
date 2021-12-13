//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');

// Mete la ruta del JSON en una var para poder acceder a el 
const productsFilePath = path.join(__dirname, '../data/products.json');
// parsea y lee el JSON productsfilepath
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// Para que los miles tengan punto y se pueda entender el precio
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controller = { 
    home: (req,res) => {    
        //Filtrando productos que contengan la palabra "Electro"
        let productselectro = products.filter(product => product.categoria === "Electro")
        
        res.render('products/home', {
            productselectro,
            toThousand
        })
    },

     products: (req, res) => {
           res.render('products/allproducts', {
               products,
               toThousand
           })
        }, 

        detail: (req, res) => {
          
              
            let productId = +req.params.id;
            let product = products.find(product => product.id === productId)

            
            res.render('products/productDetail',{
                product
                
            }
            )
           
         },

};

module.exports = controller
