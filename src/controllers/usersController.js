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
        res.render('users/login',{
            session: req.session
        } )
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            
            let user = users.find(user => user.email == req.body.email)

            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email:user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            
            
            if(req.body.remember){
                const TIME_IN_MILISECONDS = 60000
                res.cookie("userElectroHogar", req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }


            res.locals.user = req.session.user;

            res.redirect('/')

        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session
            })
        }

       // console.log(req.body)
       // console.log(user)
    },


    registro: (req, res) => {
        res.render('users/registro', {
            session: req.session
      })
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
                errors: errors.mapped(),
                session: req.session

            }) 
        }
    },


    perfil: (req, res) => {
        res.render('users/perfil')
        session: req.session

    },

    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userElectroHogar){
            res.cookie('userElectroHogar', "", { maxAge: -1 })
        }
        res.redirect('/')

    },




}

module.exports = controller