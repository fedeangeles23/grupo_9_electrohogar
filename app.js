// APP.JS es nuestro entry point.
// npm init para iniciar, 
//npm install express para que se cree la carpeta node_modules
// codear los require express y path y asignar puerto 

// express se instala en cada proyecto por separado 

const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path')


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));



//middlewares

app.use(express.static('/public/'));

//------------------Rutas---------------------// 
// el metodo dentro de sendfile Join() busca la ruta en donde estamos, primer parametro __dirname hace referencia al directorio en donde estamos, el segundo parametro es el path relativo que 
//queremos enviar, en este caso views/index.html

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/carrito', function (req, res){
    res.sendFile(path.join(__dirname, './views/carrito.html'))
});

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/perfil', function (req, res){
    res.sendFile(path.join(__dirname, './views/perfil.html'))
});

app.get('/productDetail', function (req, res){
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
});

app.get('/registro', function (req, res){
    res.sendFile(path.join(__dirname, './views/registro.html'))
});


// Servidor levantado con exito

