import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIdYT, getInfo, resetUrlPlayer } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'
import Player from './Player'
import playIconn from '../../design/ruinatv-icon-play-n.png'
import playIconb from '../../design/ruinatv-icon-play-b.png'
import userIcon from '../../design/user-icon.png'
import { getOption } from '../../middlewares/redux/actions';
import OptionCanvas from '../../functions';
import { YtSubscribeButton } from '../Utils/YtSubscribeButton'

const View = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    function onClickValue(e){
        return (
            dispatch(getOption(e.target.id)),
            OptionCanvas(e.target.id)
        )}

    useEffect(()=>{
        dispatch(getInfo(id))
    },[dispatch, id])
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    const infoDetailViewer = useSelector(state=>state.infoDetailViewer)
    const currentUser = useSelector(state=>state.currentUser)
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
        <div className="browserBody">
            {/* <YtSubscribeButton /> */}
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
                        { (currentUser || user)?
                        (<button 
                            className='buttonVer'
                            onClick={()=>{
                                return (
                                    dispatch(getIdYT(idLinkYT)),
                                    dispatch(resetUrlPlayer()),
                                    document.querySelector('.playerCont').style.opacity='1',
                                    document.querySelector('#ytplayer').style.display='block',
                                    document.querySelector('.playerLi').style.scale='1',
                                    document.querySelector('.playUl').style.scale='1'
                                )}}
                            onMouseEnter={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconb
                            }}

                            onMouseLeave={()=>{
                                document.querySelector('.visorButtonPlay').src=playIconn
                            }}>
                                <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />Ver ahora
                        </button>)
                        : 
                        (<button 
                            className='buttonVer'
                            id='login'
                            onClick={(e) => {
                                return(
                                onClickValue(e), 
                                document.querySelector('#slideCanvasCont').style.overflowY="hidden"
                              )
                            }}>
                            <img className='visorButtonPlay' src={userIcon} alt='visorbtn' />Ingresar
                        </button>)
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