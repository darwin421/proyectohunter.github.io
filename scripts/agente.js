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
// Menu de especializaciones
function toggleSubmenu(id, elemento) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle("oculto");

    // Cambiar flecha
    const flecha = elemento.querySelector(".flecha");
    if (submenu.classList.contains("oculto")) {
        flecha.textContent = "▶";
    } else {
        flecha.textContent = "▼";
    }
}
//Funcion para cerrar el submenu al hacer click en una opcion
function cerrarSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.add("oculto");

    // Cerrar menú móvil si está abierto
    document.querySelector(".sidebar").classList.remove("activo");

    // Restaurar flecha
    const btn = document.querySelector(".submenu-btn a .flecha");
    if (btn) btn.textContent = "▶";
}