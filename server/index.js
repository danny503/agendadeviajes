//import express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config')


//configurar express
const app = express();

//Habilitar pug
app.set('view engine', 'pug');
//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica desde public
app.use(express.static('public'));

//Validar si estamos en desaroollo o en produccion
const config = configs[app.get('env')];

//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();    
    return next();

})

//cargar las rutas
app.use('/', routes()); 

app.listen(3000);