function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const errorMessage = document.getElementById("error-message");

    // Validación para el nombre: Debe contener solo letras
    const nombreValido = /^[A-Za-z]+$/.test(nombre);

    // Validación para el correo: Debe contener un símbolo '@'
    const correoValido = correo.includes('@');

    // Validación para la contraseña: Debe contener al menos una letra mayúscula, un número y letras
    const contrasenaValida = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(contrasena);

    if (!nombreValido) {
        errorMessage.textContent = "El nombre debe contener solo letras.";
    } else if (!correoValido) {
        errorMessage.textContent = "El correo debe contener un '@'.";
    } else if (!contrasenaValida) {
        errorMessage.textContent = "La contraseña debe contener al menos una letra mayúscula, un número y letras, y tener una longitud mínima de 8 caracteres.";
    } else {
        // Redirige a la página de inicio si el registro es exitoso
        // En una aplicación real, aquí verificarías las credenciales en una base de datos
        window.location.href = "/html/inicio.html";
        return true; // Permite el envío del formulario
    }
    return false; // Evita el envío del formulario si hay errores de validación
}
