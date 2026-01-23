import { Personaje } from "./model.ts";
import { obtenerPersonajes } from "./api.ts";

const mostrarPersonajes = async (): Promise<void> => {
    try {
    const personaje = await obtenerPersonajes();
    console.log("Personaje:", personaje);
  } catch (error) {
    console.error("Error al mostrar el personaje:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await mostrarPersonajes()
}
);

