import React from 'react'
import YouTubePlayer from 'react-player/youtube'

const Player = (props) => {
  const {idYT}= props
  return (
    <div className='playerCont'>
      <ul className='playerUl'>
       <li className='playerLi'>
        <iframe id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen aria-valuenow={0}
          src={`https://www.youtube.com/embed/${idYT}?start=1&showinfo=0&autoplay=1&disablekb=1&enablejsapi=1&modestbranding=1&playsinline=1&color=white`}
          frameborder="0" />
        </li>
      </ul>
    </div>
    
  )
}


export default Player
