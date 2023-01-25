import React, {useEffect} from 'react'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import s from './css/PlayList.module.css'
import { lists } from '../../audio/consts'
import { useDispatch, useSelector } from 'react-redux'
import { getUrlPlayer, getItemList, getAllPlaylist} from '../../middlewares/redux/actions'
import defaultImg from '../../design/lista-icon.png'
import favIcon from '../../design/like-icon.png'

export const PlayList = () => {
  const dispatch = useDispatch()
  const itemList = useSelector(state=>state.itemList)
  const myPlaylists = useSelector(state=>state.myPlaylists)
  useEffect(()=>{
    dispatch(getAllPlaylist)
  }, [dispatch])
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
        <div className={s.divPlaylistsCont}>
          <ul className={s.ulPlaylistCont}>
            <div className={s.titlePlaylistCont}>
              <p className={s.titlePlaylist}>Mis Listas</p>
            </div>
            <div className={s.divPlaylistsNames}>
              <ul className={s.ulPlaylistsNames}>  
                {
                  lists?.map((e,index)=>{
                    return(
                      <li 
                        key={index} 
                        onClick={()=>{return dispatch(getItemList(e))}}
                        className={s.liPlaylistsNames}>
                        <button 
                          onClick={()=>{return dispatch(getItemList(e))}}
                          className={s.btnPlaylistNames}>
                          <h2 className={s.listName}>{e.title}</h2>
                        </button>
                      </li>
                    )}
                  )
                }
                {
                  myPlaylists?.map((e,index)=>{
                    return(
                      <li 
                        key={index} 
                        // onClick={()=>{return dispatch(getItemList(e))}}
                        className={s.liPlaylistsNames}>
                        <button 
                          // onClick={()=>{return dispatch(getItemList(e))}}
                          className={s.btnPlaylistNames}>
                          <h2 className={s.title}>{e.title}</h2>
                        </button>
                      </li>
                    )}
                  )
                }
              </ul>
            </div>
          </ul>
        </div>
        <ul className={s.itemListCont}>
          <div className={s.listBannerCont}>
            <div className={s.cont1}>
              <div className={s.cont2}>
                <div className={s.contImg}>
                  <img className={s.imgList} src={defaultImg} alt="default" height='100px' />
                </div>
                <div  className={s.titleList}>
                  {!itemList.title? 'Seleccione una lista de reproducción'
                  :
                  <>
                    <h3>Lista</h3><br/>
                    <h1>{itemList.title}</h1><br/>
                    <h2>{itemList.items.length} items</h2>
                  </>
                  }
                </div>
              </div>
              <div className={s.cont3}>
                {
                  itemList.items? itemList.items.map((e,index)=>{
                    return(
                      <li 
                        className={s.itemListLi}
                        key={index} >
                        <button
                          className={s.itemListBtn}
                          onClick={()=>{return dispatch(getUrlPlayer(e.itemUrl))}}>
                            <ul className={s.itemInfo}>
                              <li>{e.itemId}</li> - <li>{e.itemName}</li> - <li>{e.itemArtist}</li> - <li><img className={s.favIcon} src={favIcon} alt='fav' height='20px' /></li>
                            </ul>
                        </button>
                      </li>
                    )
                  }) : null
                }
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div>
        <RequestProfile/>
      </div>
    </div>
  )
}
