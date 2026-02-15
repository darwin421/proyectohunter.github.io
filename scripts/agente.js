// FUNCIÓN PARA CARGAR CONTENIDO EN EL DIV #contenido
function cargarContenido(ruta) {
    fetch(ruta)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenido").innerHTML = data;
            // Cerrar el menú en móvil después de cargar el contenido
            document.querySelector(".sidebar").classList.remove("activo");
        })
        .catch(error => {
            document.getElementById("contenido").innerHTML =
                "<p>Error al cargar el contenido.</p>";
        });
}

// CARGAR PRESENTACIÓN POR DEFECTO AL ENTRAR A LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    cargarContenido("../guias/guiasagente/presentacionagente.html");
});

// FUNCIÓN PARA MOSTRAR / OCULTAR EL MENÚ EN MÓVIL
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}
