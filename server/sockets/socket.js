let { io } = require('../server')

// Esto es para sabes si alguien algun cliente se conecta desde el front
// se dispara el consologo cuando un usuario se conecta"
io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Emite un mensaje desde el servidor
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'BIenvenido a esta aplicacion'
    });

    // Se ddispara cuando el usuario (client) previamente conectado se ha desconectado
    client.on('disconnect', () => {
        console.log(`El usuario ${client} se ha desconectado`);
    });

    // Escuchar cliente por medio del nombre del mensaje que ha enviado.
    client.on('enviar mensaje', (data, callback) => {
        console.log(data);

        // con el broadcast se emite mensajes a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });

        // } else {
        //     callback({
        //         resp: 'Todo salio MAL!'
        //     });
        // }
    });
})