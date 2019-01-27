const express = require('express');
// importacion de paquete de socketIO
const socketIO = require('socket.io');

// Es necesari porque socket no trabaja con directamente con express espor eso que es encesario 
// lenvantar otro servidor
const http = require('http');

const path = require('path');

const app = express();

// Se levanta un servidor http con toda la configuracion de express ya que el el servidor de socket no trabaja con express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializacion de socketIO IO= esta es la comunicacion del backend
// se corre servidor y se observa esta ruta :http://localhost:3000/socket.io/socket.io.js y se espera generar una gran libreria
// lo exporto al modulo del proyecto
module.exports.io = socketIO(server);

// llamo los que hay en en archivo de sockets
require('./sockets/socket');

// se cambia de app a server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});