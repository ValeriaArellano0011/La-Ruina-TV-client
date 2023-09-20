import s from './Viewer.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YtPlayer from '../Player/PlayerYoutube';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import OptionCanvas,  { $d } from '../../../functions';
import { ContentMagementButtons } from '../../admin/Buttons/ContentMagementButtons';
import { getOption, addLike, getYtSubs } from '../../../middlewares/redux/actions';
import { getMediaById } from '../../../middlewares/redux/actions/media';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';

const MediaViewer = () => {
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const YTSub = useSelector(state=>state.YTSub);
    const favs = useSelector(state=>state.allUserLikes);
    const currentUser = useSelector(state=>state.currentUser);
    const infoDetailViewer = useSelector(state=>state.infoDetailViewer);
    const [color, setColor] = useState(1);

    useEffect(()=>{ dispatch(getMediaById(id)) },[dispatch, id]);

    function onClickValue(e){ return ( dispatch(getOption(e.target.id)), OptionCanvas(e.target.id) )};

    useEffect(() => { (favs?.filter(fav => fav.id === id).length > 0) ? setColor(0) : setColor(1) },[favs, id]);

    function colorLike(color){ if(favs?.length>1 && currentUser) return $d('#favViewIcon').style.filter = `grayscale(${color})`};

    colorLike(color);

    const {
        imageSlider,
        info,
        title,
        artist,
        idLinkYT,
        } = infoDetailViewer;

    return (
        <div className={s.browserBody}>
            <div className={s.visor}>
                <div className={s.visorBGCanvas}>
                    <img className={s.visorBG} src={RenderDriveImage(imageSlider)} alt='' />
                </div>
                <div className='visorCanvas'></div>
                <div className='playerBackGroundEffect'></div>
                <div className={s.sectionsContainer}>
                    <section className={s.playerSection}>
                    { currentUser && <YtPlayer idLinkYT={ idLinkYT }/> }
                    </section>
                    <section className={s.visorPostInfo}>
                        <div className={s.infoContainer}>
                            <div className={s.visorPostArtista}>
                            { currentUser?.role==='admin' && <ContentMagementButtons id={id}/> }
                                <p>{artist}</p>
                            </div>
                            <div className={s.visorPostTitulo}>
                                <p>{title}</p>
                            <div className={s.visorInfo}>
                                <p>{info}</p>
                            </div>
                        </div>
                        <div className={s.viewMediaTypesCont}>
                            <ul className={s.viewMediaTypesList}>
                            {   currentUser &&   
                                <button className='buttonAddToFavorites' onClick={() => { dispatch(addLike(currentUser?.id, id)) }}>
                                    <img 
                                        className={s.favIcon}
                                        id="favViewIcon"
                                        src={likeIcon} 
                                        alt='add favorites' 
                                        width='25px' 
                                    />
                                </button>
                            }
                            </ul>
                            {   currentUser
                            ?   (<button 
                                    className='buttonVer'
                                    onClick={() => {
                                        return (
                                            dispatch(getYtSubs(currentUser?.email)),
                                            (YTSub? $d('#canvasYtSubBtn').style.display='none' : $d('#canvasYtSubBtn').style.display='flex'),
                                            $d('.playerBackGroundEffect').style.opacity='1',
                                            $d('.playerLi').style.display='block',
                                            $d('.playUl').style.opacity='1'
                                        )                           
                                    }}
                                    onMouseEnter={()=>{
                                        $d('.visorButtonPlay').src=playIconb
                                    }}
                                    onMouseLeave={()=>{
                                        $d('.visorButtonPlay').src=playIconn
                                    }}>
                                        <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />Ver ahora
                                </button>)
                            :   (<button 
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
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    )
}

export default MediaViewer;