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
    res.sendFile(path.join(__dirname, './views/index.html'))
});

// Servidor levantado con exito


