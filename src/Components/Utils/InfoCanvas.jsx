import React from 'react'
import s from './css/InfoCanvas.module.css'

export const InfoCanvas = () => {
  return (
    <div 
      className={s.infoCont} 
      id='infoCont'>
      <div className={s.infoContText}>
        <h3 style={{color: 'white'}} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam sequi cum explicabo earum, porro labore libero illo sapiente nobis, rem hic ducimus quis quidem nulla blanditiis praesentium distinctio provident!
        </h3>
      </div>
    </div>
  )
}
