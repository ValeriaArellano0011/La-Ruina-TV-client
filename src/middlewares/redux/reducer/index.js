import {
    NEXT_VISOR,
    GET_INFO,
    GET_MEDIA,
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
    GET_MUSIC_NAME,
    __GOD_MODE__,
    RESET_IDYT,
    URL_PLAYER,
    RESET_URL_PLAYER,
    CURRENT_USER,
    EDIT_MEDIA,
    GET_EDIT_MEDIA,
    GET_PLAYLIST,
    GET_ITEM_LIST,
    GET_ALL_PLAYLIST,
    GET_ALL_LIKES
} from "../../misc";

import iconYT from '../../../design/yt-icon.png'
import iconSpty from '../../../design/spty-icon.png'
import iconDrive from '../../../design/drive-icon.png'
import iconWeb from '../../../design/web-icon.png'
import iconDescarga from '../../../design/descarga-icon.png'

const initialState = {

    /*----------------Admin----------------*/
    rolUser: 'free', // s: 'admin', 'subscriber', 'colaborator', 'free'

    /*----------------Auth----------------*/
    currentUser: false,
    option: '',
    /*----------------Media----------------*/
    allUserLikes: [],
    ytPlayerState: '',
    typeMediaList:
    {
        musica:
        {
            idYT: { url: '', img: iconYT },
            idSpoty: { url: '', img: iconSpty },
            idDrive: { url: '', img: iconDrive }
        },
        serie:
        {
            idYT: { url: '', img: iconYT },
            idSpoty: { url: '', img: iconSpty },
            idDrive: { url: '', img: iconDrive },
        },
        app:
        {
            urlWeb: { url: '', img: iconWeb },
            idDrive: { url: '', img: iconDrive },
            urlDownload: { url: '', img: iconDescarga },
        },
        libro:
        {
            urlWeb: { url: '', img: iconWeb },
            idDrive: { url: '', img: iconDrive },
            urlDownload: { url: '', img: iconDescarga },
        }
    },
    mediaList: [
        {
            id: '',
            idMedia: [''],
            mediaType: [''],
            title: [''],
            artist: [''],
            tag: [''],
            visorImage: [''],
            sliderImage: [''],
            icon: [''],
            categories: [''],
            actionButton: [''],
            info: [''],
            genre: ['']
        }
    ],
    visorList: [
        {
            id: '',
            idMedia: [''],
            mediaType: [''],
            title: [''],
            artist: [''],
            tag: [''],
            visorImage: [''],
            sliderImage: [''],
            icon: [''],
            categories: [''],
            actionButton: [''],
            info: [''],
            genre: ['']
        }
    ],
    nextVisor: false,
    infoDetailViewer: [{
        linkimg: "",
        idLinkSPOTY: "",
        idLinkDRIVE: "",
        urlLinkWEB: "",
        urlLinkDOWNLOAD: "",
        categories: "",
        info: "",
        connectionId: "",
        title: "",
        genre: "",
        artist: "",
        idLinkYT: "",
        mediaType: ""
    }],
    categoryList: ["Sello Arruinados", 'Música', 'Estudio "La Ruina Records"', "En vivo", "App y descargables", "Literatura", "Series"],

    /*----------------Tienda----------------*/
    products: false,
    productDetails: [{ idProduct: '', categoryProduct: '', typeProduct: '', nameMerch: '', stock: '', idImg: '' }],

    /*------------Filter&Search------------*/
    filteredMedia: [],
    searchedMedia: [],
    mediaFound: {},
    mediaWithConnectionId: [],
    /*--------------Pagination--------------*/

    /*----------------Player----------------*/
    urlPlayer: '',
    itemList: [],
    myPlaylists: []

    /*--------------Formulario--------------*/
}

export default function rootReducer(state = initialState, action) {
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    switch (action.type) {
        /*----------------Admin----------------*/
        case __GOD_MODE__:
            return {
                ...state,
                rolUser: state.rolUser !== 'admin' ? 'admin' : 'free'
            };

        case GET_EDIT_MEDIA:
            return {
                ...state,
                mediaWithConnectionId: action.payload.files
            };
        /*----------------Auth----------------*/
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.msg ? action.payload.msg : user,
            };
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload.msg ? action.payload.msg : user,
                rolUser: action.payload.msg.role
            };
        case OPTION:
            return {
                ...state,
                option: action.payload
            };
        case RESET_OPTION:
            return {
                ...state,
                option: ''
            };
        case POST_PRODUCT:
            return {
                ...state
            };

        /*----------------Tienda----------------*/
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload
            };
        case RESET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: [{ idProduct: '', categoryProduct: '', typeProduct: '', nameMerch: '', stock: '', idImg: '' }],
            };

        /*----------------Media----------------*/
        case GET_ALL_LIKES:
            return {
                ...state,
                allUserLikes: action.payload
            };
        case GET_IDYT:
            return {
                ...state,
                ytPlayerState: action.payload
            };
        case RESET_IDYT:
            return {
                ...state,
                ytPlayerState: ''
            };

        case GET_MEDIA:
            var hash = {};
            var hash2 = {};
            var hash3 = {};
            return {
                ...state,
                mediaList: [...state.mediaList, ...action.payload.slider].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash[current.id];
                    hash[current.id] = true;
                    return exists;
                }),
                visorList: [...state.visorList, ...action.payload.visor].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash2[current.id];
                    hash2[current.id] = true;
                    return exists;
                }),

                searchedMedia: [...state.mediaList, ...action.payload.slider].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash3[current.id];
                    hash3[current.id] = true;
                    return exists;
                })
            };
        case GET_INFO:
            console.log(action.payload)

            return {
                ...state,
                infoDetailViewer: action.payload
            };
        // case GET_MEDIATYPE:
        //     return{
        //     ...state,
        //     };
        // case GET_CATEGORIAS:
        //     return{
        //         ...state,
        //         categoryList: [...new Set([...state.categoryList, ...new Set(action.payload)].filter(e=> e !== ''))]
        //     };
        case RESET_MEDIA:
            return {
                ...state,
                infoDetailViewer: [{
                    linkimg: "",
                    idLinkSPOTY: "",
                    idLinkDRIVE: "",
                    urlLinkWEB: "",
                    urlLinkDOWNLOAD: "",
                    categories: "",
                    info: "",
                    connectionId: "",
                    title: "",
                    genre: "",
                    artist: "",
                    idLinkYT: "",
                    mediaType: ""
                }],
            };
        case NEXT_VISOR:
            return {
                ...state,
                nextVisor: state.visorList.length > 1 ? [state.visorList[action.payload]] : false
            };
        case RESET_VISOR:
            return {
                ...state,
                nextVisor: false
            };

        /* ----------------------- Search ----------------------- */

        case GET_MUSIC_NAME:
            return {
                ...state,
                searchedMedia: [...action.payload]
            };
        /* ----------------------- Player ----------------------- */
        case URL_PLAYER:
            return {
                ...state,
                urlPlayer: action.payload
            }
        case RESET_URL_PLAYER:
            return {
                ...state,
                urlPlayer: '',
                itemList: []
            }
        case GET_ITEM_LIST:
            return {
                ...state,
                itemList: action.payload
            }
        case GET_ALL_PLAYLIST:
            return {
                ...state,
                myPlaylists: action.payload
            }
        default:
            return { ...state };
    }
}