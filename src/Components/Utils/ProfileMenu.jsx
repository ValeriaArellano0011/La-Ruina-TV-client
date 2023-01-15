import React from 'react';
import s from './css/ProfileMenu.module.css';
import userIcon from '../../design/user-icon.png';
import btnMenuTv from '../../design/ruinatv-icon-play-b.png';
import profileMenuCss from './js/ProfileMenu';
import OptionCanvas from '../../functions';
import { getOption } from '../../middlewares/redux/actions';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export const ProfileMenu = () => {
  const currentUser = useSelector(state=>state.currentUser)
  const rolUser = useSelector(state=>state.rolUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const userAlias = localStorage.getItem('auth')

  function onClickValue(e){
    return (
      dispatch(getOption(e.target.value)),
      OptionCanvas(e.target.value)
    )
  }
  return (
    <div>
        <ul className={s.profileBtnCont}>
          <li 
            className={s.profileBtnMenu} 
            onClick={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}
            >
            <img className={s.userIcon} src={userIcon} alt='userIcon' width='15px' />
            Hola, {userAlias ? userAlias : currentUser} 
            <img className={s.btnMenuTv} src={btnMenuTv} alt='btnMenuTv' width='8px' />
          </li>
        {
          rolUser==='admin'?  
          <>
            <li><button 
            id='optionProfileBtn0' 
            className={s.optionProfileBtn} 
            value='profile' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}

            >PERFIL</button></li>

            <li><button 
            id='optionProfileBtn1' 
            className={s.optionProfileBtn} 
            value='dashboard'
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}

            >DASHBOARD</button></li>

            <li><button 
              id='optionProfileBtn2' 
              className={s.optionProfileBtn} 
              value='configuration' 
              onClick={(e)=>{return onClickValue(e)}}
              onMouseEnter={() => {return profileMenuCss('enter')}}>
              CONFIGURACIÓN</button></li>
            <li><button 
              id='optionProfileBtn3' 
              className={s.optionProfileBtn} 
              value='logout' 
              onClick={()=>{
                return (
                  localStorage.removeItem('auth'), 
                  history.push('/browser'),
                  window.location.reload()
                )
              }}
              onMouseEnter={() => {return profileMenuCss('enter')}}>
              SALIR</button></li>
            </>
            :
          <><li>
            <button 
            id='optionProfileBtn0' 
            className={s.optionProfileBtn} 
            value='profile' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}
            >

              PERFIL
            </button>
          </li>
          <li><button 
            id='optionProfileBtn1' 
            className={s.optionProfileBtn} 
            value='subscription'
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}

            >SUSCRIPCIÓN</button></li>
          <li><button 
            id='optionProfileBtn2' 
            className={s.optionProfileBtn} 
            value='configuration' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}

            >CONFIGURACIÓN</button></li>
          <li><button 
            id='optionProfileBtn3' 
            className={s.optionProfileBtn} 
            onClick={()=>{
              return (
                localStorage.removeItem('auth'), 
                history.push('/browser'),
                window.location.reload()
              )
            }}
            onMouseEnter={() => {return profileMenuCss('enter')}}

            >SALIR</button></li></>
        }
        </ul>   

    </div>
  )
}
