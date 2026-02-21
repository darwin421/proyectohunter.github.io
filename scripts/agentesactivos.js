fetch("../data/agente.json")
  .then((response) => response.json())
  .then((agentes) => {
    const contenedor = document.querySelector(".lista-agentes");

    agentes.forEach((agente) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("contenedor-agente");

      tarjeta.innerHTML = `
        <img src="${agente.imagen}" alt="${agente.nombre}" class="img-agente">

        <div class="info-agente">
          <h3>${agente.nombre}</h3>

          <p><strong>Estado:</strong> ${agente.estado}</p>
          <p><strong>Especialidad:</strong> ${agente.especialidad}</p>
          <p><strong>Rol en combate:</strong> ${agente.rol}</p>
          <p><strong>Plataforma:</strong> ${agente.plataforma}</p>
          <p><strong>ID:</strong> ${agente.id}</p>

          <p class="mensaje">${agente.mensaje}</p>
        </div>
      `;

      contenedor.appendChild(tarjeta);
    });
  })
  .catch((error) => console.error("Error cargando agentes:", error));