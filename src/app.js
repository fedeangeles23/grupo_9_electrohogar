// APP.JS es nuestro entry point.
// npm init para iniciar, 
//npm install express para que se cree la carpeta node_modules
// codear los require express y path y asignar puerto 

// express se instala en cada proyecto por separado 

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));




//View engine setup---

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs');


//middlewares

app.use(express.static(path.join(__dirname, '../public')));

//------------------Rutas---------------------// 
 /* el metodo dentro de sendfile Join() busca la ruta en donde estamos, primer parametro __dirname hace referencia al directorio en donde estamos,
 el segundo parametro es el path relativo que queremos enviar, en este caso views/index.html */

app.get('/', function (req, res){
    res.render(path.join(__dirname, './views/products/home.ejs'))
});

app.get('/carrito', function (req, res){
    res.render(path.join(__dirname, './views/products/carrito.ejs'))
});

app.get('/login', function (req, res){
    res.render(path.join(__dirname, './views/users/login.ejs'))
});
 
app.get('/perfil', function (req, res){
    res.render(path.join(__dirname, './views/users/perfil.ejs'))
});

app.get('/productDetail', function (req, res){
    res.render(path.join(__dirname, './views/products/productDetail.ejs'))
});

app.get('/registro', function (req, res){
    res.render(path.join(__dirname, './views/users/registro.ejs'))
});


// Servidor levantado con exito




/* Enrutadores */

// Eliminar los sendfile por que ya no sirven para nuestra app
