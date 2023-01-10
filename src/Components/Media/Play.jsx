import React from 'react'

const Play = (props) => {
  const {id}= props

  return (
    <div className='playerCont'>
      <ul className='playUl'><iframe 
        width="600px" 
        height="350px" 
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
