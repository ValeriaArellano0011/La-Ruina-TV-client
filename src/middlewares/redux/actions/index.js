import axios from 'axios'
import { URL_API } from '../../misc/config'
import { 
    GET_MEDIA, 
    GET_INFO, 
    GET_CATEGORIAS, 
    GET_MEDIATYPE, 
    GET_MEDIAURL, 
    RESET_MEDIA, 
    NEXT_VISOR, 
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    LOGIN,
    SIGNUP,
    GET_PRODUCTS,
    GET_PRODUCT_DETAILS,
    POST_PRODUCT,   
    POST_MEDIA,
    RESET_PRODUCT_DETAILS,
    GET_IDYT,
    RESET_IDYT,
    GET_MUSIC_NAME,
    URL_PLAYER,
    RESET_URL_PLAYER,
    CURRENT_USER,
    GET_EDIT_MEDIA,
    REMOVE_MEDIA,
    EDIT_MEDIA,
    ADD_TO_PLAYLIST,
    DELETE_FROM_PLAYLIST,
    CREATE_PLAYLIST,
    DELETE_PLAYLIST,
    GET_ITEM_LIST,
    GET_PLAYLIST,
    GET_ALL_PLAYLIST,
    GET_ALL_LIKES
    } from '../../misc'

/*-----------------Admin----------------*/
    export const getEditMedia = (id) =>   {
        return async function (dispatch) {
            let res = await axios.get(`${URL_API}/media/edit/${id}`);
            console.log(res.data)
            return dispatch ({
                type: GET_EDIT_MEDIA,
                payload: res.data
            })
        }
    }

    export const editMedia = (formdata) =>   {
        return async function (dispatch) {
            let res = await axios.post(
                `${URL_API}/media/edit`, 
                formdata,
                {headers: {'Content-Type': 'multipart/form-data'}}
            );
            console.log(res.data)
            getMedia()
        }
    }

    export const getDeleteMedia = (id) =>   {
        return async function (dispatch) {
            let res = await axios.get(`${URL_API}/media/delete/${id}`);
            return dispatch ({
                type: EDIT_MEDIA,
                payload: res.data
            })
        }
    }


    export const _GOD_MODE_ = () => {
        return async function (dispatch) {
            return dispatch ({
                type:'__GOD_MODE__'
            })
        }
    };
    export const postProduct = (post) => {
        return async function (dispatch) {
            let json = await axios.post(`${URL_API}/post/product`, post);
            return dispatch ({
                type: POST_PRODUCT,
                payload: json.data
            })
        }
    };
    export const postMedia = (formData) => {
        return async function (dispatch) {
            const response = await axios.post(
                `${URL_API}/media/upload`,
                formData,
                {headers: {'Content-Type': 'multipart/form-data'}}
              );
            
            return dispatch ({
                type: POST_MEDIA,
                payload: response.data
            })
        }
    };
    // export const getPosts = () => {
    //     return async function (dispatch) {
    //         const response = await axios.get(
    //             `${URL_API}/media/getall`
    //         );
    //         return dispatch ({
    //             type: GET_MEDIA,
    //             payload: response.data
    //         })
    //     }
    // };

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

export async function googleAuth(){
    return await axios.get(`${URL_API}/auth/google`)
}

export function getCurrentUser() {
    return{
        type: CURRENT_USER
    }
}

export function login(email, password){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/users/login`, {email, password})
        .then(res => {
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function loginWithGoogle(accessToken){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/users/loginwithgoogle`, {accessToken})
        .then(res => {
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export const signup =
  (alias, email, password) => async (dispatch) => {
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
        console.log(error)
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

export function getMedia() {
    return async function(dispatch) {
        try {
            await axios.get(`${URL_API}/media/getall`)
            .then(res =>{
                console.log(res.data)
                dispatch({
                    type: GET_MEDIA,
                    payload: res.data
                })
            })
        } catch(e) {
            console.log(e)
        }
    }
}

export function getInfo(id) {
    return async function(dispatch) {
        try{
            await axios.get(`${URL_API}/media/${id}`)
            .then(res =>{
                if (res.data.length===1){
                dispatch({
                    type: GET_INFO, 
                    payload: res.data
                })
            }})
        } catch(e) {
            console.log(e)
        }
    }
}

export function getCategorias(lista) {
    const listCat = []
    lista.map((e)=>{return e.categories.map(el=>{return listCat.push(el)})})
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

/*---------------Tienda---------------*/
export function getProducts(){
    return async function (dispatch){
        await axios.get(`${URL_API}/product/all`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getProductDetails(id) {
    return async function(dispatch) {
        await axios.get(`${URL_API}/product/${id}`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCT_DETAILS,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function resetProductDetails() {
    return {
        type: RESET_PRODUCT_DETAILS
    }
}

/*------------Filter&Search------------*/
export function loadingSearchSet(){

}

export function getMusicName(name){
    return async function (dispatch){
        await axios.get(`${URL_API}/media/search/s?name=${name}`)
        .then(res => {
            console.log('el obj music name', res.data)
            dispatch({
                type: GET_MUSIC_NAME,
                payload: res.data,
            });
        })
        .catch((e) => {
            console.log(e)
            });
        }
    }

export function searchStateChange(){

}

export function totalMedia(){
    
}

/* -------------Pagination------------ */

/* ---------------Player-------------- */
export function getUrlPlayer(url){
    return {
        type: URL_PLAYER,
        payload: url
    }
}
export function resetUrlPlayer(){
    return {
        type: RESET_URL_PLAYER
    }
}

export function addLike(idSong, urlId) {
    return async function(dispatch) {
        await axios.post(`${URL_API}/likes/add`, {idSong, urlId})
        .then(res =>{
            console.log('like id qcyoo', res.data)
            dispatch({
                type: 'LIKE',
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}

export function getAllLikes(userId) {
    return async function(dispatch) {
        await axios.post(`${URL_API}/likes/getAll`, {userId})
        .then(res =>{
            console.log(res.data)
            dispatch({
                type: GET_ALL_LIKES,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
    }
}


/* -------------PlayList------------- */
export function getAllPlaylist(userId){
    return async function (dispatch){
        await axios.post(`${URL_API}/playlist/all`, {userId})
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_ALL_PLAYLIST,
                payload: res.data
            })
        })
    }
}

export function createPlaylist(playlistName, idUser){
    return async function (){ 
        console.log(idUser)
        await axios.post(`${URL_API}/playlist/create`, {playlistName, idUser})
        .then(res => {
            console.log(res.data)
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function addToPlaylist(item){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/users/playlists/add`, item)
        .then(res => {
            dispatch({
                type: ADD_TO_PLAYLIST,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function getItemList(items){
    return {
        type: GET_ITEM_LIST,
        payload: items
    }
}