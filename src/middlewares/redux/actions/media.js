import axios from "axios"
import { URL_API } from "../../config"
import { GET_CATEGORIES, GET_GENRES, GET_INFO, GET_MEDIA, GET_MEDIATYPES, RESET_MEDIA } from "../../misc"

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

export function resetMedia() {
    return {
        type: RESET_MEDIA
    }
}

export function getCategories() {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_API}/category/`);
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data?.categories
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function getGenres() {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_API}/genre/`);
            dispatch({
                type: GET_GENRES,
                payload: response.data?.genres
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function getMediatypes() {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_API}/mediatype/`);
            dispatch({
                type: GET_MEDIATYPES,
                payload: response.data?.mediatypes
            })
        } catch (e) {
            console.error(e)
        }
    }
}