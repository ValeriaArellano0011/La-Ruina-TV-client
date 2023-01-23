import React from 'react';
import s from './css/ProfileMenu.module.css';
import userIcon from '../../design/user-icon.png';
import OptionCanvas from '../../functions';
import { useDispatch } from 'react-redux';
import { getOption } from '../../middlewares/redux/actions';

export const EnterBtn = () => {
  const dispatch = useDispatch()
  function onClickValue(e){
    return (
      dispatch(getOption(e.target.id)),
      OptionCanvas(e.target.id)
      )}
  return (
    <div
      className={s.enterBtn}
      id='login'
      onClick={(e) => {
        return(
          onClickValue(e), 
          document.querySelector('#slideCanvasCont').style.overflowY="hidden"
        )
      }
    }>
    <img className={s.userIconEnter} src={userIcon} alt='userIcon' width='15px' />
      Ingresar
  </div>
  )
}
