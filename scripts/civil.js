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
        .then(html => {
            if (html) {
                document.getElementById("contenido").innerHTML = html;
            }

            // Cerrar menú móvil después de seleccionar una opción
            document.querySelector(".sidebar").classList.remove("activo");
        })
        .catch(error => {
            document.getElementById("contenido").innerHTML =
                "<p>Error al cargar el contenido.</p>";
            console.error("Error cargando contenido:", error);
        });
}

// Cargar por defecto la Presentación al entrar a Civil
document.addEventListener("DOMContentLoaded", () => {
    cargarContenido("../guias/guiascivil/presentacioncivil.html");
});
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}
