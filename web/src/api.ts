import axios from "axios";
import { Personaje } from './model';

export const obtenerPersonajes = async (): Promise<Personaje[]> => {

    try {
        const response = await axios.get<Personaje[]>('http://localhost:3000/personajes');
        return response.data;
    }
    catch (error) {
        throw new Error('Error al obtener los personajes');
    }

}

