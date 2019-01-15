// Comando para establecer la coneexión
var socket = io();
var label = $("#lblNuevoTicket");

socket.on('connect', () => {
    console.log('Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado');
});

// on "estadoActual"
socket.on("estadoActual", (resp) => {
    label.text(resp.actual);
});

$("button").on("click", function() {
    socket.emit("siguienteTicket", null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});