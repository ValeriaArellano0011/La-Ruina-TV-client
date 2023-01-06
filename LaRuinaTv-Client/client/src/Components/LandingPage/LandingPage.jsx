import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/LandingPage.module.css'
import { LandingCss } from './css/LandingCSS'
import ruinaLogo from '../../design/ruina-logo.png'
import visorIntroVideo from '../../design/laruina-intro.mp4'


const LandingPage = () => {
    LandingCss()
  return (
    <div className={style.landingBody}>
      <div className={style.ruinaLogoCont}>
        <img className={style.ruinaLogo} src={ruinaLogo} alt="La Ruina TV" width='120'/>
      </div>
      <div className={style.visor}>
      <video className={style.visorVideoIntro} src={visorIntroVideo} autoPlay={true} loop muted  type="video/mp4"/>
      <div className={style.visorCanvas}></div>
      <div className={style.welcomeCont}>
        <h1>CREA, COMPARTI Y DISFRUTA DE CONTENIDO MULTIMEDIA</h1>
        <ul className={style.welcomeUl}>
                    <li><Link to='/browser'><button 
                    className={style.button1}
                    
                    
                    >Iniciar sesión</button></Link></li>
                    <li><button 
                    className={style.button2}
                    
                    >Crear cuenta</button></li>
                </ul>
      </div>
      

      <div>
      <Link to={'/browser'}><button className={style.button1}>Iniciar sesion</button></Link>
      <Link to={'/dashboard'}><button className={style.button1}>Crear cuenta</button></Link>
        
      </div>
     </div>
    </div>
  )
}

export default LandingPage
