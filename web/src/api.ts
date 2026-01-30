import axios from "axios";
import { Personaje } from './model';

export const obtenerPersonajes = async (): Promise<Personaje[]> => {

    try {
        let url = "http://localhost:3000/personajes";
        const response = await axios.get<Personaje[]>(url);
        return response.data;
    }
    catch (error) {
        throw new Error('Error al obtener los personajes');
    }

}

