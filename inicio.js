function validarInicioSesion() {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const errorMessage = document.getElementById("error-message");

    // Verifica que el correo y la contraseña sean válidos
    if (correo === "jostinbailon53@gmail.com" && contrasena === "Contraseña123") {
        // Inicio de sesión exitoso
        // En una aplicación real, verificarías las credenciales en una base de datos
        window.location.href = "/html/principal.html"; // Redirige a la página "principal.html"
        return false; // Evita el envío del formulario
    } else {
        errorMessage.textContent = "Credenciales incorrectas. Verifica tu correo y contraseña.";
        return false; // Evita el envío del formulario si hay errores de validación
    }
}
