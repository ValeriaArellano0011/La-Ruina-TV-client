import React from 'react';
import s from './css/ProfileMenu.module.css';
import userIcon from '../design/user-icon.png';
import handlerOptionCanvas from '../handlers/handlerOptionCanvas';

export const EnterBtn = () => {
  function onClickValue(e){
    return (
      handlerOptionCanvas(e.target.value)
      )}
  return (
    <div    className={s.profileBtnMenu} 
            onClick={(e) => {return onClickValue(e)}}>
            <img className={s.userIcon} src={userIcon} alt='userIcon' width='15px' />
            Ingresar
    </div>
  )
}
