import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIdYT, getInfo, resetUrlPlayer, addToPlaylist } from '../../middlewares/redux/actions'
import { Link } from 'react-router-dom'
import Player from './Player'
import playIconn from '../../design/ruinatv-icon-play-n.png'
import playIconb from '../../design/ruinatv-icon-play-b.png'
import userIcon from '../../design/user-icon.png'
import { getOption, createPlaylist, getAllPlaylist, addLike, getAllLikes } from '../../middlewares/redux/actions';
import OptionCanvas from '../../functions';
import { EditBtn } from '../Utils/EditBtn'
import likeIcon from '../../design/like-icon.png'
import s from './css/View.module.css'


const View = () => {
    const favs = useSelector(state=>state.allUserLikes);
    const [list, setList] = useState([]);
    let toastProperties = null;
    const showToast = (type, description) => {
      switch(type) {
        case 'success':
          toastProperties = {
            id: list.length+1,
            title: 'Success',
            description: description,
            backgroundColor: '#5cb85c'
          }
          break;
        case 'danger':
          toastProperties = {
            id: list.length+1,
            title: 'Error',
            description: description,
            backgroundColor: '#d9534f'
          }
          break;
        default:
          toastProperties = [];
      }
      setList([...list, toastProperties]);
    };

    const dispatch = useDispatch()
    const[playlistName, setPlaylistName] = useState('')
    const {id} = useParams()
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    const infoDetailViewer = useSelector(state=>state.infoDetailViewer)
    const myPlaylists = useSelector(state=>state.myPlaylists)
    const currentUser = useSelector(state=>state.currentUser)
    const idYT = useSelector(state=>state.ytPlayerState)
    const [color, setColor] = useState(1)

    function onClickValue(e){
        return (
            dispatch(getOption(e.target.id)),
            OptionCanvas(e.target.id),
            dispatch(getAllLikes(user?.userId))
        )}

    useEffect(()=>{
        dispatch(getInfo(id))
        dispatch(getAllPlaylist(user?.userId))
        dispatch(getAllLikes(user?.userId))
    },[dispatch, id, user?.userId])

    useEffect(() => {
        (favs?.filter(fav => fav.id === id).length > 0) ? setColor(0) : setColor(1)
    },[favs, id])
    function colorLike(color){
        if(favs?.length>1 && (user || currentUser)) return document.querySelector('#favViewIcon').style.filter = `grayscale(${color})`       
    }
    colorLike(color)
    const {
        linkimg,
        // idLinkSPOTY,
        // idLinkDRIVE,
        // urlLinkWEB,
        // urlLinkDOWNLOAD,
        // categories,
        info,
        connectionId,
        title,
        // genre,
        artist,
        idLinkYT,
        // mediaType
        } = infoDetailViewer?.at(0)
    // useEffect(()=>{
    //     setType(typeMediaList[dispatch(getMediaType(typeMedia)).payload])
    // },[dispatch, typeMediaList, typeMedia])

    return (
        <div className="browserBody">
            <div className='visor'>
                <div className='visorBGCanvas'>
                    <img className='visorBG' src={linkimg} alt='' />
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
                        <Player idYT={idYT} />              

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
                        {(currentUser || user)? <button className='buttonAddToFavorites' onClick={() => {
                            dispatch(addLike(user?.userId, id))
                            dispatch(getAllLikes(user?.userId))
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
                        {(currentUser || user)? <button 
                        className='buttonAddToPlaylist' 
                        onClick={()=>{
                            dispatch(getAllPlaylist(user.userId))
                            document.querySelector('.ulButtonAddItem').style.transitionDuration='.3s'
                            document.querySelector('.ulButtonAddItem').style.display='block'
                            document.querySelector('.ulButtonAddItem').style.opacity='1'
                            if(myPlaylists?.length===0) return document.querySelector('.ulButtonAddItem').style.bottom='40px'
                            if(myPlaylists?.length===1) return document.querySelector('.ulButtonAddItem').style.bottom='80px'
                            if(myPlaylists?.length===2) return document.querySelector('.ulButtonAddItem').style.bottom='120px'
                            if(myPlaylists?.length>2) return (
                                document.querySelector('.ulButtonAddItem').style.bottom='160px',
                                document.querySelector('.ulButtonAddItem').style.overflowY='scroll'
                                )
                            }}
                        >+</button> : null}
                        {(currentUser || user)?
                                <ul
                                className={'ulButtonAddItem'}
                                onMouseLeave={()=>{return(
                                    document.querySelector('.ulButtonAddItem').style.opacity='0',
                                    document.querySelector('.ulButtonAddItem').style.display='none'
                                )}}>
                                    <div className='divButtonAddItem'>
                                        {
                                            myPlaylists?.map(e=>{
                                                const listId = e.id
                                                return (
                                                    <>
                                                        <li>
                                                            <button 
                                                                className='buttonAddItem' 
                                                                value='id de este item' 
                                                                onClick={()=>dispatch(addToPlaylist(listId, connectionId))} >
                                                                    Añadir a {e.title}
                                                            </button>
                                                        </li>
                                                    </>
                                                )
                                            })
                                        }
                                        {/* <li><button className='buttonAddItem' onClick={()=>addToPlaylist()} >añadir a lista1</button></li>
                                        <li><button className='buttonAddItem' onClick={()=>addToPlaylist()} >añadir a lista2</button></li>
                                        <li><button className='buttonAddItem' onClick={()=>addToPlaylist()} >añadir a lista3</button></li>
                                        <li><button className='buttonAddItem' onClick={()=>addToPlaylist()} >añadir a lista4</button></li> */}
                                    </div>
                                    <li>
                                        <button 
                                            onClick={()=>{return(
                                            document.querySelector('.divCanvasAddListForm').style.display='block'
                                            )}}
                                            className='buttonCreateNewPlaylist'>Crear una nueva lista
                                        </button>
                                    </li>
                                </ul>
                                : null}
                            </ul></>
                        </ul>
                        <div className={'divCanvasAddListForm'}>
                            <h1>Crear una nueva Lista</h1>
                            <form>
                                <h3 style={{fontWeight:'thin'}}>Nombre de la lista</h3>
                                <input 
                                    type="text" 
                                    name='listName'
                                    onChange={(e)=> setPlaylistName(e.target.value)}
                                    placeholder='Ingresa un nombre' /> <br/><br/>
                                <input 
                                    className='button1'
                                    type="submit" 
                                    value="Crear"
                                    style={{cursor: 'pointer'}}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        dispatch(createPlaylist(playlistName, user.userId))
                                        dispatch(getAllPlaylist(user.userId))
                                        showToast('success', `Playlist "${playlistName}" creada!`)
                                        setPlaylistName('')
                                        document.querySelector('.divCanvasAddListForm').style.display='none'
                                    }}
                                    /><br/><br/>
                                <input 
                                    type="submit" 
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setPlaylistName('')
                                        document.querySelector('.divCanvasAddListForm').style.display='none'
                                    }}
                                    className='button2'
                                    style={{cursor: 'pointer'}}
                                    value="Cancelar" />
                            
                            </form>
                        </div>
                        { (currentUser || user)?
                        (          
                        <button 
                            className='buttonVer'
                            onClick={()=>{
                                return (
                                    dispatch(getIdYT(idLinkYT)),
                                    dispatch(resetUrlPlayer()),
                                    document.querySelector('#canvasYtSubBtn').style.display='flex',
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
                                document.querySelector('#slideCanvasCont').style.overflowY="hidden"
                              )
                            }}>
                            <img className='visorButtonPlay' src={userIcon} alt='visorbtn' />Ingresar
                        </button>)
                        }
                        <Link to='/browser'><button className='buttonVolver'>Volver al inicio</button></Link>
                        {
                            user?.role.userMode==='admin'? <EditBtn connectionId={connectionId} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default View