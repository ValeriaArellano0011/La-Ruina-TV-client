import React from 'react'
import ReactPlayer from 'react-player'


const Browser = () => {
    
  return (
    <div>
        <h1>Bienvenido a La Ruina Tv</h1>
        <div>
        <ReactPlayer playing={true} muted={true} width='200px' height='150px' url='https://www.youtube.com/watch?v=8_HBQE03gbc&ab_channel=z3nPnk' />
        </div>
    </div>
  )
}

export default Browser
