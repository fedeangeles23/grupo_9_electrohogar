const express = require('express')
const app = express()
const nodemailer = require('nodemailer');

app.post('/send-email', (req,res) => {
 const transporter = nodemailer.createTransport({
   service: "gmail",
     auth:{
         user: 'electrohogargrupo9@gmail.com',
         pass: 'electrohogargrupo123'
     }
 });

    var details = {
        from: "electrohogargrupo9@gmail.com",
        to: "joakola87@gmail.com",
        subject: "Electrohogar Subscripcion",
        text: "Hola mundo!",
    }

    transporter.sendEmail(details, (error) => {
        if(error){
            res.status(500).send(error.message)
        }else{
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});

