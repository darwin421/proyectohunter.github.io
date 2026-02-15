// FUNCIÓN PARA CARGAR CONTENIDO EN EL DIV #contenido
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
    cargarContenido("../guias/guiashunter/presentacion_hunter.html");
});

// FUNCIÓN PARA MOSTRAR / OCULTAR EL MENÚ EN MÓVIL
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}

// FUNCIÓN PARA ALTERNAR CATEGORÍAS
function toggleCategory(button) {
    const isOpen = button.getAttribute("data-open") === "true";
    button.setAttribute("data-open", !isOpen);
    
    const list = button.nextElementSibling;
    if (list) {
        list.style.display = isOpen ? "none" : "block";
    }
}

// FUNCIÓN PARA ALTERNAR SUBMENÚS
function toggleSubmenu(toggle) {
    const submenu = toggle.nextElementSibling;
    const isOpen = submenu.style.display === "block";
    
    // Cerrar otros submenús en la misma categoría
    const parent = toggle.closest(".category-list");
    if (parent) {
        parent.querySelectorAll(".submenu").forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = "none";
            }
        });
    }
    
    submenu.style.display = isOpen ? "none" : "block";
    toggle.style.color = isOpen ? "inherit" : "var(--color-hunter)";
}

// Inicializar: abrir primera categoría por defecto
document.addEventListener("DOMContentLoaded", () => {
    const firstBtn = document.querySelector(".category-btn");
    if (firstBtn) {
        firstBtn.click();
    }
});