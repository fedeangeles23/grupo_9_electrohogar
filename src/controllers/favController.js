const { VERSION } = require('ejs');
const db = require('../database/models');
const Products = db.Product;

class FavoritoController{
    agregarItem(req, res){
        var carrito = req.session.carrito;
        var external = req.params.external; 
        Products.findOne({where: {external_id: external}})
        .then((producto) => {
            if(producto){
             let pos = favController.verificar(carrito, external);
                if (pos == -1){
                    let datos = {
                        id: producto.id,
                        external : external,
                        name: producto.name,
                        precio: producto.price,
                    };
                    carrito.push(datos);
                }else{
                    console.log('algo salio mal')
                } 
                req.session.carrito = carrito
                console.log(req.session.carrito)
                res.status(200).json(req.session.carrito)
            }
        });
    }

    quitarItem(req, res){
        var carrito = req.session.carrito;
        var external = req.params.external;
        var pos = favController.verificar(carrito,external);
        var dato = carrito[pos];
        if (dato.cantidad > 1){
            
        }
    }




}