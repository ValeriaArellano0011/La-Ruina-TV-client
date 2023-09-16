import s from './Enter.module.css';
import LoginGoogle from './LoginGoogle';
import LoginInner from './LoginInner';
import { EnterCss } from './js/EnterCss';
import { URL_LARUINAHUB_REGISTER } from '../../../middlewares/config';
import LoginLaRuinaHub from './LoginLaRuinaHub';

const Enter = () => {
  EnterCss()
  return (
    <div className={s.enterBody}>
      <div className={s.welcomeCont} id='welcomeCont'>
        <h1>ENTRÁ BOBO, VENÍ PARA ACÁ</h1>
        <LoginInner/>
        <div className={s.separatorContainer}>
          <div className='separator'/>
          <span className='family-poppins separator-or'>O</span>
          <div className='separator'/>
        </div>
        <h4 className='family-poppins'>puedes ingresar con:</h4>
        <LoginGoogle/><br />
        <LoginLaRuinaHub/>
        <p className='family-poppins'>¿No tienes una cuenta? <a className={s.linkHub} href={URL_LARUINAHUB_REGISTER}>Regístrate</a></p>
      </div>
    </div>
  )
}

export default Enter
