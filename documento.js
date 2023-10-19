document.addEventListener("DOMContentLoaded", function () {
    const archivoInput = document.getElementById("archivo");
    const agregarDocumentoButton = document.getElementById("agregar-documento");
    const listaDocumentos = document.getElementById("lista-documentos");

    agregarDocumentoButton.addEventListener("click", function () {
        const archivo = archivoInput.files[0];

        if (archivo) {
            const nombre = archivo.name;
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${nombre}</span>
                <span class="delete-documento">Eliminar</span>
            `;
            listaDocumentos.appendChild(listItem);

            listItem.querySelector(".delete-documento").addEventListener("click", function () {
                listaDocumentos.removeChild(listItem);
            });

            // Limpiar el campo de archivo después de agregar el documento
            archivoInput.value = null;
        }
    });
});
