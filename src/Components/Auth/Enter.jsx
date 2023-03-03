import React from 'react'
import GoogleSignUp from '../Auth/GoogleSignUp'
import style from './css/Enter.module.css'
import { EnterCss } from './js/EnterCss'
import LogIn from './LogIn'
import { useLocation } from 'react-router-dom';

const Enter = () => {
  const location = useLocation()
  const currentPath = location.pathname;
  EnterCss()
  return (
    <div className={style.enterBody}>
      <div className={style.visor}>
        <div className={style.visorCanvas}/>
        <div className={style.welcomeCont} id='welcomeCont'>
        <h1>ENTRÁ BOBO, VENÍ PARA ACÁ</h1>
        <h4>Debes ingresar con una cuenta de Google</h4>
        {!(currentPath==='/admin')? <GoogleSignUp/> : <LogIn/> }
      </div>
     </div>
    </div>
  )
}

export default Enter
