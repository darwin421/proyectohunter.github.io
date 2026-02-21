fetch("../data/agente.json")
  .then((response) => response.json())
  .then((agentes) => {
    const contenedor = document.querySelector(".lista-agentes");

    agentes.forEach((agente) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-agente");

      tarjeta.innerHTML = `
  <img src="${agente.imagen}" alt="${agente.nombre}" class="img-agente">

  <h3>${agente.nombre}</h3>

  <p><strong>Especialidad:</strong> ${agente.especialidad}</p>
  <p><strong>Rol:</strong> ${agente.rol}</p>

  <p class="mensaje">${agente.mensaje}</p>
`;

      contenedor.appendChild(tarjeta);
    });
  })
  .catch((error) => console.error("Error cargando agentes:", error));
