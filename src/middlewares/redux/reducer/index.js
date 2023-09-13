import {
    NEXT_VISOR,
    GET_INFO,
    GET_MEDIA,
    RESET_MEDIA,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    GET_IDYT,
    __GOD_MODE__,
    RESET_IDYT,
    GET_ALL_LIKES,
    GET_YT_SUBSCRIBERS,
    CURRENT_USER,
    UPDATE_MEDIA
} from "../../misc";

import iconYT from '../../../assets/images/yt-icon.png'
import iconSpty from '../../../assets/images/spty-icon.png'
import iconDrive from '../../../assets/images/drive-icon.png'
import iconWeb from '../../../assets/images/web-icon.png'
import iconDescarga from '../../../assets/images/descarga-icon.png'


const userData = localStorage.getItem('userData');
const currentUser = userData ? JSON.parse(userData) : null;

const initialState = {

    /*----------------Admin----------------*/
    YTSub: false,
    /*----------------Auth----------------*/
    currentUser,
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

    /*------------Filter&Search------------*/
    filteredMedia: [],
    searchedMedia: [],
    mediaFound: {},
    mediaWithConnectionId: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        /*----------------Admin----------------*/
        case __GOD_MODE__:
            window.location.reload()
            return {
                ...state,
            };

        case UPDATE_MEDIA:
            return {
                ...state,
                mediaWithConnectionId: action.payload.files
            };
        /*----------------YT----------------*/
        case GET_YT_SUBSCRIBERS:
            return {
                ...state,
                YTSub: action.payload
            };
        /*----------------Auth----------------*/
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
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
                mediaList: [...state.mediaList, ...action.payload?.slider].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash[current.id];
                    hash[current.id] = true;
                    return exists;
                }),
                visorList: [...state.visorList, ...action.payload?.visor].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash2[current.id];
                    hash2[current.id] = true;
                    return exists;
                }),

                searchedMedia: [...state.mediaList, ...action.payload?.slider].filter(e => e.id !== '').filter(function (current) {
                    var exists = !hash3[current.id];
                    hash3[current.id] = true;
                    return exists;
                })
            };
        case GET_INFO:
            return {
                ...state,
                infoDetailViewer: action.payload
            };
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

        default:
            return { ...state };
    }
}