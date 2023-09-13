import axios from 'axios'
import { URL_API } from '../../config'
import {
    GET_YT_SUBSCRIBERS,
    GET_INFO,
    GET_CATEGORIAS,
    GET_MEDIATYPE,
    GET_MEDIAURL,
    RESET_MEDIA,
    NEXT_VISOR,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    SIGNUP,
    GET_IDYT,
    RESET_IDYT,
    GET_ALL_LIKES,
    GET_USERS,
    GET_EDIT_USERS,
    DELETE_USERS
} from '../../misc'
import { getMedia } from './media'

/*-----------------Admin----------------*/

/*------------------YT------------------*/
export const getYtSubs = (email) => {
    return async function (dispatch) {
        await axios.post(`${URL_API}/yt/subscription`, email)
            .then(res => {
                dispatch({
                    type: GET_YT_SUBSCRIBERS,
                    payload: res.data
                })
            })
    }
}

//----------------USERS-----------------

export function getUsers() {
    return async function (dispatch) {
        try {
            await axios.get(`${URL_API}/users/getall`)
                .then(res => {
                    dispatch({
                        type: GET_USERS,
                        payload: res.data
                    })
                })
        } catch (e) {
            console.error(e)
        }
    }
}

export const getEditUsers = (id) => {
    return async function (dispatch) {
        let res = await axios.get(`${URL_API}/users/edit/${id}`);
        return dispatch({
            type: GET_EDIT_USERS,
            payload: res.data
        })
    }
}

export const editUsers = (formdata) => {
    return async function (dispatch) {
        await axios.post(
            `${URL_API}/users/edit`,
            formdata,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        getMedia()
    }
}

export const getDeleteUsers = (id) => {
    return async function (dispatch) {
        let res = await axios.get(`${URL_API}/users/delete/${id}`);
        return dispatch({
            type: DELETE_USERS,
            payload: res.data
        })
    }
}

/*-----------------Auth----------------*/
export function getOption(e) {
    return ({
        type: OPTION,
        payload: e
    })
}
export function resetOption() {
    return ({
        type: RESET_OPTION
    })
}
export async function googleAuth() {
    return await axios.get(`${URL_API}/auth/google`)
}

export const signup = (alias, email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL_API}/users/signup`, {
            alias,
            email,
            password
        });
        const data = await response.data;
        return dispatch({
            type: SIGNUP,
            payload: data,
        });
    } catch (error) {
        console.error(error)
    }

};

/*----------------Media----------------*/
export function getIdYT(idYT) {
    return {
        type: GET_IDYT,
        payload: idYT
    }
}
export function resetIdYT() {
    return {
        type: RESET_IDYT
    }
}

export function getInfo(id) {
    return async function (dispatch) {
        try {
            await axios.get(`${URL_API}/media/${id}`)
                .then(res => {
                    if (res.data.length === 1) {
                        dispatch({
                            type: GET_INFO,
                            payload: res.data
                        })
                    }
                })
        } catch (e) {
            console.error(e)
        }
    }
}
export function getCategorias(lista) {
    const listCat = []
    lista.map((e) => { return e.categories.map(el => { return listCat.push(el) }) })
    return {
        type: GET_CATEGORIAS,
        payload: new Set(listCat)
    }
}
export function getMediaType(mediainfo) {
    return {
        type: GET_MEDIATYPE,
        payload: mediainfo
    }
}
export function getMediaUrl(mediainfo) {
    return {
        type: GET_MEDIAURL,
        payload: mediainfo
    }
}
export function resetMedia() {
    return {
        type: RESET_MEDIA
    }
}
export function getNextVisor(index) {
    return {
        type: NEXT_VISOR,
        payload: index
    }
}
export function getResetVisor() {
    return {
        type: RESET_VISOR
    }
}

/*------------Filter&Search------------*/
export function loadingSearchSet() {

}

export function searchStateChange() {

}

export function totalMedia() {

}

/* -------------Pagination------------ */

export function getAllLikes(userId) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/likes/getAll`, { userId })
            .then(res => {
                dispatch({
                    type: GET_ALL_LIKES,
                    payload: res.data
                })
            })
            .catch(e => console.error(e))
    }
}


export function addLike() {
    return;
}