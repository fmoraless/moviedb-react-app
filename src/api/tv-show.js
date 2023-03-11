import axios from 'axios';
import { BASE_URL, API_KEY_PARAM } from '../config';

export class TVShowAPI {
    /** cuando lo utilices en otro archivo, no tienes que instanciar al ser static */
    /* Con Axios */
    static  async fetchPopulars() {
        try {
            const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`)
            console.log(response.data.results)
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }

    /* version con FETCH */
    /* static  async fetchPopulars() {
        try {
            const response = await fetch(`${API_URL}/tv/popular${API_KEY_PARAM}`, {
                method: 'GET',
            })
            const results = await response.json();
            return results.results
        } catch (error) {
            console.log(error)
        }
    } */
}
