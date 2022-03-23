const db = require('../database/models');
const ProductImage = db.ProductImage


module.exports = {


     show: async (req, res) => {


          if (!req.session.cart) {
               return res.status(500).json({
                    ok: false,
                    msg: 'Comuniquese con el administrador de la web'
               })
          }

          let response = {
               ok: true,
               meta: {
                    total: req.session.cart.length
               },
               data: req.session.cart
          }

          return res.status(200).json(response)

     },

     add: async (req, res) => {

          try {

               let product = await db.Product.findByPk(req.params.id, {
                    include: [
                         {
                         association: 'productImages'
                    }
               ]
               });

               console.log('Aca esta tu productito >', product)

               if(!product){
                        return res.status(500).json({
                             ok: false,
                             msg: 'Comuniquese con el administrador de la web'
                        })
               }


               const {id, name, price, brand} = product;

               let item = {
                    id,
                    name,
                    price,
                    brand,
/*                     image: ProductImage.image[0],
 */                    amount : 1,
                    total : price
               }

               if(!req.session.cart){
                    req.session.cart = []
               }
               console.log(req.session.cart)
          
               req.session.cart.push(item)

               let response = {
                    ok: true,
                    meta: {
                         total: req.session.cart.length
                    },
                    data: req.session.cart
               }

               return res.status(200).json(response)

          } catch (error) {
               console.log(error)
          }

     }

}