import React from 'react'
import YouTubePlayer from 'react-player/youtube'

const Player = (props) => {
  const {id}= props
  return (
    <div className='playerCont'>
      <ul className='playerUl'>
       <li className='playerLi'>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
          src={`https://www.youtube.com/embed/${id}?start=1&muted=1&autoplay=1&disablekb=1&enablejsapi=1&modestbranding=1&playsinline=1&color=white`}
          frameborder="0" allowfullscreen/>
        </li>
      </ul>
    </div>
    
  )
}


export default Player
