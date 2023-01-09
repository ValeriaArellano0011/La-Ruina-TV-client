import React from 'react';
import s from './css/ProfileMenu.module.css';
import profileMenuCss from './css/ProfileMenu';
import handlerOptionCanvas from '../../handlers/handlerOptionCanvas';
import btnMenuTv from '../../design/ruinatv-icon-play-b.png';
import userIcon from '../../design/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { getOption } from '../../middlewares/redux/actions';

export const ProfileMenu = () => {
  const currentUser = useSelector(state=>state.currentUser)
  const adminUser = useSelector(state=>state.adminUser)
  const dispatch = useDispatch()
  function onClickValue(e){
    return (
      dispatch(getOption(e.target.value)),
      handlerOptionCanvas(e.target.value)
      )}
  return (
    <div>
        <ul className={s.profileBtnCont}>
          <li 
            className={s.profileBtnMenu} 
            onClick={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}
            >
            <img className={s.userIcon} src={userIcon} alt='userIcon' width='15px' />
            Hola, {currentUser} 
            <img className={s.btnMenuTv} src={btnMenuTv} alt='btnMenuTv' width='8px' />
          </li>
          {
          adminUser?
          (<li><button 
            id='optionProfileBtn0' 
            className={s.optionProfileBtn} 
            value='dashboard'
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}

            >DASHBOARD</button></li>) : null
          }
          <li><button 
            id='optionProfileBtn1' 
            className={s.optionProfileBtn} 
            value='profile' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}

            >PERFIL</button></li>

          <li><button 
            id='optionProfileBtn2' 
            className={s.optionProfileBtn} 
            value='configuration' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}

            >CONFIGURACIÓN</button></li>
          <li><button 
            id='optionProfileBtn3' 
            className={s.optionProfileBtn} 
            value='logout' 
            onClick={(e)=>{return onClickValue(e)}}
            onMouseEnter={() => {return profileMenuCss('enter')}}
            onMouseLeave={() => {return profileMenuCss('leave')}}

            >SALIR</button></li>
        </ul>

    </div>
  )
}
