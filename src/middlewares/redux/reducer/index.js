import { 
    NEXT_VISOR, 
    GET_CATEGORIAS, 
    GET_INFO,
    GET_MEDIATYPE, 
    GET_POSTS,
    RESET_MEDIA,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    LOGIN,
    GET_PRODUCTS,
    POST_PRODUCT, 
    GET_PRODUCT_DETAILS,
    RESET_PRODUCT_DETAILS,
    GET_IDYT,
    RESET_IDYT} from "../../misc";

import iconYT from '../../../design/yt-icon.png'
import iconSpty from '../../../design/spty-icon.png'
import iconDrive from '../../../design/drive-icon.png'
import iconWeb from '../../../design/web-icon.png'
import iconDescarga from '../../../design/descarga-icon.png'

const initialState = {

/*----------------Admin----------------*/
    rolUser: 'admin', // roles: 'admin', 'subscriber', 'colaborator'

/*----------------Auth----------------*/
    currentUser: false,
    option: '',

/*----------------Media----------------*/
    ytPlayerState: '',
    typeMediaList: 
        {
            musica:
                {
                    idYT:{url:'', img:iconYT}, 
                    idSpoty:{url:'', img:iconSpty}, 
                    idDrive:{url:'', img:iconDrive}
                },
            serie:
                {
                    idYT:{url:'', img:iconYT},
                    idSpoty:{url:'', img:iconSpty}, 
                    idDrive:{url:'', img:iconDrive},
                },
            app: 
                {
                    urlWeb:{url:'', img:iconWeb},
                    idDrive:{url:'', img:iconDrive},
                    urlDownload:{url:'', img:iconDescarga},
                },
            libro:
                {
                    urlWeb:{url:'', img:iconWeb},
                    idDrive:{url:'', img:iconDrive},
                    urlDownload:{url:'', img:iconDescarga},
                }
    },
    postList: [
        {
            id:[''],
            idMedia:[''],
            mediaType:[''],
            title:[''],
            artist:[''],
            tag:[''],
            visorImage:[''],
            sliderImage:[''],
            icon:[''],
            categories:[''],
            actionButton:[''],
            info:[''],
            genre: ['']
        }
    ],
    nextVisor: false,
    infoDetailViewer: {urlID: {idYT:''}},
    categoryList: ["Sello Arruinados", 'Música',  'Estudio "La Ruina Records"', "En vivo", "App y descargables", "Literatura", "Series"],

/*----------------Tienda----------------*/
    products: false,
    productDetails: [{idProduct:'', categoryProduct:'', typeProduct:'', nameMerch:'', stock:'', idImg:''}],

/*------------Filter&Search------------*/
    filteredMedia: [],
    searchedMedia: [],
    mediaFound: {},

/*--------------Pagination--------------*/
/*--------------Formulario--------------*/
}



export default function rootReducer(state = initialState, action){
    switch (action.type){
/*----------------Auth----------------*/

        case LOGIN:
            return {
            ...state,
            currentUser: action.payload.msg.userAlias
            }
        case OPTION:
            return{
                ...state,
                option: action.payload
            }
        case RESET_OPTION:
            return{
                ...state,
                option:''
            }
        case POST_PRODUCT:
            return{
                ...state
            }     

/*----------------Tienda----------------*/
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_DETAILS:
            return{
                ...state,
                productDetails: action.payload
            }
        case RESET_PRODUCT_DETAILS:
            return{
                ...state,
                productDetails: [{idProduct:'', categoryProduct:'', typeProduct:'', nameMerch:'', stock:'', idImg:''}],
            }

/*----------------Media----------------*/
        case GET_IDYT:
            return{
                ...state,
                ytPlayerState: action.payload
            }
        case RESET_IDYT:
            return{
                ...state,
                ytPlayerState: ''
            }
        case GET_POSTS:
            return{
                ...state,
                postList: action.payload
            }
        case GET_INFO:
            return{
                ...state,
                infoDetailViewer: action.payload.at(0)
            }
        case GET_MEDIATYPE:
            return{
            ...state,
            }
        case GET_CATEGORIAS:
            return{
                ...state,
                categoryList: [...new Set([...state.categoryList, ...new Set(action.payload)].filter(e=> e !== ''))]
            }
        case RESET_MEDIA:
            return{
                ...state,
                infoDetailViewer: {urlID: {idYT:''}},
            }
        case NEXT_VISOR:
            return{
                ...state,
                nextVisor: state.postList.length>1? [state.postList[action.payload]] : false
            }
        case RESET_VISOR:
            return{
                ...state,
                nextVisor: false
            }
        default:
            return {...state}
    }
}