import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNextVisor, getResetVisor } from '../../middlewares/redux/actions';
import playIconb from '../../design/ruinatv-icon-play-b.png'
import playIconn from '../../design/ruinatv-icon-play-n.png'
import visorIntroVideo from '../../design/laruina-intro.mp4'

const Visor = () => {
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
    const {idMedia, id, visorImage, artist, title, typeMedia, tag, icon, actionButton, info} = nextVisor? nextVisor.at(0) : nextVisor
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
            setVisorImage(visorImage)
            setVisorIcon(icon)
            setVisorBtn1(actionButton)
            setVisorUrlID(idMedia)
            setVisorTitulo(title)
            setVisorArtista(artist)
            setVisorTypeMedia(typeMedia)
                        
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
    },[actionButton, idMedia, id, visorImage, artist, title, typeMedia, tag, icon, info, cont, visorList, dispatch])


    return(
        <div className='visor'>
            <video className='visorVideoIntro' src={visorIntroVideo} autoPlay={true} loop muted  type="video/mp4"/>
            <div className='visorBGCanvas'>
                <img className='visorBG' src={visorImg} alt='' />
            </div>
            <div className='visorCanvas'></div>
            {visorList?
            (<div className='visorPostInfo'>
                <div className='visorPostArtista'>
                    <p>{visorArtist}</p>
                </div>
                <div className='visorPostTitulo'>
                    <p>{visorTitle}</p>
                    <div className='visorInfo'><h3>{visorInfo}</h3></div>
                    <ul className='visorBtn'>
                        <li><Link to={`/view/v=${visorUrlID?.idYT}=_type_=${visorTypeMedia}=_id_=${visorID}`}>
                            <button 
                            className='button1'
                            id={visorID}
                            urlid={visorUrlID}
                            titulo={visorTitle}
                            artista={visorArtist}
                            img={visorImg}
                            tag={visorTag? visorTag : null}
                            onClick={()=>{window.scrollTo(0, 0)}}
                            onMouseEnter={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconb
                            }}

                            onMouseLeave={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconn
                            }}
                            >
                            <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />{visorBtn1? visorBtn1 : 'Ver más'}</button></Link></li>
                        <li><button className='button2'>Más información</button></li>
                    </ul>
                    <ul className='visorIcons'>
                        {
                            visorIcon?.map((e)=>{
                                return(
                                <li key={e}><img className='visorTagIcon' src={e} alt="" /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>) : null}
        </div>
    )
}
export default Visor