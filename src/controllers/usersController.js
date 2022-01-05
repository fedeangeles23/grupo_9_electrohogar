const { validationResult } = require('express-validator')
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')

let dbroute = path.join(__dirname, '../data/users.json')
let users = JSON.parse(fs.readFileSync(dbroute, 'utf-8'))

function writeUsersJSON(a) {
    let userJSON = JSON.stringify(a)
    fs.writeFileSync(dbroute, userJSON, 'utf-8')
}



const controller = {
    login: (req, res) => {
        res.render('users/login')
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            res.send('Logueado')
        } else {
            res.render('users/login', {
                errors: errors.mapped()
            })
        }
    },


    registro: (req, res) => {
        res.render('users/registro')
    },

    processRegistro: (req, res) => {


        let errors = validationResult(req);

        if(errors.isEmpty()){
            let lastId = 1;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let { name, last_name, email, pass1 } = req.body
            let newUser = {
                id: lastId + 1,
                name,
                last_name,
                email,
                pass: bcrypt.hashSync(pass1, 10),
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER",
                tel: "",
                address: "",
                city: "",
                province: "",
            }

            users.push(newUser)

            writeUsersJSON(users)

            res.redirect('/users/login')

        } else {

             res.render('users/registro', {
                errors: errors.mapped()
            }) 
        }
    },


    perfil: (req, res) => {
        res.render('users/perfil')
    },



}

module.exports = controller