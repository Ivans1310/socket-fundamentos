 // trabajamos con IO ya que lo importamos en las anteriores lineas
 var socket = io();
 //funcion de mensaje  que me diga cuando este conectado con el servidor
 // osea un canal de comunicacion abierto entre el servidor y el cliente
 // Con esto vamos a estar enterados en el front de cualquier cambio en el servidor , en el backend
 socket.on('connect', function() {
     console.log(`conectado al servido`);
 });

 //Detectamos cuando el servidor se ha desconectado
 // los ON son para escuchar sucesos
 socket.on('disconnect', function() {
     console.log('Perdimos conexion con el servidor');
 });

 // los emit son para enviar informacion
 socket.emit('enviarMensaje', {
     usuario: 'Ivan',
     mensaje: 'Hola mundo'
 }, function(resp) {
     // console.log('Se disparo el callback');
     console.log('resp:', resp);
 });

 // escuchar el mensaje
 socket.on('enviarMensaje', function(mensaje) {
     console.log(mensaje);
 })