const { users } = require('../data/users.json')
const { validationResult } = require('express-validator')


const controller = {
    login: (req, res) =>{
        res.render('users/login')
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            res.send('Logueado')
        }else {
            res.render('users/login', {
                errors: errors.mapped()
            })
        }
    },
    

    registro: (req, res) =>{
        res.render('users/registro')
    },

    processRegistro: (req, res) => {
        res.send('A')
 
    },
    

    perfil: (req, res) => {
        res.render('users/perfil')
    },

    
   
}

module.exports = controller