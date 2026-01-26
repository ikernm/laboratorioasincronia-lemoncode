import { obtenerPersonajes } from "./api";
import { Personaje } from "./model";


const mostrarPersonajes = async (): Promise<Personaje[]> => {
  try {
    const personajes = await obtenerPersonajes();
    return personajes;
  } catch (error) {
    console.error("Error al mostrar los personajes:", error);
    return [];
  }
};

const pintarPersonajes = async () => {
  const personajes = await mostrarPersonajes();
  const contenedor = document.querySelector(".personajes-contenedor");
  
  if (!contenedor) {
    console.error("Error al pintar los personajes");
    return;
  }

  contenedor.innerHTML = "";

  const personaje = personajes[0];
  const tarjeta = document.createElement("div");

  tarjeta.classList.add("personaje-tarjeta");

  const imagenTarjeta = document.createElement("img");
  imagenTarjeta.src = `http://localhost:3000/${personaje.imagen}`
  imagenTarjeta.alt = personaje.nombre;

  const nombreTarjeta = document.createElement("p");
  nombreTarjeta.textContent = personaje.nombre;

  tarjeta.appendChild(imagenTarjeta);
  tarjeta.appendChild(nombreTarjeta);

  contenedor.appendChild(tarjeta);
}



document.addEventListener("DOMContentLoaded", async () => {
  await pintarPersonajes();
});




