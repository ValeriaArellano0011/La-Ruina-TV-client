import React from 'react'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import s from './css/PlayList.module.css'
import audio from '../../audio/audio.mp3'
import lists from '../../audio/consts'
import { useDispatch } from 'react-redux'
import { getUrlPlayer, resetUrlPlayer } from '../../middlewares/redux/actions'

export const PlayList = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
        <ul className={s.ulListCont}>
          {
            lists?.map((e,index)=>{
              return(
              <li key={index} className={s.liListCont}>
                <h2>{e.listName}</h2>
                {
                  e.items?.map((e,index)=>{
                    return(
                      <li key={index}>
                        <button 
                          className={s.buttonItem}
                          onClick={()=>{return dispatch(getUrlPlayer(e.itemUrl))}}>
                            <h3>{e.itemId} - {e.itemName}</h3>
                          </button>
                      </li>
                    )
                  })
                }
              </li>
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
