const express = require('express')
const app = express()
const PORT = 5000;
const path = require('path')
const method0verride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cookie = require('./middlewares/cookie')


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));


//---------View engine setup------------------

app.set('views', path.join(__dirname, 'views')); // 

app.set('view engine','ejs'); // setea que el view engine sera EJS 


//----------------Middlewares---------------

app.use(express.static(path.join(__dirname, '../public')));
//Sirve para solicitudes en donde se envian datos POST y PUT
app.use(express.urlencoded({ extended: false }));
//para trabajar con forms
app.use(express.json());
app.use(method0verride('_method'));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieParser())
app.use(cookie)
/*-------------------Enrutadores--------------- */

let users = require('./routes/usersRouter')
let home = require('./routes/homeRouter')
let admin = require('./routes/adminRouter')
let carrito = require ('./routes/cartRouter')
let products = require ('./routes/productRouter')

/* ----------------Routes------------------------- */

 app.use('/', home);
 
app.use('/carrito', carrito)

app.use('/users', users);
 
app.use('/admin', admin);

app.use('/products', products);



/* ----------- ERROR 404 ---------------*/
app.use((req, res, next) => {
res.status(404).render('404-page', {
    session: req.session
}) //le tira al cliente el status de la peticion realizada
})


