import React from 'react';
import GoogleSignUp from '../Auth/GoogleSignUp';
import s from './Enter.module.css';
import { EnterCss } from './js/EnterCss';
import LogIn from './LogIn';
import { useLocation } from 'react-router-dom';

const Enter = () => {
  const location = useLocation()
  const currentPath = location.pathname;
  EnterCss()
  return (
    <div className={s.enterBody}>
      <div className={s.visor}>
        <div className={s.visorCanvas}/>
        <div className={s.welcomeCont} id='welcomeCont'>
        <h1>ENTRÁ BOBO, VENÍ PARA ACÁ</h1>
        <h4>Debes ingresar con una cuenta de Google</h4>
        {!(currentPath==='/admin')? <GoogleSignUp/> : <LogIn/> }
      </div>
     </div>
    </div>
  )
}

export default Enter
