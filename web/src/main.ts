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
  const contenedor = document.querySelector(".personajes-contenedor");
  const personajes = await mostrarPersonajes();

  if (contenedor && contenedor) {
    
    personajes.forEach( (personaje: Personaje) => {

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("personaje-tarjeta");

      const imagenTarjeta = document.createElement("img");
      imagenTarjeta.src = `http://localhost:3000/${personaje.imagen}`
      imagenTarjeta.alt = personaje.nombre;

      const nombreTarjeta = document.createElement("p");
      nombreTarjeta.textContent = `Nombre: ${personaje.nombre}`;

      const especialidadTarjeta = document.createElement("p");
      especialidadTarjeta.textContent = `Especialidad: ${personaje.especialidad}`;

      const habilidadesTarjeta = document.createElement("p");
      habilidadesTarjeta.textContent = `Habilidades: ${personaje.habilidades}`;

      tarjeta.appendChild(imagenTarjeta);
      tarjeta.appendChild(nombreTarjeta);
      tarjeta.appendChild(especialidadTarjeta);
      tarjeta.appendChild(habilidadesTarjeta);

      contenedor.appendChild(tarjeta);

    })

  } else {
    console.error("Error al hacer el bucle para pintar los personajes", Error);
  }

}

const filtrarPersonajes = () => {
  const botonFiltrar = document.querySelector(".boton-filtrar") as HTMLButtonElement;
  const inputTexto = document.querySelector("#buscar") as HTMLInputElement;

  //const texto:string = inputTexto.value;

  if (botonFiltrar && botonFiltrar && inputTexto && inputTexto) {

    botonFiltrar.addEventListener("click", async() => {
      await obtenerPersonajes();
    })

  } else {
    console.error("Error al leer el botón del texto", Error);
  } 
}


document.addEventListener("DOMContentLoaded", async () => {
  await pintarPersonajes();
  filtrarPersonajes();
});

