// Arrays para almacenar comentarios y documentos
const comentarios = [];
const documentos = [];

// Función para agregar un comentario
function agregarComentario() {
    const nuevoComentario = document.getElementById("nuevo-comentario").value;
    if (nuevoComentario.trim() !== "") {
        comentarios.push(nuevoComentario);
        actualizarListaComentarios();
        document.getElementById("nuevo-comentario").value = "";
    }
}

// Función para editar un comentario
function editarComentario(index) {
    const nuevoComentario = prompt("Editar comentario", comentarios[index]);
    if (nuevoComentario !== null) {
        comentarios[index] = nuevoComentario;
        actualizarListaComentarios();
    }
}

// Función para eliminar un comentario
function eliminarComentario(index) {
    comentarios.splice(index, 1);
    actualizarListaComentarios();
}

// Función para agregar un documento
function agregarDocumento() {
    const nuevoDocumento = document.getElementById("nuevo-documento").value;
    if (nuevoDocumento.trim() !== "") {
        documentos.push(nuevoDocumento);
        actualizarListaDocumentos();
        document.getElementById("nuevo-documento").value = "";
    }
}

// Función para editar un documento
function editarDocumento(index) {
    const nuevoDocumento = prompt("Editar documento", documentos[index]);
    if (nuevoDocumento !== null) {
        documentos[index] = nuevoDocumento;
        actualizarListaDocumentos();
    }
}

// Función para eliminar un documento
function eliminarDocumento(index) {
    documentos.splice(index, 1);
    actualizarListaDocumentos();
}


// Función para actualizar la lista de comentarios en la página
function actualizarListaComentarios() {
    const comentariosList = document.getElementById("comentarios-list");
    comentariosList.innerHTML = "";
    for (let i = 0; i < comentarios.length; i++) {
        const listItem = document.createElement("li");
        listItem.className = "comentario-item";
        listItem.innerHTML = `
            <div>${comentarios[i]}</div>
            <div class="acciones">
                <button onclick="editarComentario(${i})">Editar</button>
                <button onclick="eliminarComentario(${i})">Eliminar</button>
            </div>
        `;
        comentariosList.appendChild(listItem);
    }
}
