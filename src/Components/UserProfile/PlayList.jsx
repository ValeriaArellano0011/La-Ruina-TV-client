import React from 'react'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import s from './css/PlayList.module.css'
import audio from '../../audio/audio.mp3'
import { lists } from '../../audio/consts'
import { useDispatch } from 'react-redux'
import { getUrlPlayer, resetUrlPlayer } from '../../middlewares/redux/actions'

export const PlayList = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
        <ul className={s.ulPlaylistCont}>
          {
            lists?.map((e,index)=>{
              return( 
              <>
              <li className={s.liPlaylistsNames}><h2 className={s.listName}>{e.listName}</h2></li>
              <li key={index} className={s.liPlaylists}>
                {
                  e.items?.map((e,index)=>{
                    return(
                      <li key={index}>
                        <button
                          className={s.itemListBtn}
                          onClick={()=>{return dispatch(getUrlPlayer(e.itemUrl))}}>
                            {e.itemId} - {e.itemName}
                        </button>
                      </li>
                    )
                  })
                }
              </li>
              </>
            )})
          }
        </ul>
        <div>
          {/* <button className={s.urlBtn} onClick={()=>{return dispatch(getUrlPlayer(audio))}}>TEST</button> */}
          <button className={s.urlBtn} onClick={()=>{return dispatch(resetUrlPlayer())}}>RESET</button>
        </div>
        <RequestProfile/>
      </div>
    </div>
  )
}
