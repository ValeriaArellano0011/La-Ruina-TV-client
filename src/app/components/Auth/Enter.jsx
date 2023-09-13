import s from './Enter.module.css';
import LoginGoogle from '../Auth/LoginGoogle';
import LoginInner from './LoginInner';
import { EnterCss } from './js/EnterCss';
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
        {!(currentPath==='/admin')? <LoginGoogle/> : <LoginInner/> }
      </div>
     </div>
    </div>
  )
}

export default Enter
