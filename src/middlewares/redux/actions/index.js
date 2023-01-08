import axios from 'axios'
import { URL_API } from '../../misc/config'
import { 
    GET_POSTS, 
    GET_INFO, 
    GET_CATEGORIAS, 
    GET_MEDIATYPE, 
    GET_MEDIAURL, 
    RESET_MEDIA, 
    NEXT_VISOR, 
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    LOG_IN,
    CREATE_ACOOUNT,
    } from '../../misc'

/*-----------------Auth----------------*/
export function getOption(e) {
    return({
        type: OPTION,
        payload: e
    })
}

export function resetOption() {
    return({
        type: RESET_OPTION
    })
}

export function createAccount(newUser){
    return async function (dispatch){
    await axios.post(`${URL_API}/users/create`, newUser)
    .then(res => {
        dispatch({
            type: CREATE_ACOOUNT,
            payload: res.data,
        })
    })
    .catch(error => {
        return { payload: error };
    })}
}

export function logIn(input){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/user/login`,input)
        .then(res => {
            dispatch({
                type: LOG_IN,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

/*----------------Posts----------------*/
export function getPosts() {
    return async function(dispatch) {
        await axios.get(`${URL_API}/posts/getall`)
        .then(res =>{
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getInfo(id) {
    return async function(dispatch) {
        await axios.get(`${URL_API}/posts/${id}`)
        .then(res =>{
            dispatch({
                type: GET_INFO,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getCategorias(lista) {
    const listCat = []
    lista.map((e)=>{return e.categoria.map(el=>{return listCat.push(el)})})
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
        type: RESET_MEDIA,
        payload: []
    }
}

export function getNextVisor(index){
    return {
        type: NEXT_VISOR,
        payload: index
    }
}

export function getResetVisor(){
    return {
        type: RESET_VISOR
    }
}
/*------------Filter&Search------------*/
export function loadingSearchSet(){

}

export function searchMedia(){

}

export function searchStateChange(){

}

export function totalMedia(){
    
}


/*--------------Pagination-------------*/
