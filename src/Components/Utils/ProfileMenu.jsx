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
import notificationIcon from '../../design/ruinatv-icon-play-n.png'

export const ProfileMenu = () => {
  const currentUser = useSelector(state=>state.currentUser)
  const rolUser = useSelector(state=>state.rolUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;
  
  const [ userAlias, setUserAlias ] = useState('')

  function onClickValue(e){
    return (
      dispatch(getOption(e.target.value || e)),
      OptionCanvas(e.target.value || e)
    )
  }
  useEffect(() => {
    if (user) {
      setUserAlias(user.userAlias)
    }
}, [user]);
  return (
    <div>
        <ul className={s.profileBtnCont}>
          <li 
            className={s.profileBtnMenu} 
            onClick={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}
            >
            <img className={s.userIcon} src={userIcon} alt='userIcon' width='15px' />
            Hola, {userAlias ? userAlias.split(' ').at(0) : currentUser.userAlias} 
            <img className={s.btnMenuTv} src={btnMenuTv} alt='btnMenuTv' width='8px' />
          </li>
          <li>
            <button 
              id='optionProfileBtn0' 
              className={s.optionProfileBtn} 
              value='profile' 
              onClick={(e)=>{return onClickValue(e)}}
              onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                value='profile'
                src={userIcon} 
                height='12px' 
                alt="" />
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
                value='notifications'
                src={notificationIcon} 
                height='10.5px' 
                alt="" />
                Notificaciones
              </button>
            </li>
            <li>
              <button 
                id='optionProfileBtn2' 
                className={s.optionProfileBtn} 
                value='notifications' 
                onClick={(e)=>{return onClickValue(e)}}
                onMouseEnter={() => {return profileMenuCss('enter')}}>
              <img 
                className={s.imgIcon}
                value='favorites'
                src={likeIcon} 
                height='12px' 
                alt="" />
                Favoritos
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
                value='playlist'
                src={listaIcon} 
                height='12px' 
                alt="" />
                  LISTAS
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
                value='config'
                src={configIcon} 
                height='12px' 
                alt="" />
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
                value={rolUser==='admin'? 'dashboard' : 'subscription'}
                src={subscriptionIcon} 
                height='12px' 
                alt="" />
                {rolUser==='admin'? 'DASHBOARD' : 'SUSCRIPCIÓN'}
              </button>
            </li>
            <li>
              <button 
                id='optionProfileBtn6' 
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
                height='12px'
                alt="" />
                  SALIR
              </button>
            </li>
        </ul>   

    </div>
  )
}
