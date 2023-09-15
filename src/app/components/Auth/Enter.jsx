import s from './Enter.module.css';
import LoginGoogle from '../Auth/LoginGoogle';
import LoginInner from './LoginInner';
import { EnterCss } from './js/EnterCss';
import { URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';

const Enter = () => {
  EnterCss()
  return (
    <div className={s.enterBody}>
      <div className={s.visor}>
        <div className={s.visorCanvas}/>
        <div className={s.welcomeCont} id='welcomeCont'>
          <h1>ENTRÁ BOBO, VENÍ PARA ACÁ</h1>
          <LoginInner/>
          <div className={s.separatorContainer}>
            <div className='separator'/>
            <span className='family-poppins separator-or'>O</span>
          </div>
          <h4 className='family-poppins'>puedes ingresar con una cuenta de Google</h4>
          <LoginGoogle/>
          <p className='family-poppins'>¿No tienes una cuenta? <a className={s.linkHub} href={URL_LARUINAHUB_REGISTER}>Regístrate</a></p>
        </div>
      </div>
    </div>
  )
}

export default Enter
