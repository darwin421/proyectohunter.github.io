function cargarContenido(ruta) {
    fetch(ruta)
        .then(respuesta => respuesta.text())
        .then(html => {
            document.getElementById("contenido").innerHTML = html;
                        // Cerrar menú móvil después de seleccionar una opción
            document.querySelector(".sidebar").classList.remove("activo");


        })
        .catch(error => {
            document.getElementById("contenido").innerHTML = "<p>Error al cargar el contenido.</p>";
            console.error("Error cargando contenido:", error);
        });
}

// Cargar por defecto la Presentación al entrar a Civil
document.addEventListener("DOMContentLoaded", () => {
    cargarContenido("/proyecto-hunter/guias/guiascivil/presentacioncivil.html");
});
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}
