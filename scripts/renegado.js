// FUNCIÓN PARA CARGAR CONTENIDO EN EL DIV #contenido
function cargarContenido(ruta) {
    fetch(ruta)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenido").innerHTML = data;
            // Cerrar menú móvil después de seleccionar una opción
            document.querySelector(".sidebar").classList.remove("activo");
        })
        .catch(error => {
            document.getElementById("contenido").innerHTML =
                "<p>Error al cargar el contenido. La guía está en desarrollo.</p>";
            console.error("Error cargando contenido:", error);
        });
}

// CARGAR PRESENTACIÓN POR DEFECTO AL ENTRAR A LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    cargarContenido("/proyecto-hunter/guias/guiasrenegado/presentacionrenegado.html");
});

// FUNCIÓN PARA MOSTRAR / OCULTAR EL MENÚ EN MÓVIL
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}