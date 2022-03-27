const express = require('express')
const app = express()
const nodemailer = require('nodemailer');

app.post('/send-email', (req,res) => {
 const transporter = nodemailer.createTransport({
     host: 'smtp.ethereal.email',
     port: 587,
     auth: {
         user: 'c3ancjlk5nt6cg5y@ethereal.email',
         pass: 'Q9YZjR9WVX9FdybFG8'
     }
 });

    var mailOptions = {
        from : "Remitente",
        to: mailuser,
        subject: "Electrohogar Subscripcion",
        text: "Hola mundo!"
    }

    transporter.sendEmail(mailOptions, (error, info) => {
        if(error){
            res.status(500).send(error.message)
        }else{
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});

