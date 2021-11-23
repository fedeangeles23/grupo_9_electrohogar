
/* let  { } = require('../data/database')
 */


let controller = {

    
    home: (req,res) => {
/*         res.send("Hola este es el home y esta funcionado")
 */   
            res.render('productos')
}


}

module.exports = controller