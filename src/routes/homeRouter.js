let express = require('express') 
let router = express.Router() 
let controller = require('../controllers/homeController.js') 
const nodemailer = require('nodemailer');



router.get('/', controller.home) /


/*  Footer vistas  */
router.get('/sobre-nosotros', controller.sobreNosotros) // 
router.get('/preguntas-frecuentes', controller.preguntasFrecuentes) // 
router.get('/terminos-y-condiciones', controller.terminosYcondiciones) // 
router.get('/trabaja-con-nosotros', controller.trabajaConNosotros) // 
router.get('/boton-de-arrepentimiento', controller.botonDeArrepentimiento) //
router.get('/politica-y-privacidad', controller.politicaYprivacidad) //
router.get('/contacto', controller.contacto) //
router.get('/ventana', controller.ventana) //

/* Nodemailer - Email de subscripcion */
router.post('/send-email', (req, res) => {
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jutbejsqxmpotzua@ethereal.email',
        pass: 'VP7jWRgb4VzFTpFwNC'
    }
});

    var mailOptions = {
        from: "Remitente",
        to: "joakola87@gmail.com",
        subject: "Electrohogar Subscripcion",
        text: "Hola mundo!"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message)
        } else {
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});


module.exports = router 

