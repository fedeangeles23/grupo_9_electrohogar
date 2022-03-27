const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
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


app.get('/chat', (req, res) => {
  res.render('users/chat', {
      session: req.session
  })
})

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})