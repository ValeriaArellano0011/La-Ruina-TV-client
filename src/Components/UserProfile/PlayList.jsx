import React from 'react'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import s from './css/PlayList.module.css'
import audio from '../../audio/audio.mp3'
import { useDispatch } from 'react-redux'
import { getUrlPlayer, resetUrlPlayer } from '../../middlewares/redux/actions'
import { SpectreVisor } from '../Utils/SpectreVisor'


export const PlayList = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <div className='divProfile'>
        <div className='navFixed' ></div>
        <div>
          <button className={s.urlBtn} onClick={()=>{return dispatch(getUrlPlayer(audio))}}>TEST</button>
          <button className={s.urlBtn} onClick={()=>{return dispatch(resetUrlPlayer())}}>RESET</button>
        </div>
        <div className='bodyplay'>
          <SpectreVisor/>
        </div>
        <RequestProfile/>
      </div>
    </div>
  )
}
