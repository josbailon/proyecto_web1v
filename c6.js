document.addEventListener("DOMContentLoaded", function () {
    const enviarButton = document.getElementById("enviar");
    const mensajeTextarea = document.getElementById("mensaje");
    const remitenteInput = document.getElementById("remitente");
    const notificaciones = document.getElementById("notificaciones");

    enviarButton.addEventListener("click", function () {
        const mensaje = mensajeTextarea.value.trim();
        const remitente = remitenteInput.value.trim();

        if (mensaje && remitente) {
            const nuevaNotificacion = document.createElement("div");
            nuevaNotificacion.classList.add("notificacion");
            nuevaNotificacion.innerHTML = `<strong>${remitente}:</strong> ${mensaje}`;
            notificaciones.appendChild(nuevaNotificacion);

            // Mostrar mensaje de éxito
            alert("Mensaje enviado con éxito");

            mensajeTextarea.value = "";
            remitenteInput.value = "";
        } else {
            alert("Completa todos los campos para enviar un mensaje.");
        }
    });
});
