function cargarContenido(ruta) {
    fetch(ruta)
        .then(response => {
            if (!response.ok) {
                // Archivo NO existe → evitar romper la página
                document.getElementById("contenido").innerHTML = `
                    <div class="error">
                        <h2>Error 404</h2>
                        <p>Este contenido aún no está disponible.</p>
                    </div>
                `;
                return null;
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                document.getElementById("contenido").innerHTML = data;
            }

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
