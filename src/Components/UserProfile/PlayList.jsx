import React from 'react'
import RequestProfile from '../../Admin/Requests/RequestProfile'
import s from './css/PlayList.module.css'
import audio from '../../audio/audio.mp3'
import { useDispatch } from 'react-redux'
import { getUrlPlayer, resetUrlPlayer } from '../../middlewares/redux/actions'


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
        <RequestProfile />
        <div className='bodyplay'>
          <div className='contenedor-barra'>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="line6"></div>
            <div className="line8"></div>
            <div className="line9"></div>
            <div className="line10"></div>
            <div className="line11"></div>
            <div className="line12"></div>
            <div className="line13"></div>
            <div className="line14"></div>
            <div className="line15"></div>
            <div className="line16"></div>
            <div className="line17"></div>
          </div>
          <div class="contenedor-avatar">
              <div class="cuerpo">
                  <div class="ojos">
                      <div class="content-1"></div>
                      <div class="content-2"></div>
                  </div>
                  <div class="boca"> 
                  </div>
              </div>
          </div>
        </div>
        
      </div>
      
    </div>

    
  )
}
