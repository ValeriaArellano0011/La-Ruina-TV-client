import React from 'react'
// import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { PlayBodyCss } from '../../functions/BodyCss';

const Play = () => {
  PlayBodyCss()
  const {id}= useParams()

  return (
    <div className='playCont'>

{/* <ReactPlayer url='https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl'/> */}
      <ul className='playUl'><iframe 
        width="80%" 
        height="80%" 
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen='true'>
      </iframe></ul>

    </div>
    
  )
}

export default Play
