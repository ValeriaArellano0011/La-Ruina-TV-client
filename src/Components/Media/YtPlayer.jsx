import React from 'react'
import { YtSubscribeButton } from '../Utils/YtSubscribeButton'

const YtPlayer = (props) => {
  const {idYT}= props
  return (
    <div className='playerCont'>
      <ul className='playerUl'>
       <li className='playerLi'>
         <YtSubscribeButton/>
        <iframe title="iframe" id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
          src={`https://www.youtube.com/embed/${idYT}?start=1&color=white`}
          frameBorder="0" />
        </li>
      </ul>
    </div>
  )
}


export default YtPlayer
