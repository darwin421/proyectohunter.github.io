function cargarContenido(ruta) {
    fetch(ruta)
        .then(response => {
            if (!response.ok) {
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
            const sb = document.querySelector(".sidebar");
            if (sb) sb.classList.remove("activo");

            // Inicializar formulario si existe
            initAgenteForm();
        })
        .catch(error => {
            document.getElementById("contenido").innerHTML = "<p>Error al cargar el contenido.</p>";
        });
}

// CARGAR FORMULARIO POR DEFECTO
document.addEventListener("DOMContentLoaded", () => {
    cargarContenido("../guias/info/presentacioninfo.html");
});

// FUNCIÓN PARA MOSTRAR / OCULTAR EL MENÚ EN MÓVIL
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("activo");
}

// Inicializa el formulario cargado dinámicamente
function initAgenteForm() {
    const form = document.getElementById('agente-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const nombre = (data.get('nombre') || '').toString().trim();
        const correo = (data.get('correo') || '').toString().trim();

        if (!nombre || !correo) {
            alert('Por favor completa los campos requeridos (nombre y correo).');
            return;
        }

        // Guardar en localStorage como ejemplo
        const lista = JSON.parse(localStorage.getItem('agentes') || '[]');
        lista.push({
            nombre,
            correo,
            alias: data.get('alias') || '',
            rol: data.get('rol') || '',
            experiencia: data.get('experiencia') || '',
            fecha: new Date().toISOString()
        });
        localStorage.setItem('agentes', JSON.stringify(lista));

        const resultado = document.getElementById('form-result');
        if (resultado) {
            resultado.innerHTML = `<div class="presentacion-agente"><h3>Registro recibido</h3><p>Gracias ${nombre}, tu inscripción fue guardada localmente.</p></div>`;
        }

        form.reset();
    });
}
