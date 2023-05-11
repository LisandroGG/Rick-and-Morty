import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, REMOVE_COMPONENT_FAVORITE} from "./actions-type";
import axios from "axios"

export const addFav = (character) => {
    
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
                });
            };
    } catch (error) {
        return {error: error.message}
    } 
};

    export const removeFav = (id) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            return async (dispatch) => {
                const { data } = await axios.delete(endpoint)
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                });
            };
        } catch (error) {
            return {error: error.message}
        }
    };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const remove_component_favorite = (id) => {
    return {
        type: REMOVE_COMPONENT_FAVORITE,
        payload: id
    }
}