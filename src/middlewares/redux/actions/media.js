import axios from "axios"
import { URL_API } from "../../config"
import { GET_INFO, GET_MEDIA } from "../../misc"

export function getMedia() {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_API}/media`);
            dispatch({
                type: GET_MEDIA,
                payload: response.data
            })
        } catch (e) {
            console.error(e)
        }
    }
};

export function getMediaById(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_API}/media/${id}`);
            dispatch({
                type: GET_INFO,
                payload: response.data
            })
        } catch (e) {
            console.error(e)
        }
    }
};