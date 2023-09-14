import s from './View.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YtPlayer from './PlayerYoutube';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import OptionCanvas,  { $d } from '../../../functions';
import { EditBtn } from '../Utils/EditBtn';
import PlayerDrive from './PlayerDrive';
import { getIdYT } from '../../../middlewares/redux/actions';
import { getOption, addLike, getYtSubs } from '../../../middlewares/redux/actions';
import { getMediaById } from '../../../middlewares/redux/actions/media';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';

const View = () => {
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const YTSub = useSelector(state=>state.YTSub);
    const favs = useSelector(state=>state.allUserLikes);
    const idYT = useSelector(state=>state.ytPlayerState);
    const currentUser = useSelector(state=>state.currentUser);
    const infoDetailViewer = useSelector(state=>state.infoDetailViewer);
    const [color, setColor] = useState(1);

    useEffect(()=>{
        dispatch(getMediaById(id))
    },[dispatch, id]);

    function onClickValue(e){
        return (
            dispatch(getOption(e.target.id)),
            OptionCanvas(e.target.id)
        )}

    useEffect(() => {
        (favs?.filter(fav => fav.id === id).length > 0) ? setColor(0) : setColor(1)
    },[favs, id]);
    function colorLike(color){
        if(favs?.length>1 && currentUser) return $d('#favViewIcon').style.filter = `grayscale(${color})`       
    }
    colorLike(color)
    const {
        imageSlider,
        info,
        connectionId,
        title,
        artist,
        idLinkYT,
        } = infoDetailViewer

    return (
        <div className="browserBody">
            <div className='visor'>
                <div className='visorBGCanvas'>
                    <img className='visorBG' src={RenderDriveImage(imageSlider)} alt='' />
                </div>
                <div className='visorCanvas'></div>
                <div className='visorPostInfo'>
                    <div className='visorPostArtista'>
                        <p>
                            {artist}
                        </p>
                    </div>
                    <div className='visorPostTitulo' id='viewPostTitulo'>
                        <p>
                            {title}
                        </p>
                    <div className='visorInfo'>
                        <h3>
                            {info}
                        </h3>
                    </div>
                    <div className='viewMediaTypesCont'>
                        <ul className='viewMediaTypesList'>
                        {currentUser?.role === 'free' ? <YtPlayer idYT={idYT} /> : <PlayerDrive idDrive={'1FzIgns7wSLqG4DDjdaY1Eo8PVp0YqXad'}/>}              

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
                        {currentUser? <button className='buttonAddToFavorites' onClick={() => {
                            dispatch(addLike(currentUser?.id, id))
                        }}>
                            <img 
                                className={s.favIcon}
                                id="favViewIcon"
                                src={likeIcon} 
                                alt='add favorites' 
                                width='25px' 
                            />
                            </button> : null}
                        <><ul>
                        {currentUser? <button 
                        className='buttonAddToPlaylist' 
                        onClick={()=>{
                            $d('.ulButtonAddItem').style.transitionDuration='.3s'
                            $d('.ulButtonAddItem').style.display='block'
                            $d('.ulButtonAddItem').style.opacity='1'
                            }}
                        >+</button> : null}

                            </ul></>
                        </ul>
                        <div className={'divCanvasAddListForm'}>
                            <h1>Crear una nueva Lista</h1>
                            <form>
                                <h3 style={{fontWeight:'thin'}}>Nombre de la lista</h3>
                                <input 
                                    type="text" 
                                    name='listName'
                                    placeholder='Ingresa un nombre' /> <br/><br/>
                                <input 
                                    className='button1'
                                    type="submit" 
                                    value="Crear"
                                    style={{cursor: 'pointer'}}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        $d('.divCanvasAddListForm').style.display='none'
                                    }}
                                    /><br/><br/>
                                <input 
                                    type="submit" 
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        $d('.divCanvasAddListForm').style.display='none'
                                    }}
                                    className='button2'
                                    style={{cursor: 'pointer'}}
                                    value="Cancelar" />
                            
                            </form>
                        </div>
                        { currentUser?
                        (
                        <button 
                            className='buttonVer'
                            onClick={()=>{
                                if(currentUser?.role==='free') return (
                                    dispatch(getYtSubs(currentUser?.email)),
                                    dispatch(getIdYT(idLinkYT)),
                                    (YTSub? $d('#canvasYtSubBtn').style.display='none' : $d('#canvasYtSubBtn').style.display='flex'),
                                    $d('.playerCont').style.opacity='1',
                                    $d('#ytplayer').style.display='block',
                                    $d('.playerLi').style.scale='1',
                                    $d('.playUl').style.scale='1'
                                )
                                if(currentUser?.role==='admin' || currentUser?.role==='subscriber' ) return (
                                    $d('.playerCont1').style.opacity='1',
                                    $d('.playerLi1').style.scale='1',
                                    $d('.playerUl1').style.scale='1'
                                )                            
                            }}
                            onMouseEnter={()=>{
                                $d('.visorButtonPlay').src=playIconb
                            }}
                            onMouseLeave={()=>{
                                $d('.visorButtonPlay').src=playIconn
                            }}>
                                <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />Ver ahora
                        </button>
                        )
                        : 
                        (
                        <button 
                            className='buttonVer'
                            id='login'
                            onClick={(e) => {
                                return(
                                onClickValue(e),
                                $d('#slideCanvasCont').style.overflowY="hidden"
                              )
                            }}>
                            <img className='visorButtonPlay' src={userIcon} alt='visorbtn'/>
                            Ingresar
                        </button>)
                        }
                        <Link to='/browser'><button className='buttonVolver'>Volver al inicio</button></Link>
                        {
                            currentUser?.role==='admin'? <EditBtn connectionId={connectionId} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default View;