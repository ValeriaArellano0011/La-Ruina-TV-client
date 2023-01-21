import React, {useState, useEffect} from 'react';
import s from './css/ProfileMenu.module.css';
import btnMenuTv from '../../design/ruinatv-icon-play-b.png';
import profileMenuCss from './js/ProfileMenu';
import OptionCanvas from '../../functions';
import { getOption } from '../../middlewares/redux/actions';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import configIcon from '../../design/config-icon.png';
import userIcon from '../../design/user-icon.png';
import adminIcon from '../../design/admin-icon.png';
import likeIcon from '../../design/like-icon.png';
import subscriptionIcon from '../../design/subscription-icon.png';
import listaIcon from '../../design/lista-icon.png';
import logoutIcon from '../../design/logout-icon.png';
import notificationIcon from '../../design/ruinatv-icon-play-b.png'

export const ProfileMenu = () => {
  const currentUser = useSelector(state=>state.currentUser)
  const rolUser = useSelector(state=>state.rolUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;
  
  const [ userAlias, setUserAlias ] = useState('')
  const [ userPicGoogle, setUserPicGoogle ] = useState('')

  function onClickValue(e){
    return (
      dispatch(getOption(e.target.value || e)),
      OptionCanvas(e.target.value || e)
    )
  }
  useEffect(() => {
    if (user) {
      setUserAlias(user.userAlias)
      if(user.googlePic){
        setUserPicGoogle(user.googlePic)
      }
    }
}, [user]);
  return (
    <div className={s.profileCont} id='profileCont'>
        <ul className={s.profileBtnCont}>
          <li 
            className={s.profileBtnMenu} 
            onClick={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}
            >
            <img className={s.userIcon} referrerPolicy="no-referrer" src={userPicGoogle ? userPicGoogle : userIcon} alt='userIcon' width='25px' />
            Hola, {currentUser? currentUser.userAlias : userAlias.split(' ').at(0) } 
            <img className={s.btnMenuTv} src={btnMenuTv} alt='btnMenuTv' width='8px' />
          </li>
          <ul className={s.ulProfileOptions}>
          <li>
            <button 
              id='optionProfileBtn0' 
              className={s.optionProfileBtn} 
              value='profile' 
              onClick={(e)=>{return onClickValue(e)}}
              onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIconProf}
                referrerPolicy="no-referrer" 
                src={userPicGoogle ? userPicGoogle : userIcon}
                onClick={(e) => {return e.target.value='profile'}}
                alt="" /> <br></br>
                  PERFIL
              </button>
          </li>
            <li>
              <button 
                id='optionProfileBtn1' 
                className={s.optionProfileBtn} 
                value='notifications' 
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                style={{rotate: '-90deg'}}
                onClick={(e) => {return e.target.value='notifications'}}
                src={notificationIcon} 
                alt="" /><br></br>
                Notificaciones
              </button>
            </li>
            <li>
              <button 
                id='optionProfileBtn2' 
                className={s.optionProfileBtn} 
                value='favorites' 
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                onClick={(e) => {return e.target.value='favorites'}}
                src={likeIcon} 
                alt="" /><br></br>
                MIS FAVORITOS
              </button>
            </li>
            <li>
              <button 
                id='optionProfileBtn3' 
                className={s.optionProfileBtn} 
                value='playlist' 
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                onClick={(e) => {return e.target.value='playlist'}}
                src={listaIcon} 
                alt="" /><br></br>
                  MIS LISTAS
              </button>
            </li>
            <li>
              <button 
                id='optionProfileBtn4' 
                className={s.optionProfileBtn} 
                value='config' 
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                onClick={(e) => {return e.target.value='config'}}
                src={configIcon} 
                alt="" /><br></br>
                  CONFIGURACIÓN
              </button>
            </li>
            <li>
              <button                                 
                id='optionProfileBtn5' 
                className={s.optionProfileBtn} 
                value={rolUser==='admin'? 'dashboard' : 'subscription'}
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                onClick={(e) => {return e.target.value=((rolUser==='admin')? ('dashboard') : ('subscription'))}}
                src={rolUser==='admin'? adminIcon : subscriptionIcon} 
                alt="" /><br></br>
                {rolUser==='admin'? 'DASHBOARD' : 'SUSCRIPCIÓN'}
              </button>
            </li>
            <li className={s.ulSalirBtn}>
              <button 
                id='optionProfileBtn6' 
                // className={s.optionSalirBtn} 
                className={s.optionProfileBtn} 
                onClick={()=>{
                  return (
                    localStorage.removeItem('auth'), 
                    history.push('/browser'),
                    window.location.reload()
                  )
                }}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                src={logoutIcon} 
                alt="" /><br></br>
                  SALIR
              </button>
            </li>
        </ul>   
      </ul>
    </div>
  )
}
