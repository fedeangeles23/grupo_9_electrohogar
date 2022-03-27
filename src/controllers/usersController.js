const {
    validationResult
} = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const user = require('../database/models/user');
const Users = db.User;
const Products = db.Products;




const controller = {
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },

    loginGoogle: (req, res) => {
        res.render('users/loginGoogle', {
            session: req.session
        })
    },




    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            Users.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.rol
                    }
                    if(req.session.cart == undefined){
                        req.session.cart = [];
                    }

                      if (req.session.carrito == undefined) {
                          req.session.carrito = [];
                      }
                   
                    console.log(req.session.cart);

                    db.Order.findOne({
                        where: {
                            userId: req.session.user.id,
                            state: 'pending'
                        },
                        include: [{
                            association: 'order_items'
                        }]

                    }).then(order => {
                        if (order) {
                            order.order_item.forEach(item => {
                                let product = {
                                    id: item.productId,
                                    name: item.product.name,
                                    price: item.product.price,
                                    discount: item.product.discount,
                                    image: product.productImages[0].image,
                                    amount: +item.amount,
                                    total: +item.product.price * item.quantity,
                                    orderId: order.id
                                }
                                req.session.cart.push(product)
                            });
                        }
                        res.redirect('/')

                    })

                    if (req.body.remember) {
                        const TIME_IN_MILISECONDS = 60000
                        res.cookie("userElectrohogar", req.session.user, {
                            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                            httpOnly: true,
                            secure: true
                        })
                    }

                    res.locals.user = req.session.user;

                    res.redirect('/')
                })
        } else {
            console.log(errors)
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }

        console.log(req.body)
     console.log(user)
    },


    registro: (req, res) => {
        res.render('users/registro', {
            session: req.session
        })
    },

    processRegistro: (req, res) => {


        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let {
                name,
                last_name,
                email,
                pass1
            } = req.body
            Users.create({
                    name,
                    last_name,
                    email,
                    pass: bcrypt.hashSync(pass1, 10),
                    avatar: req.file ? req.file.filename : 'default-image.png',
                    rol: 0
                })
                .then(() => {
                    res.redirect('/users/login')
                })
        } else {
            res.render('users/registro', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }

    },


    perfil: (req, res) => {
        Users.findByPk(req.session.user.id, {
                include: [{
                    association: 'addresses'
                }]
            })
            .then((user) => {
                res.render('users/perfil', {
                    user,
                    session: req.session

                })
            })

    },

    editProfile: (req, res) => {
        Users.findByPk(req.session.user.id)
            .then((user) => {
                res.render('users/EditarPerfil', {
                    session: req.session,
                    user
                })
            })
        console.log(user)


    },


    editProfilePost: (req, res) => {
        Users.update({
                where: {
                    id: req.session.user.id
                }
            })
            .then((user) => {
                user.update({
                    name: req.body.nameEdit
                })
                res.redirect('/users/perfil')
            })
            .catch(error => console.log(error))

    },

    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.userElectroHogar) {
            res.cookie('userElectroHogar', "", {
                maxAge: -1
            })
        }
        res.redirect('/')

    },

    chat: (req, res) => {

        const express = require('express')
        const app = express()

        const http = require('http')
        const server = http.createServer(app)

        const {
            Server
        } = require('socket.io')
        const io = new Server(server)

        io.on('connection', (socket) => {
            /*  console.log('Un usuario se conecto')

             socket.on('disconnect', () => {
                 console.log('Un usuario se ha desconectado')
             }) */


            /*    socket.on('chat', (msg) => {
                   console.log('mENSAJE:' +msg)
               }) */

            socket.on('chat', (msg) => {
                io.emit('chat', msg)
            })
        })

        res.render('users/chat', {
            session: req.session
        })

    }



}

module.exports = controller