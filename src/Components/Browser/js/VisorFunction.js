import { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getNextVisor, getResetVisor } from '../../../middlewares/redux/actions';

export const VisorFunction = () =>{
    document.addEventListener('mouseup', function(e) {
        var container0 = document.getElementById('infoCont');
        if (!container0.contains(e.target))
        {
            document.querySelector('#infoCont').style.scale='0'
        }
    })
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    const currentUser = useSelector(state=>state.currentUser)
    const dispatch = useDispatch()
    const visorList = useSelector(state=>state.visorList)
    const nextVisor = useSelector(state=>state.nextVisor)
    const [cont, setI] = useState(0)
    const [visorID, setVisorID] = useState()
    const [visorTag, setVisorTag] = useState()
    const [visorBtn1, setVisorBtn1] = useState()
    const [visorInfo, setVisorInfo] = useState()
    const [visorIcon, setVisorIcon] = useState()
    const [visorImg, setVisorImage] = useState()
    const [visorUrlID, setVisorUrlID] = useState()  
    const [visorTitle, setVisorTitulo] = useState()
    const [visorArtist, setVisorArtista] = useState()
    const [visorTypeMedia, setVisorTypeMedia] = useState()
    const [visorIdYT, setVisorIdYT] = useState()
    const {idMedia, id, idLinkYT, linkimg, artist, title, mediaType, tag, icon, actionButton, info} = nextVisor? nextVisor.at(0) : nextVisor
    useEffect(() => {
        let inf = 99999+cont
        const max = visorList? visorList.length : 0
        let timeInterval = 20
        let interval = null
        dispatch(getNextVisor(cont%max))
        interval = setInterval(()=>{    
            dispatch(getResetVisor())
            setI(k=>k+1)
            setVisorID(id)
            setVisorTag(tag)
            setVisorInfo(info)
            setVisorImage(linkimg)
            setVisorIcon(icon)
            setVisorBtn1(actionButton)
            setVisorUrlID(idMedia)
            setVisorTitulo(title)
            setVisorArtista(artist)
            setVisorTypeMedia(mediaType)
            setVisorIdYT(idLinkYT)            
            document.querySelector('.visorPostInfo').style.animationName='infoScale'
            document.querySelector('.visorPostInfo').style.animationIterationCount=inf
            document.querySelector('.visorPostInfo').style.animationDuration=`${timeInterval}s`
            document.querySelector('.visorBtn').style.scale='1'
            document.querySelector('.visorBG').style.animationName='aniScale'
            document.querySelector('.visorBG').style.animationIterationCount=inf
            document.querySelector('.visorBG').style.animationDuration=`${timeInterval}s`
            document.querySelector(`.visor`).style.transform='translateX(0)'
        }, timeInterval*1000)
        return () =>  (clearInterval(interval, timeInterval))
    },[actionButton,visorIdYT, idMedia, id, linkimg, idLinkYT, visorImg, artist, title, mediaType, tag, icon, info, cont, visorList, dispatch])
    return {
        visorList,
        nextVisor,
        visorIdYT,
        visorID,
        visorTag, 
        visorBtn1, 
        visorInfo, 
        visorIcon, 
        visorImg, 
        visorUrlID, 
        visorTitle, 
        visorArtist, 
        visorTypeMedia,
        currentUser,
        user
    }
}

