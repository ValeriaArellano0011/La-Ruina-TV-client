import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIdYT, getInfo } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'
import Player from './Player'
import playIconn from '../../design/ruinatv-icon-play-n.png'
import playIconb from '../../design/ruinatv-icon-play-b.png'

const View = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getInfo(id))
    },[dispatch, id])
    const infoDetailViewer = useSelector(state =>state.infoDetailViewer)
    const idYT = useSelector(state=>state.ytPlayerState)
    const {
        linkimg,
        idLinkSPOTY,
        idLinkDRIVE,
        urlLinkWEB,
        urlLinkDOWNLOAD,
        categories,
        info,
        connectionId,
        title,
        genre,
        artist,
        idLinkYT,
        mediaType
        } = infoDetailViewer?.at(0)
    // useEffect(()=>{
    //     setType(typeMediaList[dispatch(getMediaType(typeMedia)).payload])
    // },[dispatch, typeMediaList, typeMedia])

    return (
        <div>
            <div className='visor'>
                <div className='visorBGCanvas'>
                    <img className='visorBG' src={linkimg} alt='' />
                </div>
                <div className='visorCanvas'></div>
                <div className='visorPostInfo'>
                    <div className='visorPostArtista'>
                        <p>{artist}</p>
                    </div>
                    <div className='visorPostTitulo' id='viewPostTitulo'>
                    <p>{title}</p>
                    <div className='visorInfo'>
                        <h3>{info}</h3>
                    </div>
                    <div className='viewMediaTypesCont'>
                        <ul className='viewMediaTypesList'>
                            {/* {
                                Object.entries(type).map((el)=>{
                                    return(
                                    el.map((e)=>{
                                    return(
                                        <li className='viewLiImg' key={e}><a href={`${e.url}${mediaLink}`}><img className='viewLiIcon' src={e.img} alt="" /></a></li>
                                        )
                                    }))
                                })
                            } */}
                        </ul>
                        <Player idYT={idYT} />
                        {
                        <button 
                        onClick={()=>{
                            return (
                            dispatch(getIdYT(idLinkYT)),
                            document.querySelector('.playerCont').style.opacity='1',
                            document.querySelector('#ytplayer').style.display='block',
                            document.querySelector('.playerLi').style.scale='1',
                            document.querySelector('.playUl').style.scale='1'
                            )}}
                            className='buttonVer'
                        onMouseEnter={()=>{
                            document.querySelector('.visorButtonPlay').src=playIconb
                        }}

                        onMouseLeave={()=>{
                            document.querySelector('.visorButtonPlay').src=playIconn
                        }}>
                            <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />Ver ahora
                        </button>
                        }
                        <Link to='/browser'><button className='buttonVolver'>Volver al inicio</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View