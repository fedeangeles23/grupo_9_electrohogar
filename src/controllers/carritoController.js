const db = require('../database/models');


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
                    include: [{
                         association: 'productImages'
                    }]
               });

               if (!product) {
                    return res.status(500).json({
                         ok: false,
                         msg: 'Comuniquese con el administrador de la web'
                    })
               }


               const {
                    id,
                    name,
                    price,
                    brand
               } = product;

               let item = {
                    id,
                    name,
                    price,
                    brand,
                    image: product.productImages[0].image,
                    amount: 1,
                    total: price
               }

               if (!req.session.cart) {
                    req.session.cart = []
               }

               if (req.session.cart.length == 0) {
                    let order = await db.Order.create({

                         userId: req.session.user.id,
                         state: 'Pending'
                    })

                    item = {
                         ...item,
                         orderId: order.id
                    }

                    let orderItem = await db.Order_item.create({
                         orderId: order.id,
                         productId: item.id,
                         quantity: 1
                    })
                    .catch(error => console.log(error))
                    console.log(orderItem)

                    req.session.cart.push(item)
               }else{

               }


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