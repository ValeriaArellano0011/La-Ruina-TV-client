import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/Enter.module.css'
import { EnterCss } from './css/EnterCss'
import visorIntroVideo from '../../design/laruina-intro.mp4'

const Enter = () => {
  EnterCss()
  return (
    <div className={style.landingBody}>
      <div className={style.visor}>
      <video className={style.visorVideoIntro} src={visorIntroVideo} autoPlay={true} loop muted  type="video/mp4"/>
      <div className={style.visorCanvas}></div>
      <div className={style.welcomeCont}>
        <h1>CREA, COMPARTI Y DISFRUTA DE CONTENIDO MULTIMEDIA</h1>
        <ul className={style.welcomeUl}>

        <Link to='/browser'><li>
          <button className={style.button1}>Iniciar sesión</button>
            </li></Link>

                    <li><button 
                    className={style.button2}
                    
                    >Crear cuenta</button></li>
                </ul>
      </div>
      

      
     </div>
    </div>
  )
}

export default Enter
