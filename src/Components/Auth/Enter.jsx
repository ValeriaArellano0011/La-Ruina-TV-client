import React from 'react'
import GoogleSignUp from '../Auth/GoogleSignUp'
import style from './css/Enter.module.css'
import { EnterCss } from './js/EnterCss'

const Enter = () => {
  EnterCss()
  return (
    <div className={style.enterBody}>
      <div className={style.visor}>
      <div className={style.visorCanvas}></div>
      <div className={style.welcomeCont} id='welcomeCont'>
      <h1>ENTRÁ BOBO, VENÍ PARA ACÁ</h1>
      <h4>Debes ingresar con una cuenta de Google</h4>
        {/* <ul className={style.welcomeUl}> */}
            <GoogleSignUp/>
        {/* </ul> */}

      </div>
      

      
     </div>
    </div>
  )
}

export default Enter
